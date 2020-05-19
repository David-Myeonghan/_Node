const express = require("express");
const Task = require("../models/task");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/tasks", auth, async (req, res) => {
	// const task = new Task(req.body);
	const task = new Task({
		...req.body, // copy paste req.body
		owner: req.user._id, // and add owner
	});

	try {
		await task.save();
		res.status(201).send(task);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get("/tasks", async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.send(tasks);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.get("/tasks/:id", async (req, res) => {
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

router.patch("/tasks/:id", async (req, res) => {
	const updates = Object.keys(req.body); // convert from an object to an array of properties.
	const allowdUpdates = ["description", "completed"];
	const isValidOperation = updates.every((update) => allowdUpdates.includes(update));

	if (!isValidOperation) {
		return res.status(400).send({ error: "Invalid Updates!" });
	}
	try {
		// const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
		const task = await Task.findById(req.params.id);
		updates.forEach((update) => (task[update] = req.body[update]));
		await task.save();

		if (!task) {
			return res.status(404).send();
		}

		res.send(task);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.delete("/tasks/:id", async (req, res) => {
	try {
		const task = await Task.findByIdAndDelete(req.params.id);

		if (!task) {
			return res.status(404).send();
		}

		res.send(task);
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;
