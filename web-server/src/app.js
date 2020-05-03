const path = require("path");
const express = require("express"); // express is just a function.

// console.log(__dirname); // the directory of the current script lives in.
// console.log(__filename); // dirname plus the path to the file itself.
console.log(path.join(__dirname, "../public")); // how to manipulate the file path

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

// req: the first object containing information about the incoming request to the server.
// res: contains a bunch of methods allowing us to customise what we're going to send back to the requester.
// app.get("", (req, res) => { // This is not used as we have app.use(staticPath).
// 	// to send a response when someone tries to get this address.
// 	res.send("<h1>Weather</h1>"); // able to render HTML directly
// });

// app.get("/help", (req, res) => {
// 	res.send([{ name: "David" }, { name: "Mathew" }]); // able to send json and array of objects as well.
// });

app.get("/Weather", (req, res) => {
	res.send({ forecast: "Cloudy", location: "Brisbane" });
});

app.listen(3000, () => {
	console.log("Server is up on port 3000");
}); // 3000 is not default but in local, it's okay. // default http: 80
