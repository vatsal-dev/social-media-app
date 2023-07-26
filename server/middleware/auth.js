import jwt from "jsonwebtoken"; // Import the JSON Web Token (JWT) library

// Middleware function to verify the authenticity of a JWT token in incoming requests
export const verifyToken = async (req, res, next) => {
  try {
    // Get the token from the "Authorization" header of the request
    let token = req.header("Authorization");

    // If no token is provided in the header, return a "403 Forbidden" response
    if (!token) {
      return res.status(403).send("Access Denied");
    }

    // Check if the token starts with "Bearer " and remove it from the token string
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    // Verify the token using the provided JWT secret key (process.env.JWT_SECRET)
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    // If the token is valid, store the verified user information in the "req.user" object
    req.user = verified;

    // Call the "next" function to pass control to the next middleware/route handler
    next();
  } catch (err) {
    // If an error occurs during token verification, respond with a "500 Internal Server Error" and the error message
    res.status(500).json({ error: err.message });
  }
};
