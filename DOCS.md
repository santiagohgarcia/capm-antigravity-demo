# Bookshop Application Documentation

## Application Summary
The Bookshop application is a CAP (Cloud Application Programming) project with a SAPUI5 frontend. It manages a catalog of books.

### Data Model
- **Namespace**: `my.bookshop`
- **Entities**:
    - `Books`: Represents a book in the catalog.
        - `ID`: Integer (Key)
        - `title`: String
        - `author`: String
        - `stock`: Integer

### Services
- **CatalogService**: Exposes the `Books` entity as a read-only projection.

### User Interface
- **Bookshop UI**: A SAPUI5 application that displays a list of books.
    - **Route**: `RouteBooks` (default)
    - **View**: `Books.view.xml`
    - **Features**:
        - Dynamic Page layout.
        - List of books displaying title, stock, author, and ID.

---

## Browser Agent Testing Guide

### Prerequisites
- The application must be running.
- The Browser Agent should start at the root URL of the UI application (e.g., `http://localhost:4004/bookshopui/webapp/index.html`).

### Test Scenario 1: Verify Application Load and Data Display
1. **Navigate to the application URL.**
2. **Verify the page title**:
    - Check if the title "Catalog" is visible (based on localization `i18n>title`).
3. **Verify the list of books**:
    - Check for the existence of a list item.
    - Verify that at least one book entry is displayed with:
        - Title (e.g., "Wuthering Heights")
        - Author (e.g., "Emily Brontë")
        - Stock (e.g., "12 pcs")
4. **Action**:
    - Click on a list item to ensure it is interactive (even if no navigation is configured yet).

### detailed-steps
1. `open_browser_url(url="http://localhost:4004/bookshopui/webapp/index.html")`
2. `check_element_exists(selector="span[id$='-title-inner']")` (Matches the title in the dynamic page header)
3. `check_element_exists(selector=".sapMObjLItem")` (Matches an Object List Item)
4. `get_element_text(selector=".sapMObjLItemTitle")` (To verify book title presence)
