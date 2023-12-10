# Introduction

This application built with VueJS and Bootstrap that provides a platform for managing and displaying items in a store. This allows users to add new items, view the list of items, and delete items they no longer need.

# Getting Started

Clone the GitHub repository : git clone -- {# clone url}--

# Install the required dependencies:

The whole URL of the CDN can be imported. This code demonstrates how
```
<script type="importmap">
{
    "imports": {
    "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
}
</script>
<script type="module">
import { createApp } from 'vue'
</script>
```

# Run the React application

In the project directory, you can run:

python3 -m http.server 8001

Ensure that React and other dependencies are installed before running the application.
The application will be accessible at http://localhost:8001.

# Features

1. Add New Item
Users can contribute to the system by adding new items. Provide details such as user ID, keywords, description, image URL, latitude, and longitude in the form.

2. Display Item List
app fetches and displays a list of items from the server. Each item includes an image, ID, user ID, description, keywords, latitude, longitude, date from, and date to.

3. Delete Item
Easily declutter by deleting items you no longer need. Click the "Delete" button associated with each item to remove it from the list.


# Project Structure

1. index.html: Component responsible for managing the form, displaying the list of items, and handling item deletion.
