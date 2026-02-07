# Project Overview

This project is an SAP Cloud Application Programming Model (CAP) application with an SAP Fiori (UI5) frontend. It demonstrates a simple bookshop scenario.

## Architecture

The project follows a standard CAP architecture:

*   **Database Layer (`db/`):** Defines the data model (`schema.cds`) for entities like `Books`.
*   **Service Layer (`srv/`):** Exposes OData services (`cat-service.cds`) that project entities from the database layer.
*   **Application Layer (`app/`):** Contains the SAP Fiori Elements UI application (`bookshopui`) that consumes the OData service.

## Technologies Used

*   SAP Cloud Application Programming Model (CAP)
*   Node.js
*   SQLite (for local development)
*   SAP Fiori / UI5

## Building and Running

### Prerequisites

*   Node.js (LTS version)
*   npm

### Commands

The root `package.json` defines the following scripts:

*   `npm start`: Starts the CAP service locally using `cds-serve`. This will also serve the UI application.
*   `npm run watch-bookshopui`: Starts the CAP service and opens the Fiori UI in watch mode, automatically reloading changes.

To run the application:

1.  Open a terminal in the project root directory.
2.  Run `npm install` to install all dependencies.
3.  Run `npm start` or `npm run watch-bookshopui`.
4.  If using `npm start`, navigate to `http://localhost:4004/bookshopui/webapp/index.html` in your browser. If using `npm run watch-bookshopui`, it will automatically open the browser.

## Development Conventions

*   **CDS (Core Data Services):** Used for defining data models and services.
*   **SAP Fiori Elements:** The frontend application is generated using SAP Fiori tools and follows Fiori Elements principles for UI development.
*   **UI5 Version:** The Fiori application is built with UI5 version `1.144.1` (as specified in `app/bookshopui/README.md`).
*   **Naming Conventions:** Standard CAP and Fiori naming conventions are used for files and entities.
