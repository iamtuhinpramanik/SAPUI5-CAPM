sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/mycompany/employeemanagement/model/models",
    "sap/ui/model/json/JSONModel"
], (UIComponent, models,JSONModel) => {
    "use strict";

    return UIComponent.extend("com.mycompany.employeemanagement.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
            var oModel = new sap.ui.model.json.JSONModel("model/employee.json")
            this.setModel(oModel,"Employee")

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});