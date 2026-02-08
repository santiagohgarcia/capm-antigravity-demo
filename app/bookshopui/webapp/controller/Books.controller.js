sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("bookshopui.controller.Books", {
            onInit: function () {

            },

            onCreate: function () {
                const oView = this.getView();
                if (!this._pDialog) {
                    this._pDialog = this.loadFragment({
                        name: "bookshopui.view.CreateBook"
                    }).then(function (oDialog) {
                        return oDialog;
                    });
                }

                this._pDialog.then(function (oDialog) {
                    // Initialize new book model
                    const oModel = new sap.ui.model.json.JSONModel({
                        newBook: {
                            title: "",
                            author: "",
                            stock: 0,
                            pages: 0
                        }
                    });
                    oDialog.setModel(oModel);
                    oDialog.open();
                });
            },

            onCancel: function () {
                this._pDialog.then(function (oDialog) {
                    oDialog.close();
                });
            },

            onSave: function () {
                const oView = this.getView();
                this._pDialog.then((oDialog) => {
                    const oModel = oDialog.getModel();
                    const oNewBook = oModel.getProperty("/newBook");

                    if (!oNewBook.title || !oNewBook.author || !oNewBook.stock || !oNewBook.pages) {
                        sap.m.MessageToast.show(oView.getModel("i18n").getResourceBundle().getText("missingFields"));
                        return;
                    }

                    const oList = this.byId("booksList");
                    const oBinding = oList.getBinding("items");
                    const oContext = oBinding.create(oNewBook);

                    oContext.created().then(() => {
                        oDialog.close();
                        // Refresh logic if needed, but V4 usually handles it or we can refresh binding
                        oBinding.refresh();
                    }).catch((oError) => {
                        // Handle error
                        sap.m.MessageToast.show("Error creating book: " + oError.message);
                    });
                });
            },

            onDelete: function (oEvent) {
                const oItem = oEvent.getParameter("listItem");
                oItem.getBindingContext().delete();
            }
        });
    });
