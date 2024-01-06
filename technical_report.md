Technical Report
================

## Introduction 

This technical report will delve into the world of web development and take a look at ways to improve on prototypes of Freecycle-Inc's existing FreeCycle platform. The report will outline the advantages of ReactJS (Client-Side framework) and Falcon (Server-Side framework).
Standing at the center of modern web development is React, a JavaScript library for building user interfaces. Its component-based architecture, virtual DOM and unidirectional data flow give developers a very powerful means of building dynamic and reactive applications. The report will examine how well suited React is to the FreeCycle platform and explain its pluses and minuses.
The server-side of our project is provided simplicity and speed by the minimalist Python web framework Falcon. In this way, the requirements for ease of use and performance accord well with Falcon's needs. This report will evaluate how well Falcon has been supporting the backend infrastructure of FreeCycle.
Tailwind CSS, a utility-based approach to frontend design. Its utility classes make for rapid prototyping and simplified maintenance. As this make the way through the subtleties of each one, this report intends to give a broad overview--outlining some features and advantages but also pointing out possible downsides of the current frameless prototype (without frameworks) should not be used as the foundation for future enhancements. In this way it is possible to establish a basis for rational decision making in developing the existing prototype into a complete industrial commodity.

Critique of Server/Client prototype
---------------------
An evaluation of the existing versions of both server and client prototypes reveals inherent limitations affecting scalability, maintainability, and overall robustness. The ensuing critique dissects server-side and client-side prototypes separately, providing code samples that highlight shortcomings.

## Server Prototype Critique:

### Lack of Structure:
The server prototype, located in the "./example_server/" directory, lacks a framework to organize routing, middleware, and request handling. This absence makes it challenging for future enhancements, resulting in manual implementation of common functionalities, leading to verbose and error-prone code.

#### Incomplete Routes:
Server-side code calls functions like get_index without providing implementations, resulting in a server missing crucial components.
```
ROUTES = (
    ('OPTIONS', r'.*', options_response),
    ('GET', r'/$', get_index),
    ('POST', r'/item$', post_item),
    ('GET', r'/item/(?P<id>\d+)$', get_item),
    ('DELETE', r'/item/(?P<id>\d+)$', delete_item),
    ('GET', r'/items$', get_items),
)
```
#### Limited Middleware:
Lack of middleware for common tasks results in redundant code across different routes.
```
def options_response(request):
    """
    >>> options_response({'path': '*', 'method': 'OPTIONS'})
    {'code': 204, 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE', 'Access-Control-Allow-Headers': 'Content-Type'}

    https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS
    Pre-Flight Options for use with real browsers
    """
    return {
        'code': 204,
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
    }
    ('OPTIONS', r'.*', options_response)
```
## Client-Side Critique:

### Lack of Modularity:
The entire client-side code, encapsulated in a single script tag, hinders modularity and maintenance.
```
<script type="module">
// ... entire client-side code ...
</script>
```
### Duplicate IDs:
Usage of identical IDs for some elements results in bad HTML and potential unexpected effects.

```
<form>
	<label for="create_user_id">Username</label><input id="create_user_id" type="text" name="user_id"/>
	<label for="create_lat">lat</label><input id="create_lat" type="text" name="lat"/>
	<label for="create_lon">lon</label><input id="create_lon" type="text" name="lon"/>
	<label for="create_image">image</label><input id="create_image" type="text" name="image" value="http://placekitten.com/100/100"/>
	<label for="create_keywords">keywords</label><input id="create_keywords" type="text" name="keywords"/>
	<label for="create_description">description</label><textarea id="create_description" type="text" name="description"></textarea>
	<input type="submit" id="action_create" data-action="create_item">
</form>

<form>
	<label for="create_postcode">Postcode</label><input id="create_postcode" type="text" name="postcode"/>
	<button data-action="lookup_postcode">Lookup</button>
	<label for="create_lat">lat</label><input id="create_lat" type="text" name="lat"/>
	<label for="create_lon">lon</label><input id="create_lon" type="text" name="lon"/>
	<label for="create_image">image</label><input id="create_image" type="text" name="image" value="http://placekitten.com/100/100"/>
	<label for="create_keywords">keywords</label><input id="create_keywords" type="text" name="keywords"/>
	<label for="create_description">description</label><textarea id="create_description" type="text" name="description"></textarea>
	<input type="submit" id="action_create" data-action="create_item">
</form>
```
## Server-Side Recommendation:
The server design model requires routes and structure, a robust system framework such as Falcon is required. Falcon is a server-side framework that ensures it can grow large and be maintained with ease. The server will be more robust and secure when Falcon's middleware and error handling are used.

## Client-Side Recommendation:
To address issues with how components are structured and created in code for websites, it is suggested to use a front-end solution like ReactJS. The framework of React allows it to be easier to build the components one at a time. The use of separate style files (JSX, JS and etc..) simplifies the task of maintaining the project clean and neat. This change not only improves the organisational structure of the code, but it also prepares for a more extensive and rapid client-side project.


Falcon Server Framework Features
-------------------------

### Clean Middleware Implementation:

To be able to manage Cross-Origin Resource Sharing, the CORS middleware elegant is dependable and easily included into the Falcon software. This illustrates Falcon's dedication to minimalism without sacrificing functionality.
```
class CORSMiddleware:
    def process_request(self, req, resp):
      resp.set_header('Access-Control-Allow-Origin', '*')
      resp.set_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
      resp.set_header('Access-Control-Allow-Headers', 'Content-Type')
      resp.set_header('Access-Control-Max-Age', '1728000')  # 20 days
      if req.method == 'OPTIONS':
            raise HTTPStatus(falcon.HTTP_204, body='\n') #I have to modify the "OPTIONS" to return 204 status code as it returns 200 by default. 
```
* https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/79362d01f820e504bf296cf8a2081ccaa2b01327/server/app.py#L12

Although the CORS library can be imported, in this instance, the CORS middleware is generated by manually. This is a perfect example of Falcon's dedication to simplicity and adaptability without sacrificing functionality.The middleware effectively manages Cross-Origin Resource Sharing (CORS) headers, allowing it to make middleware development straightforward and well-organized.

* https://github.com/lwcolton/falcon-cors
* https://github.com/falconry/falcon/issues/1220#issuecomment-363266844
* https://falcon.readthedocs.io/en/stable/api/cors.html

### Resourceful Routing:
Falcon supports a routing strategy that is aid-centric, as seen by the classes that are defined for managing unique endpoints (get, getItems, postItems, getItemID). This is consistent with the framework's approach of organising code according to assets.

```
# class for handling root endpoint
class get:
   def on_get(self, req, resp):
# class for handling item collection endpoint
class getItems:
   def on_get(self, req, resp):
# class for handling item post endpoint
class postItems:
   def on_post(self, req, resp):
# class for handling individual get item endpoint
class getItemID:
   def on_get(self, req, resp, id):
# class for handling individual delete item endpoint
   def on_delete(self, req, resp, id):
```
* https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/79362d01f820e504bf296cf8a2081ccaa2b01327/server/app.py#L44

Falcon focuses its routing strategy on resources, organising its code around these items. The code creates classes to handle several sections or points (get, getItems, postItems, and getItemID). This aligns with Falcon's cognitive style. It makes maintaining and ensuring that all software components operate as a whole easier.

* https://falcon.readthedocs.io/en/stable/api/routing.html

### WebSocket

WebSocket, another exclusive Falcon feature, has shown to be helpful even if it isn't utilised in this project. A WebSocket is a persistent connection which enables a client and a server to exchange information in both directions with full duplex. Only ASGI applications can utilise Falcon's Websocket capability.

```
async def on_websocket(self, req, ws):
   . . .
```
The on_websocket() responder coroutine is required for the resource class to operate with Websockets. Hooks and middleware are able to intercept requests from websockets. A falcon.asgi.WebSocket object is provided in place of the Response object.

* https://www.tutorialspoint.com/python_falcon/python_falcon_websocket.htm
* https://falcon.readthedocs.io/en/stable/api/websocket.html#ws

Server Language Features (Python)
---------------------------------

### Dynamically Typed Language
Python is a language with typing that is dynamic. In other words, it is not needed to declare the data types of the variables that is defined in Python. Based on the types of the expression's part sections, the Python interpreter's responsibility is to determine the data types of the variables at runtime. Python specifically uses duck typing. "If it looks like a duck, swims like a duck, and quacks like a duck, it must be a duck," is what this saying implies.

```
# Falcon application setup
app = falcon.App(middleware=[CORSMiddleware()])

# Sample item data
items = [
    {
        "id": 0,
        "user_id": "user1234",
        "keywords": [
            "hammer",
            "nails",
            "tools"
        ],
        "description": "A hammer and nails set",
        "image": "https://placekitten.com/200/300",
        "lat": 51.2798438,
        "lon": 1.0830275,
        "date_from": "2023-10-25T21:39:22.733Z",
        "date_to": "2023-10-25T21:39:22.733Z"
    }
]
```
* https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/bc91c657cbac3ec3960f64bd71556436f7f2d51f/server/app.py#L22

In this instance, app and item is declared without mentioning a data type. Python interpreter is responsible to determined the data types of the variables at runtime

* https://www.interviewbit.com/blog/features-of-python/

### Large Standard Library

The extensive standard library that Python offers to its users is one of the key reasons that the language is so popular nowadays. With a wide range of packages and modules like json, random, datetime,and many more that have common and significant features, the Python standard library is quite extensive. The developers will save time and effort if they do not have to start from scratch if the code for certain feature is already there in these modules and packages. 

```
import json
import random
from datetime import datetime
```
* https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/bc91c657cbac3ec3960f64bd71556436f7f2d51f/server/app.py#L3

```
data = json.load(req.bounded_stream)
```
* https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/bc91c657cbac3ec3960f64bd71556436f7f2d51f/server/app.py#L64

```
"id" : random.randint(100, 999),
```
* https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/bc91c657cbac3ec3960f64bd71556436f7f2d51f/server/app.py#L76

json is used to parse html request body into a python variable. In this instance random is used to generate random numbers between 100-999.

* https://www.interviewbit.com/blog/features-of-python/



ReactJS Client Framework Features
---------------------------------

### Component-Based Architecture

React's component creation method allows developers to break up large, complex user interfaces into more manageable pieces. An example of this can be seen in the App.js where the index.jsx component is imported and used. Every component looks after its look, actions, and state. This keeps the code organised and facilitates future problem-solving and reusability.

```
import Index from "./scenes/items";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="relative isolate  items-center gap-x-6 overflow-hidden bg-blue-500 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <a href="https://editor.swagger.io/" className="font-semibold">Freecycle</a>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route path="" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
```
* https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/7f6fc64dd8d58c6a7e75b4688bf17b3c263a814d/client/src/App.js#L1

Modularity: The programme can be made simpler and more efficient to maintain by using components like index.jsx in different areas. 
Isolation: Each component manages its own task, reducing unanticipated conflicts with other components of the programme.
Reusability: Components can be easily reused into other projects or even various sections of the programme.

* https://www.codingninjas.com/studio/library/features-of-react-js
* https://legacy.reactjs.org/docs/components-and-props.html

### Using React Router for Simple Web Navigation

React Router is used for user-side routing, which is a fundamental component required to create single-page web applications. It enables the use of URL modifications to switch between different views and sections without requiring a full page refresh.
```
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="relative isolate  items-center gap-x-6 overflow-hidden bg-blue-500 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <a href="https://editor.swagger.io/" className="font-semibold">Freecycle</a>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route path="" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}
```
* https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/7f6fc64dd8d58c6a7e75b4688bf17b3c263a814d/client/src/App.js#L2
```
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```
* https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/7f6fc64dd8d58c6a7e75b4688bf17b3c263a814d/client/src/index.js#L2

Navigation: It enables to switch between several pages without loading the entire page. Declarative Routing: It sets down routes in an understandable and straightforward manner, making it simple to maintain.Nested routes: Enables look structures and internal routes for complex programmes.
* https://www.w3schools.com/react/react_router.asp

### React Hooks

The "useState" and "useLocation" hooks in React enable the control of a functional component's state. React Hooks offer a more straightforward and practical method of handling state by getting rid of the requirement for class parts.

```
import { useState } from "react";
import { useLocation } from "react-router-dom";

const location = useLocation();
  const params = new URLSearchParams(location.search);
  const api = (params.get("api") || "/api/v1").replace(/\/$/, "");
  const [items, setItems] = useState([]);

  const [values, setValues] = useState({
    user_id: "",
    keywords: null,
    description: "",
    image: "",
    lat: "",
    lon: "",
  });
```
* https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/7f6fc64dd8d58c6a7e75b4688bf17b3c263a814d/client/src/scenes/items/index.jsx#L2

Functional components : State can be controlled in function parts without the need for class parts.Simplified Syntax: Managing state in a convenient method is made available by the useState hook. Scalability: Enables the use of several triggers to easily handle multiple components of an object.
* https://www.w3schools.com/react/react_hooks.asp


Client Language Features (JavaScript)
-------------------------------------

### Objects and fuctions as first-class citizens

The definition of the term First Class Citizen is "being able to do what everyone else can do". In JavaScript, all non-primitive data types that is, data types such as Arrays, Functions, Symbols, and so on are basically objects that inherit all of the attributes of the Object prototype. The prototype in JavaScript Objects is the most basic prototype available. They can be assigned to variables for manipulation, supplied as references, and returned from functions. Since that Object is also the prototype of functions, this concept is also applied to functions.

```
<form onSubmit={handleSubmit}>
```
* https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/72e9b6e93aa7a07f4b23326f07ce1ddfc1ae5ce0/client/src/scenes/items/index.jsx#L93

```
onChange={handleInput}
```
* https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/72e9b6e93aa7a07f4b23326f07ce1ddfc1ae5ce0/client/src/scenes/items/index.jsx#L101

In this instance onSubmit and onChange attributes are expecting a function to be passed as it's values, snice functions are First Class Citizens therefore, handleSubmit and handleInput functions are passed as call-backs to the onSubmit and onChange events.

* https://www.interviewbit.com/blog/javascript-features/

### Event Handling

An event is an activity or occurrence in a system that is reported so that the software has the ability to react appropriately. For instance, when a user presses a button, the software is instructed by the system to display an information box in response to the button click event. Developers may handle events and even create custom events with JavaScript.
 
 ```
    const handleSubmit = (event) => {
    event.preventDefault(); //Stop the website from refreshing each time when the submit button is clicked.

    const isAnyValueEmpty = Object.entries(values).every(
      ([key, value]) => key === "image" || value !== ""
    ); //Verify whether any of the essential fields are empty except image field. 

    if (!isAnyValueEmpty) {
      alert(" Some fields are empty");
    } else {
      clearForm(); // Function to clear the form
      values.keywords = values.keywords.split(",");
      // Make a POST request to add the new item to the server
      axios
        .post(api + "/item", values)
        .then((res) => {
          console.log("Post successful ", { res });
          displayitems();
        })
        .catch((err) => console.log(err));
    }
  };
 ```
 * https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/72e9b6e93aa7a07f4b23326f07ce1ddfc1ae5ce0/client/src/scenes/items/index.jsx#L48
 
```
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
```
* https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/72e9b6e93aa7a07f4b23326f07ce1ddfc1ae5ce0/client/src/scenes/items/index.jsx#L26

In this example, these custom handleInput and handleSubmit functions are designed to handle onSubmit and onChange events.

* https://www.interviewbit.com/blog/javascript-features/



Conclusions
-----------

The selected technologies Falcon for server-side and React for client-side form a strong linked stack ideal to create contemporary web applications. It is easy to see how Falcon’s lightweight design and resource-centric routing can be complementary when building a server. React’s component oriented architecture helps developers to build modular, reusable UI components on the client side. As a result there is better code organization and maintainability. React Router makes the user experience even better by providing fast client-side routing for single page applications. The way hooks, such as the useState hook for state management reduce a complex logic in an elegant and functional manner. The server and client languages are Python and JavaScript (React), which go hand-in-hand in a heterogeneous stack, taking advantage of each language’s strengths. Python’s readability and simplicity matches with Falcon design philosophy, while JavaScript versatility and React declarative approach fits very well to building of interactive user interfaces. The recommendation of these frameworks stems from the fact that collectively, they are able to address all issues associated with web development; providing solutions for proper routing, well-organized components , and proficient state management. Combined, Falcon and React offer a harmonious powerful combo for developers looking to build modern web apps that are scalable and maintainable.

