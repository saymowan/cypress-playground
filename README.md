# Simple Example using Cypress E2E tests
PageObject on `../support/pages/..`
Tests on `../e2e`

## Clone Project
`git clone https://github.com/saymowan/cypress-playground`

## From Scratch to Cypress running (not related to this repo, only saving step by step)
[![npm version](https://camo.githubusercontent.com/eeac3804665f2c05dfaf1d18dff2722db530cde0/68747470733a2f2f62616467652e667572792e696f2f6a732f637970726573732e737667)](https://badge.fury.io/js/cypress)
Install Cypress for Mac, Linux, or Windows, then  [get started](https://docs.cypress.io/guides/getting-started/installing-cypress.html).
1. npm init -y
2. npm i cypress --save-dev
3. cd ./node_modules/.bin
4. cypress open
5. All folder will be generated (cypress..e2e...)
6. Open package.json and include cypress commands
    1. "cypress:open" : "cypress open"
    2. "cypress:run" : "cypress run"
    3. Now you can execute commands by ~npm run~ 


## Prepare the dependencies
install all dependencies from the root directory

`npm install`

## Opening Cypress GUI (inspect elements, visual execution)
Opening Cypress GUI and executing tests

`npm run cypress:open` 


## Running from the CLI
`npm run cypress:run`

Switching browser

`npm run cypress:run -- --browser chrome`

Recording test results, videos, screenshots to Cypress dashboard

`npm run cypress:run -- --record`
