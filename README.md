# zendesk-coding-challenge-2021
This repository contains the code for a challenge assigned by Zendesk as a part of its interview process for the 2021 software engineering co-op program.

## Project Overview
This project calls a Zendesk API to get all customer support tickets in the user's account, and displays it to the user.

Thus, the project is titled as "Ticket Viewer".

## Solution Formulation and Technologies Used
I divided the project into:
1. Frontend Dev: Used react.js and ant design library to create an easy to use UI.
2. Backend Dev: Only thing required on the backend was to set up a proxy server to handle CORS.
3. Testing: I used React Testing Library to test my frontend components' behavior.

## How to setup
Before starting, make sure node and npm are installed! (Resource: https://treehouse.github.io/installation-guides/mac/node-mac.html)

Set up can to run this project locally can be done by:
1. Open desired repository in the terminal, and run `git clone https://github.com/shivish-makkar/zendesk-coding-challenge-2021.git`
2. Run the command `cd zendesk-coding-challenge-2021` or open the folder in your choice of IDE

Until now, we have set up a local copy of the git repository . Now, we need to install dependencies and run the frontend and backend applications separately. 

For that, we would need two separate terminals. Navigate to the same `zendesk-coding-challenge-2021` repository in your new terminal. 


On one terminal, initialize and run the backend code:
1. Run the command `cd server`
2. Run the command `npm install`
3. Set up environment variables:
    1. An OAuth token is required to successfully interact with the Zendesk API. To get access, a Zendesk account is required. Here is further documentation: https://developer.zendesk.com/documentation/ticketing/working-with-oauth/creating-and-using-oauth-tokens-with-the-api/
    2. Run the command `touch .env` to create a file to store the OAuth token.
    3. Run the command `nano .env` to open and edit the text file.
    4. Type `API_OAUTH_TOKEN=<YOUR_API_TOKEN_HERE>` 
    5. Press `cntrl x`, then `y` and then `enter` to successfully save the file.
4. Run the command `npm start`

The server should now be running on `localhost:9000`

On the other terminal, initialize and run the frontend code:
1. Run the command `cd frontend`
2. Run the command `npm install`
3. Run the command `npm run start`

This should redirect you to a chrome browser, otherwise navigate to `localhost:3000` in your chrome browser.

This should enable you to view the output of the code.

## Running Tests
1. Navigate to the `frontend` repository
2. Run `npm run test`
3. Press `a` to run all tests if they don't start automatically

## Folders / Files Overview
* Frontend - contains all frontend code
    * src/Components - contains the two components used for GUI
    * src/App.js - contains the main application
    * src/App.test.js and src/tests - contains unit tests
    * src/mockData - contains mock data used for testing
* Server - contains all server-side code
    * app.js - all server requests are routed through this file
    * routes/tickets.js - contains implementation of tickets endpoint
    * .env_sample - sample file to setup environment variables
* tickets.json - contains json data of tickets displayed


