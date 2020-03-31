const request = require("request");

const weatherUrl =
	"https://api.darksky.net/forecast/232e936ccf8b8b111d3ef77a0fae8ec8/37.8267,-122.4233?units=si";

const mapBoxUrl =
	"https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibXlkYXYxMiIsImEiOiJjazhmazV4bXYwNTZrM21vemV1NHhpYTh5In0._yL2n_UfOxYh1X6hvzQylw&limit=1";

request({ url: weatherUrl, json: true }, (error, response) => {
	// console.log(response.body.currently);

	const summary = response.body.daily.data[0].summary;
	const temperature = response.body.currently.temperature;
	const precipProbability = response.body.currently.precipProbability;

	console.log(
		summary +
			" It is currently " +
			temperature +
			" degrees out. There is a " +
			precipProbability +
			"% chance of rain."
	);
});

// Geocoding
// Address -> Lat/Long -> Weather
request({ url: mapBoxUrl, json: true }, (error, response) => {
	const latitude = response.body.features[0].center[1];
	const longitude = response.body.features[0].center[0];

	console.log(latitude, longitude);
});
