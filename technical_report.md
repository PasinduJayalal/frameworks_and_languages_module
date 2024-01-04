Technical Report
================

## Introduction 

This technical report will delve into the world of web development and take a look at ways to improve on prototypes of Freecycle-Inc's existing FreeCycle platform. The report will outline the advantages of ReactJS (Client-Side framework) and Falcon (Server-Side framework).
Standing at the center of modern web development is React, a JavaScript library for building user interfaces. Its component-based architecture, virtual DOM and unidirectional data flow give developers a very powerful means of building dynamic and reactive applications. The report will examine how well suited React is to the FreeCycle platform and explain its pluses and minuses.
The server-side of our project is provided simplicity and speed by the minimalist Python web framework Falcon. In this way, the requirements for ease of use and performance accord well with Falcon's needs. This report will evaluate how well Falcon has been supporting the backend infrastructure of FreeCycle.
Tailwind CSS, a utility-based approach to frontend design. Its utility classes make for rapid prototyping and simplified maintenance. This report will examine how Tailwind CSS helps with the graphics front of FreeCycle, looking at its effect on design uniformity and developer convenience.
As this make the way through the subtleties of each one, this report intends to give a broad overview--outlining some features and advantages but also pointing out possible downsides of the current frameless prototype (without frameworks) should not be used as the foundation for future enhancements. In this way it is possible to establish a basis for rational decision making in developing the existing prototype into a complete industrial commodity.

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


Server Framework Features
-------------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)

### (Middleware ExpressJS)
Middleware in ExpressJS has the common feature as in other Server Framework Middlewares where Pre/Post reusable components are used to execute the process faster

```javascript
// Middleware to parse JSON requests
app.use(express.json())
// Use CORS middleware
app.use(cors())

```
In this instance cors() is used to limit request to unauthorized website to get access to restricted data. Also, express.json() is used to parse the JSON and only examines requests for which the type option and the Content-Type header match.

* https://expressjs.com/en/resources/middleware/body-parser.html
* https://expressjs.com/en/resources/middleware/cors.html

### (name of Feature 2)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 3)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)


Server Language Features
-----------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 2)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)



Client Framework Features
-------------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 2)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 3)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)


Client Language Features
------------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)

### (name of Feature 2)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)



Conclusions
-----------

(justify why frameworks are recommended - 120ish words)
(justify which frameworks should be used and why 180ish words)


Unsorted Notes From Lecture
===========================

Middleware does the pre/post responses which are reusable components to make the code execute faster and fill out the missing functionalities. 

example_server where the routing is handle in server.py
https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/9950911254ad65f13ea9953ea7bcdf897dd5362d/example_server/app/server.py#L21

example_server where the CORS headers set
https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/9950911254ad65f13ea9953ea7bcdf897dd5362d/example_server/app/web_utils.py#L58


https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/9950911254ad65f13ea9953ea7bcdf897dd5362d/example_client/index.html#L403

https://github.com/PasinduJayalal/frameworks_and_languages_module/blob/9950911254ad65f13ea9953ea7bcdf897dd5362d/example_client/index.html#L442
