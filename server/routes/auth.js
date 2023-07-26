import express from "express"; // Import the Express framework
import { login } from "../controllers/auth.js"; // Import the login function from the auth controller

// Create a new Router instance from Express
const router = express.Router();

// Define a POST route for user login at "/login" and use the "login" function from the auth controller to handle the request
router.post("/login", login);

export default router;
