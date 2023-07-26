import bcrypt from "bcrypt"; // Library for password hashing
import jwt from "jsonwebtoken"; // Library for generating and verifying JSON Web Tokens
import User from "../models/User.js"; // Import the User model

//! /* REGISTER USER */
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    // Generate a salt to be used for hashing the password
    const salt = await bcrypt.genSalt();
    // Hash the password using the generated salt
    const passwordHash = await bcrypt.hash(password, salt);

    // Create a new User instance with the provided user data
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash, // Store the hashed password in the database
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000), // Assign random viewedProfile value for demonstration purposes
      impressions: Math.floor(Math.random() * 10000), // Assign random impressions value for demonstration purposes
    });

    // Save the new user to the database
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); // Respond with the saved user data
  } catch (err) {
    res.status(500).json({ error: err.message }); // If an error occurs, respond with the error message
  }
};

//! /* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user with the provided email in the database
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    // Compare the provided password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    // If the credentials are valid, generate a JSON Web Token (JWT) with the user's ID as payload
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // Remove the hashed password from the user object before sending it in the response
    delete user.password;

    // Respond with the JWT and the user data
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message }); // If an error occurs, respond with the error message
  }
};
