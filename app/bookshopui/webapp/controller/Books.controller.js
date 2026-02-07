sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("bookshopui.controller.Books", {
            onInit: function () {

            },

            onDelete: function (oEvent) {
                const oItem = oEvent.getParameter("listItem");
                oItem.getBindingContext().delete();
            }
        });
    });
