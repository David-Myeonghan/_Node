const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.post("/users", async (req, res) => {
	const user = new User(req.body);

	// handle individual errors with individual try/catch statement
	try {
		await user.save();
		const token = await user.generateAuthToken();
		res.status(201).send({ user, token });
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post("/users/login", async (req, res) => {
	try {
		const user = await User.findByCredentials(req.body.email, req.body.password); // make sense when we're not working with an individual user but working with the user collection as a whole.
		const token = await user.generateAuthToken(); // for very specific user, user instance.
		res.send({ user, token });
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get("/users", async (req, res) => {
	try {
		const users = await User.find({});
		res.send(users);
	} catch (e) {
		res.status(500).send();
	}
});

router.get("/users/:id", async (req, res) => {
	const _id = req.params.id; // '_id' should be properly formatted(12, or 24 digits) fake or true id.

	try {
		const user = await User.findById(_id);

		if (!user) {
			return res.status(404).send();
		}

		res.send(user);
	} catch (e) {
		res.status(500).send();
	}
});

router.patch("/users/:id", async (req, res) => {
	const updates = Object.keys(req.body); // validating only allowed updates
	const allowdUpdates = ["name", "email", "password", "age"];
	const isValidOperation = updates.every((update) => allowdUpdates.includes(update));

	if (!isValidOperation) {
		return res.status(400).send({ error: "Invalid updates!" });
	}

	try {
		// As 'findByIdAndUpdate' bypasses Mongoose and performs derect operation on DB, so we need to change this in order to make the most
		// of the advantages of Mongoose middleware for hashing password where the plain text password is provided to here.
		// const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

		const user = await User.findById(req.params.id);
		updates.forEach((update) => (user[update] = req.body[update])); // this is how we access to a property dynamically instead of using '.', which is hardcoded and static.
		await user.save();

		if (!user) {
			return res.status(404).send();
		}

		res.send(user);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.delete("/users/:id", async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);

		if (!user) {
			return res.status(404).send();
		}

		res.send(user);
	} catch (e) {
		res.status(500).send();
	}
});

module.exports = router;
