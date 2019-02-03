# Mobile Web Specialist Certification Course

#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### What is it
Restaurant reviews is a simple web application that shows a list of available restaurants in an area. All restaurants are geolocated within a map and they can be filtered by neighborhood and/or cuisine.

When entering in a restaurant ("View details" button) additional information is shown, such as: time schedule and customer reviews.

### How to run
This project requires Python to be installed on your machine.

1. Download ⬇ or clone this repository.
2. Launch server. In a terminal, check the version of Python you have: python -V. Spin up the server with python -m SimpleHTTPServer 8000 or python -m http.server 8000.
3. Visit http://localhost:8000.

###Technologies used
- ES6 JavaScript
- Leaflet.js
- Mapbox
- Flexbox
- Service worker
- Cache API
- gulp-autoprefixer (add CSS vendor prefixes)
- gulp-image-resize (reduce images size)

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.
