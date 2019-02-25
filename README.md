# BBC News Coding Test
Code for web-based article ranker for the BBC News Coding test.
Hosted on [GitHub Pages](https://alfi-s.github.io/bbc-news-coding-test/index.html)
## Overview
This is a small website that renders the given data as articles and provides a way for the user to rank the articles at the end of the process.
Pure HTML, CSS, and JavaScript and jQuery was used to create the entire front-end.
## Rendering
A JavaScript class `Article` in `js/Article.js` was used to pass in JSON data and output the html for an article using jQuery. Theoretically any article with the same format as the given data can be rendered.
## HTTP Requests
HTTP requests are replaced by asynchronous JavaScript methods as there is no backend. Code for these methods are found in `js/requests.js`. 
The function `getData()` would in practice contain a GET request for the article assets, but instead returns the article data stored locally.
The function `sendData()` would in practice contain a POST request to send the rankings, but instead logs the rankings to the console. It contains a delay provided by the `simulateFluctuatingNetwork()` function which sleeps for a random amount of time. If the Promise sleeps longer than a certain threshold, an error would be thrown and will be handled in `sendData()`, which would mirror an actual implementation where there is a network timeout.
## Testing
There are a few unit tests for the `Article` class which is written using the Jasmine framework. 
To install the dependencies:
```bash
npm install jasmine --save-dev
```
To run the tests
```bash
node run test
```