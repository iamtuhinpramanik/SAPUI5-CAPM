sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("com.mycompany.employeemanagement.controller.EmployeeList", {
        onInit() {
            var oModel = new sap.ui.model.json.JSONModel("model/employee.json")
            this.getView().setModel(oModel,"Employee")
            
        },
        onViewDetails:function(){
            alert("Details should be load here");
            
        }
    });
});