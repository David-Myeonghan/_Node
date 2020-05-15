const express = require("express");
require("./db/mongoose"); // This ensures the mongoose.js to connect to the DB.
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

// automatically parse incoming json to an object to access
app.use(express.json());

app.post("/users", (req, res) => {
	const user = new User(req.body);

	user
		.save()
		.then(() => {
			res.send(user);
		})
		.catch((error) => {
			res.status(400).send(error); //chaining
		});
});

app.post("/tasks", (req, res) => {
	const task = new Task(req.body);

	task
		.save()
		.then((result) => {
			res.send(task);
		})
		.catch((error) => {
			res.status(400).send(error);
		});
});

app.listen(port, () => {
	console.log("Server is up on port " + port);
});
