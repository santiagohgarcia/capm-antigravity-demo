const { expect, browser, $ } = require('@wdio/globals');
const { wdi5 } = require('wdio-ui5-service');

describe('My Bookshop application', () => {

    it('should show 4 books', async () => {
        const list = await browser.asControl({
            selector: {
                controlType: 'sap.m.List',
                viewName: 'bookshopui.view.Books'
            }
        });
        const items = await list.getItems();
        expect(items.length).toBe(4);
    });
});
