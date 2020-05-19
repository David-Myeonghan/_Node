const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
	try {
		const token = req.header("Authorization").replace("Bearer ", "");
		const decoded = jwt.verify(token, "thisisnode"); // verify it is valid and not expired
		const user = await User.findOne({ _id: decoded._id, "tokens.token": token }); // Extract user ID from the decoded token// find a user with user id who has a auth token still stroed.

		if (!user) {
			throw new Error();
		}

		req.token = token; // for deleting token when logging out.
		req.user = user; // give the route handlers access to the user that has been already fetched.
		next();
	} catch (e) {
		res.status(401).send({ error: "Please authenticate." });
	}
};

module.exports = auth;
