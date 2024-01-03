Technical Report
================

## Introduction 

This series examines the new age of web development, focusing on the key role played by programming frameworks and languages in determining whether a software project succeeds or fails. This technical report will delve into the world of web development and take a look at ways to improve on prototypes of Freecycle-Inc's existing FreeCycle platform. Working as a Software Engineer on this quest, I looked into and tried various frameworks and languages such as React, Falcon.
Standing at the center of modern web development is React, a JavaScript library for building user interfaces. Its component-based architecture, virtual DOM and unidirectional data flow give developers a very powerful means of building dynamic and reactive applications. The report will examine how well suited React is to the FreeCycle platform and explain its pluses and minuses.
The server-side of our project is provided simplicity and speed by the minimalist Python web framework Falcon. In this way, the requirements for ease of use and performance accord well with Falcon's needs. This report will evaluate how well Falcon has been supporting the backend infrastructure of FreeCycle.
Tailwind CSS, a utility-based approach to frontend design. Its utility classes make for rapid prototyping and simplified maintenance. This report will examine how Tailwind CSS helps with the graphics front of FreeCycle, looking at its effect on design uniformity and developer convenience.
As this make the way through the subtleties of each one, this report intends to give a broad overview--outlining some features and advantages but also perhaps pointing out possible downsides. In this way it is possible to establish a basis for rational decision making in developing the existing prototype into a complete industrial commodity.

Critique of Server/Client prototype
---------------------

### Critique of Framework-less Prototype
An evaluation of the existing versions of both server and client prototypes reveals inherent limitations affecting scalability, maintainability, and overall robustness. The ensuing critique dissects server-side and client-side prototypes separately, providing code samples that highlight shortcomings.

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
