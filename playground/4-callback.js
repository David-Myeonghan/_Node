// setTimeout(() => {
// 	console.log("Two seconds are up");
// }, 2000);

// const names = ["David", "Ria", "Jess"];
// const shortNames = names.filter(name => {
// 	return name.length <= 4;
// });

// const geocode = (address, callback) => {
// 	setTimeout(() => {
// 		const data = {
// 			latitude: 0,
// 			longitude: 0
// 		};

// 		// return data;
// 		callback(data);
// 	}, 2000);
// };

// // const data = geocode("Brisbane");
// // console.log(data);

// geocode("Brisbane", data => {
// 	console.log(data);
// });

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (num1, num2, backcall) => {
// 	setTimeout(() => {
// 		backcall(num1 + num2);
// 	}, 2000);
// };

// add(1, 4, (sum) => {
// 	console.log(sum); // Should print: 5
// });

//callback example.
// Geocoding
// Address -> Lat/Long -> Weather
// request({ url: mapBoxUrl, json: true }, (error, response) => {
// 	if (error) {
// 		console.log("Unable to connect to location services.");
// 	} else if (response.body.features.length === 0) {
// 		console.log("Unable to find location");
// 	} else {
// 		const latitude = response.body.features[0].center[1]; // This should be inside of else statement to make use of the variables.
// 		const longitude = response.body.features[0].center[0];
// 		console.log(latitude, longitude);
// 	}
// });

//---

const doWorkCallback = (callback) => {
	setTimeout(() => {
		// callback("This is my error!", undefined);
		callback(undefined, [1, 4, 7]);
	}, 2000);
};

doWorkCallback((error, result) => {
	if (error) {
		return console.log(error);
	}

	console.log(result);
});
