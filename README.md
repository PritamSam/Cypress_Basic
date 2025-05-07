This repository contains basic scripts of Cypress tool.

Note : Before executing Cypress, Node.js must be installed on your system

Steps to execute cypress tool:
1. Open Code Editor such as Visual Studio Code
2. Enter command in terminal  : npm -i init (It creates Package.json folder with all deafult depedencies)
3. Enter command in terminal  : npm install cypress --save-dev (It installs Cypress)
4. Create Integration Folder under Cypress and add all Spec files under Integration Folder
Before Runing Test Runner add changes in folder cypress.config.js folder add specPattern command below to link with integration folder
e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/*.js'
  },
4. Enter command in terminal  : npx cypress open (It opens Test runner)