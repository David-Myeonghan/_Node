const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
	useNewUrlParser: true,
	useCreateIndex: true,
});

// Constructor function
const User = mongoose.model("User", {
	// Upper case for model
	// _v is version
	name: {
		type: String,
	},
	age: {
		type: Number,
	},
});

// const me = new User({
// 	name: "David",
// 	age: "David", // age type invalid
// });

// me.save()
// 	.then((me) => {
// 		console.log(me);
// 	})
// 	.catch((error) => {
// 		console.log("Error!", error);
// 	});

const Task = mongoose.model("Task", {
	description: {
		type: String,
	},
	completed: {
		type: Boolean,
	},
});

const task = new Task({
	description: "Eating",
	completed: false,
});

task
	.save()
	.then((result) => {
		console.log(result);
		console.log(task);
	})
	.catch((error) => {
		console.log(error);
	});
