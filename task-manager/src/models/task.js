const mongoose = require("mongoose");
// const validator = require("validator");

const Task = mongoose.model("Task", {
	description: {
		type: String,
		trim: true,
		required: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

const task = new Task({
	description: "  Eat Banana  ",
});

// task
// 	.save()
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

module.exports = Task;
