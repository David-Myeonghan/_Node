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

app.get("/users", (req, res) => {
	User.find({})
		.then((users) => {
			res.send(users);
		})
		.catch((error) => {
			res.status(500).send();
		});
});

app.get("/users/:id", (req, res) => {
	const _id = req.params.id; // '_id' should be properly formatted(12, or 24 digits) fake or true id.

	User.findById(_id)
		.then((user) => {
			if (!user) {
				return res.status(404).send();
			}

			res.send(user);
		})
		.catch((error) => {
			res.status(500).send(error);
		});
});

app.post("/tasks", (req, res) => {
	const task = new Task(req.body);

	task
		.save()
		.then((result) => {
			res.status(201).send(task);
		})
		.catch((error) => {
			res.status(400).send(error);
		});
});

app.get("/tasks", (req, res) => {
	Task.find({})
		.then((tasks) => {
			res.send(tasks);
		})
		.catch((error) => {
			res.status(500).send(error);
		});
});

app.get("/tasks/:id", (req, res) => {
	const _id = req.params.id;

	Task.findById(_id)
		.then((task) => {
			console.log(task);
			if (!task) {
				return res.status(404).send();
			}
			res.send(task);
		})
		.catch((error) => {
			res.status(500).send(error);
		});
});

app.listen(port, () => {
	console.log("Server is up on port " + port);
});
