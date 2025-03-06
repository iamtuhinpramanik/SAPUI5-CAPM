sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], (Controller,JSONModel,MessageBox,MessageToast) => {
    "use strict";

    return Controller.extend("com.mycompany.employeemanagement.controller.EmployeeList", {
        onInit() {
            var oModel = new sap.ui.model.json.JSONModel("model/employee.json")
            this.getView().setModel(oModel,"Employee")
            
        },
        onViewDetails: function (oEvent) {
            var oItem = oEvent.getSource().getParent();
            var oContext = oItem.getBindingContext("Employee");
            var oEmployee = oContext.getObject();
            

            // Display Employee Details in a MessageBox
            MessageBox.success(
                "Employee Details:\n\n" +
                "Name : " + oEmployee.EmployeeName + "\n" +
                "Position : " + oEmployee.Position + "\n" +
                "Email : " + oEmployee.EmployeeEmail + "\n" +
                "Phone : " + oEmployee.EmployeePhoneNo +"\n"+
                "Position : " + oEmployee.Position + "\n" +
                "Salary : " + oEmployee.salary + " USD",
                {
                    title: "Employee Info",
                    onClose:function(oAction){
                            if(oAction===sap.m.MessageBox.Action.OK){
                            this.getOwnerComponent().getRouter().navTo("EmployeeDetails",{
                                EmployeeId:oEmployee.EmployeeID
                            });
                            }
                            
                        }.bind(this)
                      
                }
            );
          
        }
    });

    
});