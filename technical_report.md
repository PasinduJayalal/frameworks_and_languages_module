Technical Report
================

(intro describing purpose of report - 200ish words)


Critique of Server/Client prototype
---------------------

### Overview
()

### (name of Issue 1)

(A code snippet example demonstrating the issue)
(Explain why this pattern is problematic - 40ish words)

### (name of Issue 2)

(A code snippet example demonstrating the issue)
(Explain why this pattern is problematic - 40ish words)

### Recommendation
(why the existing implementation should not be used - 40ish words)
(suggested direction - frameworks 40ish words)


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
