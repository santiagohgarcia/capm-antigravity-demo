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

})
