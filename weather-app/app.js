const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const weatherUrl =
	"https://api.darksky.net/forecast/232e936ccf8b8b111d3ef77a0fae8ec8/37.8267,-122.4233?units=si";

const mapBoxUrl =
	"https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibXlkYXYxMiIsImEiOiJjazhmazV4bXYwNTZrM21vemV1NHhpYTh5In0._yL2n_UfOxYh1X6hvzQylw&limit=1";

// request({ url: weatherUrl, json: true }, (error, response) => {
// 	const summary = response.body.daily.data[0].summary;
// 	const temperature = response.body.currently.temperature;
// 	const precipProbability = response.body.currently.precipProbability;

// 	if (error) {
// 		console.log("Unable to connect to weather service!");
// 	} else if (response.body.error) {
// 		console.log("Unable to find location");
// 	} else {
// 		console.log(
// 			summary +
// 				" It is currently " +
// 				temperature +
// 				" degrees out. There is a " +
// 				precipProbability +
// 				"% chance of rain."
// 		);
// 	}
// });

// as a callback result, get error or data
// geocode("Sydney", (error, data) => {
// 	console.log("Error:", error);
// 	console.log("Data:", data);
// });

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
	console.log("Error:", error);
	console.log("Data:", data);
});
