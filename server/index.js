// Import required packages and modules

import express from "express"; // Express framework for building the server
import bodyParser from "body-parser"; // Middleware to parse incoming request bodies
import mongoose from "mongoose"; //! MongoDB object modeling tool
import cors from "cors"; //! Middleware to enable Cross-Origin Resource Sharing
import dotenv from "dotenv"; // Load environment variables from .env file
import multer from "multer"; //! Middleware for handling file uploads
import helmet from "helmet"; //! Middleware to set various HTTP headers for security
import morgan from "morgan"; //! Middleware for logging HTTP requests
import path from "path"; // Utilities for working with file and directory paths
import { fileURLToPath } from "url"; // Provides utilities for working with file URLs
import authRoutes from "./routes/auth.js"; // Import authentication routes
import userRoutes from "./routes/users.js"; // Import user-related routes
import postRoutes from "./routes/posts.js"; // Import post-related routes
import { register } from "./controllers/auth.js"; // Import the register function from auth controller
import { createPost } from "./controllers/posts.js"; // Import the createPost function from posts controller
import { verifyToken } from "./middleware/auth.js"; // Import middleware for verifying tokens
import User from "./models/User.js"; // Import the User model
import Post from "./models/Post.js"; // Import the Post model
import { users, posts } from "./data/index.js"; // Import sample data for users and posts

//! /* CONFIGURATIONS */

// Get the current file name and directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config();

// Create an Express app instance
const app = express();

//!  Middleware setup
app.use(express.json()); // Parse incoming JSON data
app.use(helmet()); // Secure HTTP headers
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); // Set Cross-Origin Resource Policy header
app.use(morgan("common")); // HTTP request logging
app.use(bodyParser.json({ limit: "30mb", extended: true })); // Parse JSON with extended size limit
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); // Parse URL-encoded data with extended size limit
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use("/assets", express.static(path.join(__dirname, "public/assets"))); // Serve static assets from the "public/assets" directory
//! Enabling CORS 
app.use(cors({
  origin: "https://vatsal-socialmedia.netlify.app/",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://vatsal-socialmedia.netlify.app/");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//! /* FILE STORAGE */

// Configuration for storing uploaded files using Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets"); // Destination directory for storing uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name for storing the uploaded file
  },
});

// Create the Multer middleware with the configured storage
const upload = multer({ storage });

//! /* ROUTES WITH FILES */

// Route for user registration with profile picture upload
app.post("/auth/register", upload.single("picture"), register);

// Route for creating a post with an optional picture upload (requires authentication)
app.post("/posts", verifyToken, upload.single("picture"), createPost);

//! /* ROUTES */

// Use authentication routes defined in the "authRoutes" module
app.use("/auth", authRoutes);

// Use user-related routes defined in the "userRoutes" module
app.use("/users", userRoutes);

// Use post-related routes defined in the "postRoutes" module
app.use("/posts", postRoutes);

//! /* MONGOOSE SETUP */

const PORT = process.env.PORT || 6001;

//!  Connect to MongoDB using Mongoose
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Start the server once MongoDB connection is established
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // Uncomment the following lines to insert sample data into the database on startup
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));
