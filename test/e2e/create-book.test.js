const { wdi5 } = require("wdio-ui5-service")

describe("Create Book", () => {

    it("should create a new book via dialog", async () => {
        // Locator for Create Button
        const createButtonLocator = {
            selector: {
                controlType: "sap.m.Button",
                viewName: "bookshopui.view.Books",
                properties: {
                    text: "Create"
                }
            }
        }

        const createButton = await browser.asControl(createButtonLocator)
        await createButton.press()

        // Wait for Dialog
        const dialogLocator = {
            selector: {
                controlType: "sap.m.Dialog",
                viewName: "bookshopui.view.Books",
                properties: {
                    title: "Create Book"
                }
            }
        }
        const dialog = await browser.asControl(dialogLocator)
        expect(dialog).toBeDefined()

        // Inputs
        const titleInputLocator = {
            selector: {
                controlType: "sap.m.Input",
                viewName: "bookshopui.view.Books",
                id: "titleInput",
                interaction: "root" // interact with input
            }
        }
        const authorInputLocator = {
            selector: {
                controlType: "sap.m.Input",
                viewName: "bookshopui.view.Books",
                id: "authorInput",
                interaction: "root"
            }
        }
        const stockInputLocator = {
            selector: {
                controlType: "sap.m.Input",
                viewName: "bookshopui.view.Books",
                id: "stockInput",
                interaction: "root"
            }
        }
        const pagesInputLocator = {
            selector: {
                controlType: "sap.m.Input",
                viewName: "bookshopui.view.Books",
                id: "pagesInput",
                interaction: "root"
            }
        }

        // Fill inputs
        const titleInput = await browser.asControl(titleInputLocator)
        await titleInput.enterText("Automated Test Book")

        const authorInput = await browser.asControl(authorInputLocator)
        await authorInput.enterText("Robot Author")

        const stockInput = await browser.asControl(stockInputLocator)
        await stockInput.enterText("42")

        const pagesInput = await browser.asControl(pagesInputLocator)
        await pagesInput.enterText("123")


        // Save Button
        const saveButtonLocator = {
            selector: {
                controlType: "sap.m.Button",
                viewName: "bookshopui.view.Books",
                properties: {
                    text: "Save"
                }
            }
        }
        const saveButton = await browser.asControl(saveButtonLocator)
        await saveButton.press()

        // Expect Dialog to close - checking if it is not open or not visible
        // Simplest check: check if new item is in the list

        await browser.pause(2000) // Wait for refresh

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

        let found = false
        for (const item of items) {
            const title = await item.getTitle()
            if (title === "Automated Test Book") {
                found = true
                break
            }
        }

        expect(found).toBe(true)
    })
})
