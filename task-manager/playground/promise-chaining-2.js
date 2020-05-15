require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5ebcd5b5f2958a205689eb31")
// 	.then((task) => {
// 		// No need to grab 'task' unless you use it.
// 		console.log(task);
// 		return Task.countDocuments({ completed: false });
// 	})
// 	.then((result) => {
// 		// chaining promise is difficult to access to its scope
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const deleteTaskAndCount = async (id) => {
	await Task.findByIdAndDelete(id);
	const count = await Task.countDocuments({ completed: false });

	return count;
};

deleteTaskAndCount("5ebdd6e77700ab3488c85ee0")
	.then((count) => {
		console.log(count);
	})
	.catch((e) => {
		console.log(e);
	});
