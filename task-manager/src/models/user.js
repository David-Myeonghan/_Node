const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
	// Upper case for model
	// '_v' means version
	name: {
		type: String,
		required: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minlength: 7,
		validate(value) {
			if (value.toLowerCase().includes("password")) {
				throw new Error('Password cannot contain "password"');
			}
		},
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			// validation using NPM modules
			if (!validator.isEmail(value)) {
				throw new Error("Email is invalid");
			}
		},
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			// validation using my own logic
			if (value < 0) {
				throw new Error("Age must be a positive number");
			}
		},
	},
});

// --- Example
// Constructor function
// const me = new User({
// 	name: "  David    ",
// 	email: "DAVID@GMAIL.COM",
// 	password: "sfd2ressf",
// });

// me.save()
// 	.then((me) => {
// 		console.log(me);
// 	})
// 	.catch((error) => {
// 		console.log("Error!", error);
// 	});

module.exports = User;
