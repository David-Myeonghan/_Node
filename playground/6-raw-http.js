const http = require("http");

// Core 'http' node module
// Low level than expected.
// So people use 'axios' or 'request'
// why low level?
// node is supposed to used with NPM libraries that is made of these low level core module.

const url =
	"http://api.weatherstack.com/current?access_key=20b769c29ecb1d31204e7d0aafcad9d7&query=45,-75&units=f";

const request = http.request(url, (response) => {
	var data = "";

	response.on("data", (chunk) => {
		// this callback will fire when data comes in. one time or many times
		// console.log(chunk); // chunk is buffer
		data = data + chunk.toString();
	});

	response.on("end", () => {
		// console.log(data);
		const body = JSON.parse(data);
		console.log(body);
	});
});

request.on("error", (error) => {
	console.log("An error", error);
}); // set up another listener

request.end();
