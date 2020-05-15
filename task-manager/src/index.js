const express = require("express");
require("./db/mongoose"); // This ensures the mongoose.js to connect to the DB.
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// automatically parse incoming json into an object to access
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Example of using router
// const router = new express.Router();
// router.get("/test", (req, res) => {
// 	res.send("This is from my other router");
// });
// app.use(router);

app.listen(port, () => {
	console.log("Server is up on port " + port);
});

const bcrypt = require("bcryptjs");

const myFunction = async () => {
	const password = "asdflkj1";
	const hashedPassword = await bcrypt.hash(password, 8); // 8 is recommended.

	console.log(password);
	console.log(hashedPassword);

	const isMatch = await bcrypt.compare("Asdflkj1", hashedPassword);
	console.log(isMatch);
};

myFunction();
