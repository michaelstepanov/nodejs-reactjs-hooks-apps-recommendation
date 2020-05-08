# Node.js / React.js (with Hooks) - Apps Recommendation

Full stack applications that allows to get 3 random Apps based on selected filter form fields.

## Server side API
The main API endpoint is:
	
    /api/v1/apps
    
It allows to dynamically and asynchronously filter Apps stored on the server.
The App class inherits functionality of Collection class that automatically handles
filters by all of the fields a Collection has, such as:

    =, >, >=, <, <=, in, like

by adding appropriate postfix to a field in the query, for example:

    /api/v1/apps?birthdate=1980-10-07&category:in[]=Weather&category:in[]=Events&rating:gte=1

In addition any filter with custom logic may be added to a Collection.

![Filters Structure](client/public/screenshots/filters-structure.png?raw=true "Filters Structure")

## Libraries used

* Node.js
* React.js (with Hooks)
* Jest
* Express
* Morgan
* Winston
* Yup
* Bootstrap

## To install

	cd FOLDER_NAME
    git clone https://github.com/michaelstepanov/nodejs-reactjs-hooks-apps-recommendation.git

Install client 

    cd nodejs-reactjs-hooks-apps-recommendation/client
    npm install
    
Install server 

    cd nodejs-reactjs-hooks-apps-recommendation/server
    npm install
	
## To run

	npm start
	
By default client runs on port 3000, server on 3001

## Screenshot

![Screenshot](client/public/screenshots/apps-recommendation.png?raw=true "Screenshot")
