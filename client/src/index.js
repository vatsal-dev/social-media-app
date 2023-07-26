/*
Description:
This code sets up a React application with Redux using the "@reduxjs/toolkit" library 
and "redux-persist" for state persistence. 
It renders the main "App" component inside a Redux Provider with a persisted store, 
enabling the application to manage and retain state across page reloads.

Here's a breakdown of what the code does:

1. Import necessary dependencies and components from various libraries.
2. Create a Redux reducer named "authReducer" (imported from "./state").
3. Configure the Redux store using "configureStore" from "@reduxjs/toolkit".
4. Set up "redux-persist" to persist the state across sessions with local storage.
5. Create a root React node using "ReactDOM.createRoot".
6. Render the application inside the Redux Provider and wrap it with "PersistGate" for state rehydration.

*/

import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM from react-dom/client (for React 18 concurrent mode)
import "./index.css";
import App from "./App"; // Import the main App component
import authReducer from "./state"; // Import the authReducer (assumed to be a valid Redux reducer)
import { configureStore } from "@reduxjs/toolkit"; // Import configureStore from @reduxjs/toolkit
import { Provider } from "react-redux"; // Import the Redux Provider to connect the store to the application
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"; // Import necessary functions and constants from redux-persist
import storage from "redux-persist/lib/storage"; // Import the local storage for state persistence
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate for state rehydration

// Configuration for redux-persist
const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);

// Configure the Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore specific actions to avoid warnings during state serialization
      },
    }),
});

// Create a root React node
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application with Redux Provider and PersistGate
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
