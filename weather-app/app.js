const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
// console.log(process.argv);

if (!address) {
	console.log("Please provide an address");
} else {
	// as a callback result, get error or data
	geocode(address, (error, { latitude, longitude, location } = {}) => {
		// object destructuring and {,,} = {} is default function paarameters in case or errors occur.
		if (error) {
			return console.log(error); // if no error, function continue on.
		}

		// console.log("Error:", error);
		// console.log("Data:", data);

		forecast(latitude, longitude, (error, forecastData) => {
			if (error) {
				return console.log(error);
			}

			console.log(location);
			console.log(forecastData);
		});
	});
}
