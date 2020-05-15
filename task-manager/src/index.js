const express = require("express");
require("./db/mongoose"); // This ensures the mongoose.js to connect to the DB.
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

// automatically parse incoming json to an object to access
app.use(express.json());

app.post("/users", async (req, res) => {
	const user = new User(req.body);

	// handle individual errors with individual try/catch statement
	try {
		await user.save();
		res.status(201).send(user);
	} catch (e) {
		res.status(400).send(e);
	}
});

app.get("/users", async (req, res) => {
	try {
		const users = await User.find({});
		res.send(users);
	} catch (e) {
		res.status(500).send();
	}
});

app.get("/users/:id", async (req, res) => {
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

app.patch("/users/:id", async (req, res) => {
	const updates = Object.keys(req.body); // validating only allowed updates
	const allowdUpdates = ["name", "email", "password", "age"];
	const isValidOperation = updates.every((update) => allowdUpdates.includes(update));

	if (!isValidOperation) {
		return res.status(400).send({ error: "Invalid updates!" });
	}

	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

		if (!user) {
			return res.status(404).send();
		}

		res.send(user);
	} catch (e) {
		res.status(400).send(e);
	}
});

app.post("/tasks", async (req, res) => {
	const task = new Task(req.body);

	try {
		await task.save();
		res.status(201).send(task);
	} catch (e) {
		res.status(400).send(e);
	}
});

app.get("/tasks", async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.send(tasks);
	} catch (e) {
		res.status(500).send(e);
	}
});

app.get("/tasks/:id", async (req, res) => {
	const _id = req.params.id;

	try {
		const task = await Task.findById(_id);

		if (!task) {
			return res.status(404).send();
		}
		res.send(task);
	} catch (e) {
		res.status(500).send(error);
	}

	// Chaining Promise in a old way.
	// Task.findById(_id)
	// 	.then((task) => {
	// 		console.log(task);
	// 		if (!task) {
	// 			return res.status(404).send();
	// 		}
	// 		res.send(task);
	// 	})
	// 	.catch((error) => {
	// 		res.status(500).send(error);
	// 	});
});

app.patch("/tasks/:id", async (req, res) => {
	const updates = Object.keys(req.body); // convert from an object to an array of properties.
	const allowdUpdates = ["description", "completed"];
	const isValidOperation = updates.every((update) => allowdUpdates.includes(update));

	if (!isValidOperation) {
		return res.status(400).send({ error: "Invalid Updates!" });
	}
	try {
		const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

		if (!task) {
			return res.status(404).send();
		}

		res.send(task);
	} catch (e) {
		res.status(400).send(e);
	}
});

app.listen(port, () => {
	console.log("Server is up on port " + port);
});
