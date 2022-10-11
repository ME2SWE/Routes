# Request and Response Handling

## Overview
I created this practice repo to demonstrate some request and response route handling basics

### Installation
Basic front end dependecies include node, express, jquery, react, reactDOM, axios, and babel for webpack configuration.

### Installing Dependencies
In the terminal, run $ npm install

### Running the app
Build the webpack bundle by running 'npm run build'

In a separate terminal window, start the server by running 'npm start'

### Branches
The 'main' branch is a fully functioning, but static, version of the app.

The 'dev' branch is the solution code of the fully functioning, dynamic version of the app that retrieves data from the APIs.

### Building out the solution in the Main branch
To replace the static data with dynamic data from the APIs, first write your GET requests in App.jsx to the server, and then use your server to handle the requests by getting data from the APIs.

Once your request functions are returning data to App.jsx, change the prop.type that is being passed to the ResultsList component from the hardcoded 'movies' string to the App.jsx state 'type' variable.

You will then have to set the App.jsx state 'shows' and 'type' variables in your request function once your data is received.

There is also a prebuilt mongoose file for a Mongodb database. This database is ready to recieve data. You can write an event handler for the 'save' icon in each ListItem and write requests to post movies and shows to the database upon clicking the icon.

### APIs
We are using two APIs, TvMaze and WatchMode in an effort to demonstrate how request requirements and return data varies among APIs.

You will need to obtain an API key from Watchmode to return data from the Movies input search. This API key should be placed in a .env file in the root dirctory of this app with the var name 'API_KEY' (ie: API_KEY=12345).

https://www.tvmaze.com/api
https://api.watchmode.com/

### Files that you dont need
public/src/index.js
public/dist/index2.html

These files were from my original vanilla js version. They are not necessary with the current react version

server/helpers.js

This file was used to seed the database