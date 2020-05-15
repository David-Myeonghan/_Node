require("../src/db/mongoose");
const User = require("../src/models/user");

// 5ebcf0e82a89c62567ad2f07

// User.findByIdAndUpdate("5ebdace4f543892af2a8067c", { age: 1 })
// 	.then((user) => {
// 		console.log(user);
// 		return User.countDocuments({ age: 1 });
// 	})
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const updateAgeAndCount = async (id, age) => {
	const user = await User.findByIdAndUpdate(id, { age });
	const count = await User.countDocuments({ age });

	return count; // can return both of two values above making them into object
};

updateAgeAndCount("5ebdace4f543892af2a8067c", 2)
	.then((count) => {
		console.log(count);
	})
	.catch((e) => {
		console.log(e);
	});
