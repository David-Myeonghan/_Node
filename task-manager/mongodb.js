// CRUD: create, read, update, delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient; // gives access to the function necessary to connect it to the database
// const ObjectID = mmongodb.ObjectID;

// Object Destructuring above three lines
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017"; //connect to local host server
const databaseName = "task-manager"; // Database name

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	//callback function // connection to DB is asynchronous
	if (error) {
		return console.log("Unable to connect to database"); // Use return to stop continuing execution
	}

	const db = client.db(databaseName); // gives database reference (can manipulate now)

	// UPDATE using Promise instead of Callback.
	// db.collection("users")
	// 	.updateOne({ _id: new ObjectID("5ebb8aee4e80080747b3c7d1") }, { $inc: { age: 1 } })
	// 	.then((result) => {
	// 		console.log(result);
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});

	db.collection("tasks")
		.updateMany({ completed: false }, { $set: { completed: true } })
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		});

	// READ
	// if you want to search by id, use ObjectID as this is not string, but binary.
	// db.collection("users").findOne({ _id: new ObjectID("5ebbd90697b04e0f2e64b7ad") }, (error, user) => {
	// 	if (error) {
	// 		return console.log("Unable to fetch");
	// 	}

	// 	console.log(user);
	// });

	// db.collection("users")
	// 	.find({ age: 27 }) // 'find' method doesn't take callback. it bring back cursor which is a pointer to data
	// 	.toArray((error, users) => {
	// 		if (error) {
	// 			return;
	// 		}

	// 		console.log(users);
	// 	});

	// db.collection("users")
	// 	.find({ age: 27 })
	// 	.count((error, count) => {
	// 		console.log(count);
	// 	});

	// db.collection("tasks").findOne({ _id: new ObjectID("5ebbda6dd1deff0fa7928c89") }, (error, task) => {
	// 	if (error) {
	// 		return console.log(error);
	// 	}

	// 	console.log(task);
	// });

	// db.collection("tasks")
	// 	.find({ completed: false })
	// 	.toArray((error, tasks) => {
	// 		if (error) {
	// 			console.log(error);
	// 		}
	// 		console.log(tasks);
	// 	});

	// CREATE
	// db.collection("users").insertOne(
	// 	{
	// 		// insertOne is asynchronous.
	// 		// _id: id,
	// 		name: "Jack",
	// 		age: 27,
	// 	},
	// 	(error, result) => {
	// 		if (error) {
	// 			return console.log("Unable to insert user");
	// 		}
	// 		console.log(result.ops); //array of the document
	// 	}
	// );

	// db.collection("users").insertMany(
	// 	[
	// 		{
	// 			name: "Mary",
	// 			age: 27,
	// 		},
	// 		{
	// 			name: "Ria",
	// 			age: 26,
	// 		},
	// 	],
	// 	(error, result) => {
	// 		if (error) {
	// 			return console.log("Unable to insert documents!");
	// 		}
	// 		console.log(result.ops);
	// 	}
	// );

	// db.collection("tasks").insertMany(
	// 	[
	// 		{
	// 			description: "Eat",
	// 			completed: true,
	// 		},
	// 		{
	// 			description: "Sleep",
	// 			completed: false,
	// 		},
	// 		{
	// 			description: "Workout",
	// 			completed: false,
	// 		},
	// 	],
	// 	(error, result) => {
	// 		if (error) {
	// 			return console.log("Unable to insert documents");
	// 		}
	// 		console.log(result.ops);
	// 	}
	// );
});
