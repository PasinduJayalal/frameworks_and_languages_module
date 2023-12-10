# Introduction

This application built with React and Tailwind CSS that provides a platform for managing and displaying items in a store. this allows users to add new items, view the list of items, and delete items they no longer need.

# Getting Started

Clone the GitHub repository : git clone -- {# clone url}--

# Install the required dependencies:

To install React and create a folder "client" (This will build a simple React application that can be customised to the user's specifications. ) : npx create-react-app client

To install React Router : npm i -D react-router-dom

# Run the React application

In the project directory, you can run:

npm start

Ensure that React and other dependencies are installed before running the application.
The application will be accessible at http://localhost:3000.

# Features

1. Add New Item
Users can contribute to the system by adding new items. Provide details such as user ID, keywords, description, image URL, latitude, and longitude in the form.

2. Display Item List
app fetches and displays a list of items from the server. Each item includes an image, ID, user ID, description, keywords, latitude, longitude, date from, and date to.

3. Delete Item
Easily declutter by deleting items you no longer need. Click the "Delete" button associated with each item to remove it from the list.


# Project Structure

1. App.js: Main application component that includes the navigation bar and sets up routing using React Router DOM.
2. scenes/items/Index.jsx: Component responsible for managing the form, displaying the list of items, and handling item deletion.
