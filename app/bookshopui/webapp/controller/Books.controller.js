sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("bookshopui.controller.Books", {
            onInit: function () {
                const oModel = new sap.ui.model.json.JSONModel({
                    bookCount: 0
                });
                this.getView().setModel(oModel, "view");
                this._refreshBookCount();
            },

            _refreshBookCount: function () {
                const oModel = this.getOwnerComponent().getModel();
                const oViewModel = this.getView().getModel("view");

                // Call the bound function
                // Since it's an unbound function in the service, we call it via bindContext on the model
                // actually for unbound function/action in V4:
                // oModel.bindContext("/getBookCount(...)")

                const oOperation = oModel.bindContext("/getBookCount(...)");
                oOperation.execute().then(() => {
                    const iCount = oOperation.getBoundContext().getObject().value;
                    oViewModel.setProperty("/bookCount", iCount);
                }).catch((oError) => {
                    console.error("Error fetching book count", oError);
                });
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
                        this._refreshBookCount();
                    }).catch((oError) => {
                        // Handle error
                        sap.m.MessageToast.show("Error creating book: " + oError.message);
                    });
                });
            },

            onDelete: function (oEvent) {
                const oItem = oEvent.getParameter("listItem");
                oItem.getBindingContext().delete().then(() => {
                    this._refreshBookCount();
                });
            }
        });
    });
