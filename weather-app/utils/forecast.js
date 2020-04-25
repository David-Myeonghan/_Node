const request = require("request");

forecast = (latitude, longitude, callback) => {
	// const url =
	// 	"https://api.mapbox.com/geocoding/v5/mapbox.places/" +
	// 	encodeURIComponent(latitude, longitude) +
	// 	".json?access_token=pk.eyJ1IjoibXlkYXYxMiIsImEiOiJjazhmazV4bXYwNTZrM21vemV1NHhpYTh5In0._yL2n_UfOxYh1X6hvzQylw&limit=1";

	// const url =
	// 	"https://api.darksky.net/forecast/232e936ccf8b8b111d3ef77a0fae8ec8/" +
	// 	encodeURIComponent(latitude, longitude) +
	// 	"?units=si";

	const url =
		"http://api.weatherstack.com/current?access_key=20b769c29ecb1d31204e7d0aafcad9d7&query=" +
		latitude +
		"," +
		longitude;

	request({ url: url, json: true }, (error, response) => {
		const temperature = response.body.current.temperature;

		if (error) {
			callback("Unable to connect to weather services!", undefined);
		} else if (response.body.error) {
			callback("Unable to find location", undefined);
		} else {
			callback(undefined, " It is currently " + temperature + " degrees");
		}
	});
};

module.exports = forecast;
