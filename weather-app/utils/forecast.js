const request = require("request");

forecast = (latitude, longitude, callback) => {
	const url =
		"https://api.mapbox.com/geocoding/v5/mapbox.places/" +
		encodeURIComponent(latitude, longitude) +
		".json?access_token=pk.eyJ1IjoibXlkYXYxMiIsImEiOiJjazhmazV4bXYwNTZrM21vemV1NHhpYTh5In0._yL2n_UfOxYh1X6hvzQylw&limit=1";

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback("Unable to connect to location services!", undefined);
		} else if (response.body.features.length === 0) {
			callback(
				"Unable to find the lat,long provided. Try another search",
				undefined
			);
		} else {
			// const place_name = response.features[0].place_name;
			callback(undefined, { place_name: response.body.features[0].place_name });
		}
	});
};

module.exports = forecast;
