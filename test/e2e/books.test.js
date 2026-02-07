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

})
