sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ], (Controller,JSONModel) => {
    "use strict";
  
    return Controller.extend("com.mycompany.employeemanagement.controller.EmployeeDetails", {
        onInit() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("EmployeeDetails").attachPatternMatched(this._onRouteMatched,this);
        },
        _onRouteMatched:function(oEvent){
           var  sEmployeeID= oEvent.getParameter("arguments").EmployeeId;
           console.log(sEmployeeID);
           
           var oModel =this.getOwnerComponent().getModel("Employee");
           console.log(oModel);
           
           var aEmployee=oModel.getProperty("/Employees");
           var aSelectedEmployee= aEmployee.find(emp => emp.EmployeeID ===sEmployeeID );
           if(aSelectedEmployee){
            var oEmployeeModel= new JSONModel(aSelectedEmployee);
           console.log("empModel Data:", oEmployeeModel.getData())
            this.getView().setModel(oEmployeeModel,"EmpData")
           }

        },
        onOpenFragment:function(){
               console.log("write some logic to execute this function");
               
          
        },
        onOpenNewFragment:function(){

          if (!this.pDialog) {
            this.pDialog = this.loadFragment({
              name: "com.mycompany.employeemanagement.view.EmployeeDetailsFragment"
            });
          }
          this.pDialog.then(function (oDialog) {
            oDialog.open();
          });
        },
        onCloseFragment:function(){
          this.pDialog.then(function (oDialog) {
            oDialog.close();
        });
        }

    });
  });