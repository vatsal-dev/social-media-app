import User from "../models/User.js"; // Import the User model

/* READ */

// Get a specific user by ID
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    // Find the user in the database using the provided ID
    const user = await User.findById(id);
    res.status(200).json(user); // Respond with the user data
  } catch (err) {
    res.status(404).json({ message: err.message }); // If the user is not found, respond with a "404 Not Found" status code and an error message
  }
};

// Get the list of friends for a specific user by ID
export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    // Find the user in the database using the provided ID
    const user = await User.findById(id);

    // Get the list of friends for the user using the "user.friends" array
    const friends = await Promise.all(user.friends.map((id) => User.findById(id)));

    // Format the friends' data to include only specific fields and send the formatted data in the response
    const formattedFriends = friends.map(({ _id, firstName, lastName, occupation, location, picturePath }) => {
      return { _id, firstName, lastName, occupation, location, picturePath };
    });
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message }); // If the user is not found, respond with a "404 Not Found" status code and an error message
  }
};

/* UPDATE */

// Add or remove a friend for a specific user by ID
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    // Find the user and friend in the database using the provided IDs
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    // If the friendId is already in the user's friends list, remove the friend; otherwise, add the friend
    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }

    // Save the updated user and friend objects in the database
    await user.save();
    await friend.save();

    // Get the updated list of friends for the user and format the data to include only specific fields
    const friends = await Promise.all(user.friends.map((id) => User.findById(id)));
    const formattedFriends = friends.map(({ _id, firstName, lastName, occupation, location, picturePath }) => {
      return { _id, firstName, lastName, occupation, location, picturePath };
    });

    res.status(200).json(formattedFriends); // Respond with the updated list of friends
  } catch (err) {
    res.status(404).json({ message: err.message }); // If an error occurs, respond with a "404 Not Found" status code and an error message
  }
};
