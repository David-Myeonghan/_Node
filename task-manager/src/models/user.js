const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
	// Create a separate schema first and then pass it into model
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
		unique: true, // after you set this property up, you need to wipe the DB and recreate.
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
	// Need to keep track of the generated token for users in order for users to log out/in, or login in multiple devices.
	tokens: [
		{
			token: {
				type: String,
				required: true,
			},
		},
	],
});

userSchema.methods.generateAuthToken = async function () {
	//are accessible on instance, called 'Instance Methods'
	const user = this;
	const token = jwt.sign({ _id: user._id.toString() }, "thisisnode");

	user.tokens = user.tokens.concat({ token }); // save tokens in DB.
	await user.save();

	return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
	// Static methods are accessible on the Model, called 'Model Methods'
	const user = await User.findOne({ email });

	if (!user) {
		throw new Error("Unable to login: email not registered"); // best to provide a single error, as error with detail would expose of more information.
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		throw new Error("Unable to login");
	}

	return user;
};

// Hash the plain text password before saving.
//'Pre' middleware functions are executed one after another(when 'save' method called), when each middleware calls 'next()'.
userSchema.pre("save", async function (next) {
	// arrow function doesn't bind.
	// Using middleware of Mongoose. provide it once, and it works everywhere the plain password comes in.

	const user = this;

	if (user.isModified("password")) {
		// to make sure that the password only be hashed when users modified (first created user, or update the password)
		user.password = await bcrypt.hash(user.password, 8);
	}
	// console.log("Just before saving!");

	next();
});

const User = mongoose.model("User", userSchema);

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
