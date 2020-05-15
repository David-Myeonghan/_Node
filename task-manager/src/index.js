const express = require("express");
require("./db/mongoose"); // This ensures the mongoose.js to connect to the DB.
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// Without middleware: new request -> run route handler
// With middleware: new request -> do something -> run route handler
// app.use((req, res, next) => {
// 	if (req.method === "GET") {
// 		res.send("GET requests are disabled");
// 	} else {
// 		next();
// 	}
// 	// console.log(req.method, req.path);
// 	// next(); // if you have the next thing to do after executing middlewre, don't forget to write next(), or it takes forever.
// });

// middleware for server maintenance
app.use((req, res, next) => {
	res.status(503).send("Server in maintenance now. Check back soon!");
});

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

// ===
// Experiment

// Example bcrypt.
// const bcrypt = require("bcryptjs");

// const myFunction = async () => {
// 	const password = "asdflkj1";
// 	const hashedPassword = await bcrypt.hash(password, 8); // 8 is recommended.

// 	console.log(password);
// 	console.log(hashedPassword);

// 	const isMatch = await bcrypt.compare("Asdflkj1", hashedPassword);
// 	console.log(isMatch);
// };

// myFunction();

const jwt = require("jsonwebtoken");

const myFunction = async () => {
	const token = jwt.sign({ _id: "abc123" }, "thisisnode", { expiresIn: "7 days" });
	console.log(token);

	const data = jwt.verify(token, "thisisnode");
	console.log(data);
};

myFunction();
