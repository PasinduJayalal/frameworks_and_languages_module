# Introduction

This is a simple ExpressJS-based REST API for managing items. The API provides endpoints for retrieving items, adding new items, retrieving a specific item by ID, and deleting an item by ID.

# Getting Started

Clone the GitHub repository : git clone -- {# clone url}--

# Install the required dependencies:

To install Express : npm install express.
To install CORS middleware : npm install cors

# Run the Express application

In the project directory, you can run:

node server.js

Ensure that Falcon and other dependencies are installed before running the application.
The application will be accessible at http://localhost:8000.

# API Endpoints

##### Get Root (HTML Content)
Endpoint: /
Method: GET
Description: Returns the content of the index.html file. 

##### Get All Items
Endpoint: /items
Method: GET
Description: Returns a list of all items.

CURL command to GET items :
curl -X GET http://localhost:8000/items


##### Post Item
Endpoint: /item
Method: POST
Description: Adds a new item.

CURL command to post item :
curl -X POST http://localhost:8000/item -H "Content-Type: application/json" -d '{"user_id": "user1234", "keywords": ["hammer", "nails", "tools"], "description": "A hammer and nails set. In canterbury", "lat": 51.2798438, "lon": 1.0830275}'

Request Body:
```
{
"user_id": "user1234",
"keywords": ["hammer", "nails", "tools"],
"description": "A hammer and nails set",
"lat": 51.2798438,
"lon": 1.0830275
} 
```

##### Get Item by ID
Endpoint: /item/{id}
Method: GET
Description: Retrieves a specific item by its ID.

CURL command to GET item by ID :
curl -X GET http://localhost:8000/item/{id}

Note: Ensure you replace {id} with the actual item ID.

##### Delete Item by ID
Endpoint: /item/{id}
Method: DELETE
Description: Deletes a specific item by its ID.

CURL command to delete item by ID :
curl -X DELETE http://localhost:8000/item/{id}

Note: Ensure you replace {id} with the actual item ID.

# CORS Middleware

The API includes a CORS middleware to handle Cross-Origin Resource Sharing. This middleware allows requests from any origin and handles common HTTP methods.

# Sample Item Data
The API comes with sample item data for testing purposes. You can modify the items list in the server.js file to customize the initial data.
