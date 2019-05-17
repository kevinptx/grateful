# grateful

![](grateful.gif)

<<<<<<< HEAD
=======

>>>>>>> 92821519019fa92617938206cadbaf3ba7b330a7
Please open grateful in the file tree, then run all commands from there!

README

Grateful

An app for taking note of what you're thankful for in order to improve mental health and general outlook on life. Click on the individual grateful entry to get to the show page and upvote the comments you like and downvote those you don't!

React/Redux Front-end Implementation with a Rails 5 API Backend
React makes this a fast single page application. React Router ensures RESTful routing, and the grateful entries are persisted in a Rails 5 API backend, serialized and served to the front via JSON format.

Usage
To use, copy repo onto your machine. Then run bundle install and npm install. After that, type rails s -p 3001 in the "grateful-api" backend to fire up the backend server on localhost:3001.
The client side of the app runs on localhost:3000. Type "npm start" in the terminal after you cd into "grateful-client", the client side of the app. The React frontend and Rails backend are fully separate.

API
New to the app is a JSON API backend. API endpoints render JSON. Entries are all available on the API, indexed or individual show. For example, to view the entries index, click on All Entries.

Contributing
Contributions are welcome, including any suggestions, bug reports, additions, and edits via https://github.com/kevinptx/grateful.

License
MIT License

Copyright (c) <2019> kevinptx

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
