const { expect, browser, $ } = require('@wdio/globals');
const { wdi5 } = require('wdio-ui5-service');

describe('Bookshop Authors', () => {

    it('should show author for the first book (Wuthering Heights)', async () => {
        // Find the list
        const list = await browser.asControl({
            selector: {
                controlType: 'sap.m.List',
                viewName: 'bookshopui.view.Books'
            }
        });

        const items = await list.getItems();
        expect(items.length).toBeGreaterThan(0);

        const firstItem = items[0];

        // Find attributes of the first item
        const attributes = await firstItem.getAttributes();

        // Check for Author attribute
        let authorAttributeFound = false;
        let authorText = "";

        for (const attribute of attributes) {
            const text = await attribute.getText();
            if (text.startsWith("Author:")) {
                authorAttributeFound = true;
                authorText = text;
                break;
            }
        }

        // This expectation should FAIL initially
        expect(authorAttributeFound).toBe(true);
        expect(authorText).toBe("Author: Emily Brontë");
    });
});
