const { wdi5 } = require("wdio-ui5-service")


describe("Books", () => {

    it("should retrieve a Books list", async () => {
        const appLocator = {
            selector: {
                controlType: "sap.m.List",
                viewName: "bookshopui.view.Books",
                id: "booksList"
            }
        }

        const app = await browser.asControl(appLocator)
        expect(app).toBeDefined()
    })

    it("should check if pages attribute is displayed", async () => {
        const listLocator = {
            selector: {
                controlType: "sap.m.List",
                viewName: "bookshopui.view.Books",
                id: "booksList",
                interaction: "root"
            }
        }

        const list = await browser.asControl(listLocator)
        const items = await list.getItems()

        expect(items.length).toBeGreaterThan(0)

        const firstItem = items[0]
        const attributes = await firstItem.getAttributes()

        // Check if any attribute contains "Pages:"
        let pagesFound = false
        for (const attribute of attributes) {
            const text = await attribute.getText()
            if (text.includes("Pages:")) {
                pagesFound = true
                break
            }
        }

        expect(pagesFound).toBe(true)
    })

    it("should delete a book", async () => {
        const listLocator = {
            selector: {
                controlType: "sap.m.List",
                viewName: "bookshopui.view.Books",
                id: "booksList",
                interaction: "root"
            }
        }
        const list = await browser.asControl(listLocator)
        const initialItems = await list.getItems()
        const initialCount = initialItems.length

        expect(initialCount).toBeGreaterThan(0)

        const firstItem = initialItems[0]

        const firstItemId = await firstItem.getId()
        const listId = await list.getId()

        // Trigger delete event natively via UI5
        await browser.execute((lid, iid) => {
            const oList = sap.ui.getCore().byId(lid)
            const oItem = sap.ui.getCore().byId(iid)
            oList.fireDelete({ listItem: oItem })
        }, listId, firstItemId)

        // Wait for UI update
        await browser.pause(2000)

        const updatedItems = await list.getItems()
        expect(updatedItems.length).toBe(initialCount - 1)
    })

})
