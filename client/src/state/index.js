/*
Description:
This code defines a Redux slice named "auth" using the createSlice function from the "@reduxjs/toolkit" library. 
The "auth" slice manages the state related to authentication, user data, and posts in the application.

The initial state of the "auth" slice includes the following properties:
- mode: Represents the current mode of the application, which can be either "light" or "dark".
- user: Holds information about the currently logged-in user. If no user is logged in, this will be null.
- token: Stores the authentication token of the logged-in user. If no user is logged in, this will be null.
- posts: An array that stores the posts in the application.

The "auth" slice contains several reducers, each corresponding to different actions that can modify the state:
- setMode: Toggles the application mode between "light" and "dark".
- setLogin: Sets the user and authentication token when a user logs in.
- setLogout: Clears the user and token when a user logs out.
- setFriends: Updates the list of friends for the logged-in user. If the user object is null, an error is logged to the console.
- setPosts: Sets the array of posts with the new payload of posts.
- setPost: Updates a specific post in the posts array based on the payload containing the updated post data.

The exported actions (setMode, setLogin, setLogout, setFriends, setPosts, setPost) can be dispatched in the application to trigger corresponding state changes.
*/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

// Create the "auth" slice using createSlice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Reducer to toggle between "light" and "dark" mode
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    // Reducer to set the user and authentication token on login
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    // Reducer to clear the user and token on logout
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    // Reducer to update the list of friends for the logged-in user
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    // Reducer to set the array of posts with new posts data
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    // Reducer to update a specific post in the posts array
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});


export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;


export default authSlice.reducer;
