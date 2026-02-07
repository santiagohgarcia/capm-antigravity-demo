---
description: CDS Feature
---

You must modify this CAPM (@sap/cds) project to add/modify the new feature following this process:

1. Follow a Test Driven Development approach. For each new feature, add backend and frontend tests in the "test" folder

- For the backend development use the @cap-js/cds-test framework.
https://cap.cloud.sap/docs/node.js/cds-test

The backend tests are in the "/test/srv" folder

- For the frontend (SAPUI5), use the WDI5 framework
wdi5 (/vdif5/) is a Webdriver.IO service (think: extension), utilizing UI5’s test API.

It is designed to run cross-platform end-to-end tests on a UI5 application, with selectors compatible to OPA5.

The frontend tests (WDI5) should be included in the /test/e2e folder.

3. Propose and apply the changes to the code. 

3. Run the tests using "npm test:srv" and "npm test:e2e".

4. Execute the Browser Agent to validate the feature and print a screenshot in the final walkthrough.

5. If all works fine, modify the DOCS.md file to add/update the functional specification of the app with the new feature.