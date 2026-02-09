const { wdi5 } = require('wdio-ui5-service');
//const { it, describe, expect } = require('@wdio/globals');

describe('Book Count Header Attribute', () => {
    it('should display the book count in the header', async () => {
        // Open the application explicitly
        // await browser.url('http://localhost:4004/bookshopui/webapp/index.html#/Books');
        // await wdi5.waitForUI5();

        // Check if list is visible (known working selector)
        const list = await browser.asControl({
            selector: {
                controlType: 'sap.m.List',
                viewName: 'bookshopui.view.Books',
                id: 'booksList'
            }
        });
        expect(await list.getVisible()).toBe(true);

        // Check if page is visible
        const page = await browser.asControl({
            selector: {
                controlType: 'sap.f.DynamicPage',
                viewName: 'bookshopui.view.Books',
                id: 'page'
            }
        });
        expect(await page.getVisible()).toBe(true);

        // Define the selector for the ObjectAttribute in the header
        const countAttribute = await browser.asControl({
            selector: {
                controlType: 'sap.m.ObjectAttribute',
                viewName: 'bookshopui.view.Books',
                id: 'bookCountAttribute'
            }
        });

        // Verify that the attribute exists and is visible
        expect(await countAttribute.getVisible()).toBe(true);

        // Verify the text content (it should be a number)
        const text = await countAttribute.getText();
        expect(text).toMatch(/^\d+$/);
    });
});
