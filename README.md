## Cypress Architecture
As a Quality Engineer, I want to define code standard on Cypress architecture in order to implement test automation based on User Journey scenarios.
### 🧩 The framework
-----------------------
* [Cypress](https://www.cypress.io/) All-in-one Framework
* [Mocha](https://mochajs.org/) Library to provide test group (describe) and test functions (it)
* [Chai](https://www.chaijs.com/) Library to provide assertions

### ⚙️ The Architecture UI
-----------------------
```
CYPRESS/
  ├─  cypress/
  │    ├── e2e/
  │    │   └── <name>.cy.js  
  │    │
  │    ├── fixtures/
  │    │   ├── <name>.csv
  │    │   └── <name>.json  
  │    │
  │    ├── support/
  │    │   ├── pages/
  │    │   │    ├── <name>Page.js
  │    │   │    └── <name2>Page.js
  │    │   │ 
  │    │   ├── commands.js
  │    │   └── e2e.js   
  │    │
  │    └── videos/
  │        └── <name>cy.js.mp4        
  │    
  ├── .cypress.config.js  
  ├── .package.json   
  └── README.md
```

### 🗂️ Architecture layers
-----------------------

- **e2e:** test files with describe/it functions and expected assertions
  - **File:** 
    - **Pattern:** `<name>.cy.js`
    - **Example:** `signIn.cy.js`


- **fixtures:** files with input data for the tests. It can be used different types of input file (*.csv, *.png, *.js, *.json).
    - **File:** 
      - **Pattern:** `<name>.json`
      - **Example:** `dealer.json`


- **pages:** files with selectors mapping and action functions that the selectors executes.
  - **File:** 
    - **Pattern:** `<name>Page.js`
    - **Example:** `signInPage.js`


- **commands.js** file to create general group actions, e.g. customize wait element including extra validations or hook function to set environment parameters.


- **cypress.config.js:** environment configuration file.

### 🚀 Running Cypress tests
-----------------------

`git clone REPO-PATH`

`npm install`


### Choose one command:

`cypress:open-prod`: Open Cypress based on PRODUCTION environment

`cypress:open-stg`: Open Cypress based on STAGE environment

`cypress:chrome-prod`: Execute Cypress tests based on PRODUCTION environment

`cypress:chrome-smoke-prod`: Execute Cypress tests based on PRODUCTION environment and Test Name

`cypress:chrome-smoke-stg`: Execute Cypress tests based on STAGE environment and Test Name

`cypress:firefox`: Execute Cypress tests based on FIREFOX browser

`cypress:webkit`: Execute Cypress tests based on WEBKIT browser

`cypress:edge` : Execute Cypress tests based on EDGE browser
