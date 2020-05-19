const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth"); // auth middleware
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
		// res.send({ user: user.getPublicProfile(), token });
		res.send({ user, token });
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post("/users/logout", auth, async (req, res) => {
	// log out of one out of my many devices
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			console.log(token.token !== req.token);
			//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
			return token.token !== req.token; // check if tokens are equal to the one that was used, return false filtering it out //if not equal, returning true filtering it out.
		});
		await req.user.save();

		res.send();
	} catch (e) {
		res.status(500).send();
	}
});

// Logout of all sessions (all devices, delete all tokens)
router.post("/users/logoutAll", auth, async (req, res) => {
	try {
		req.user.tokens = [];
		// console.log(req.user.tokens);

		await req.user.save();
		res.send();
	} catch (e) {
		res.status(500).send(e);
	}
});

router.get("/users/me", auth, async (req, res) => {
	//this 'auth' is how we put a middleware into an individual router.

	res.send(req.user); // send the user fetched from auth middleware through req.
});

// router.get("/users/:id", async (req, res) => {
// 	const _id = req.params.id; // '_id' should be properly formatted(12, or 24 digits) fake or true id.

// 	try {
// 		const user = await User.findById(_id);

// 		if (!user) {
// 			return res.status(404).send();
// 		}

// 		res.send(user);
// 	} catch (e) {
// 		res.status(500).send();
// 	}
// });

router.patch("/users/me", auth, async (req, res) => {
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

		// const user = await User.findById(req.params.id); // Insteaad of fetching a user, use from req.user

		updates.forEach((update) => (req.user[update] = req.body[update])); // this is how we access to a property dynamically instead of using '.', which is hardcoded and static.
		await req.user.save();

		// if (!user) { // no longer needed as a user logged in just now.
		// 	return res.status(404).send();
		// }

		res.send(req.user);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.delete("/users/me", auth, async (req, res) => {
	try {
		// const user = await User.findByIdAndDelete(req.user._id);

		// if (!user) {
		// 	return res.status(404).send();
		// }

		await req.user.remove();

		res.send(req.user);
	} catch (e) {
		res.status(500).send();
	}
});

module.exports = router;
