---
trigger: always_on
---

USE A TEST DRIVEN DEVELOPMENT APPROACH, A NEW TEST NEEDS TO BE GENERATED FOR EACH FEATURE ADDED

1. For the backend development use the @cap-js/cds-test framework.
https://cap.cloud.sap/docs/node.js/cds-test

The backend tests you can include in the /test/srv folder

2. For the frontend (SAPUI5), use the WDI5 framework
wdi5 (/vdif5/) is a Webdriver.IO service (think: extension), utilizing UI5’s test API.

It is designed to run cross-platform end-to-end tests on a UI5 application, with selectors compatible to OPA5.

Because it adhere’s to Webdriver.IO’s standards, wdi5‘s technical name is wdio-ui5-service. It is also the npm package name.

The frontend tests (WDI5) should be included in the /test/e2e folder.

Then run this tests using "npm test:srv" and "npm test:e2e"
