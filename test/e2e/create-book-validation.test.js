it("should validation error when fields are empty", async () => {
    // ... (Open Dialog) ...
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

    // Click Save without filling
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

    // Check for Error Message Toast or similar
    // Since we are using MessageToast, we might check if dialog is still open
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
    expect(await dialog.isOpen()).toBe(true)

    // Clean up: Close dialog
    const cancelButtonLocator = {
        selector: {
            controlType: "sap.m.Button",
            viewName: "bookshopui.view.Books",
            properties: {
                text: "Cancel"
            }
        }
    }
    const cancelButton = await browser.asControl(cancelButtonLocator)
    await cancelButton.press()
})
