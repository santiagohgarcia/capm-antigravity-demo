# Bookshop Application - Functional Overview

## 1. Overview
The **Bookshop** application is a digital catalog used to browse and view available books. It provides a simple, user-friendly interface to checking the library's current inventory.

## 2. Key Features

### 2.1 Browse Catalog
Users can access a complete list of all books in the system. The catalog is presented in a clean, scrollable list format.

### 2.2 View Book Details
For every book in the list, the following information is immediately available:
*   **Title**: The name of the book.
*   **Author**: The writer of the book.
*   **Stock Level**: The number of physical copies currently available (e.g., "12 pcs").
*   **ID**: The unique reference number for the book.

## 3. Accessing the Application
The application is web-based and can be accessed via a standard browser.
*   **Application URL**: `http://localhost:4004/bookshopui/webapp/index.html`

## 4. Technical Summary
*For system administrators and developers.*

*   **Platform**: SAP Cloud Application Programming Model (CAP).
*   **Interface**: SAPUI5 (Fiori) Web Application.
*   **Data Source**: Real-time connection to the central Bookshop database via OData V4.
