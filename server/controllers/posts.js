// Importing the Post and User models
import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
// Creating a new post with the provided data and saving it to the database
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    
    // Finding the user associated with the provided userId
    const user = await User.findById(userId);
    
    // Creating a new Post instance with the user and post data
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},        // Initializing the 'likes' field as an empty object
      comments: [],     // Initializing the 'comments' field as an empty array
    });
    
    // Saving the new post to the database
    await newPost.save();

    // Fetching all posts from the database and sending them as the response
    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
// Fetching all posts from the database and sending them as the response
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Fetching all posts associated with a specific userId and sending them as the response
export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
// Handling the like functionality for a post with the given postId
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    
    // Finding the post associated with the provided postId
    const post = await Post.findById(id);
    
    // Checking if the user has already liked the post and updating the 'likes' field accordingly
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId); // Unliking the post by removing the user from the 'likes' object
    } else {
      post.likes.set(userId, true); // Liking the post by adding the user to the 'likes' object
    }

    // Updating the post with the modified 'likes' field and fetching the updated post
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true } // Return the updated document after the update is applied
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
