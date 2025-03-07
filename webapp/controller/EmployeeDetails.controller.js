sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ], (Controller,JSONModel) => {
    "use strict";
  
    return Controller.extend("com.mycompany.employeemanagement.controller.EmployeeDetails", {
        onInit() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("EmployeeDetails").attachPatternMatched(this._onRouteMatched,this);
            var oModel =this.getOwnerComponent().getModel("Employee");
     

           
        },
        _onRouteMatched:function(oEvent){
           var  sEmployeeID= oEvent.getParameter("arguments").EmployeeId;
           console.log(sEmployeeID);
           
           var oModel =this.getOwnerComponent().getModel("Employee");
           console.log(oModel);
           
           var aEmployee=oModel.getProperty("/Employees");
           var aSelectedEmployee= aEmployee.find(emp => emp.EmployeeID ===sEmployeeID );
           if(aSelectedEmployee){
            console.log(aSelectedEmployee);
           var EmployeeData= {  
            "Employee":[{
          
        "EmployeeID": aSelectedEmployee.EmployeeID,
       "EmployeeName": aSelectedEmployee.EmployeeName,
        "EmployeeEmail": aSelectedEmployee.EmployeeEmail,
        "EmployeePhoneNo": aSelectedEmployee.EmployeePhoneNo,
        "Position": aSelectedEmployee.Position
    }]
      }
          
          console.log(EmployeeData);

           console.log("Employee Id : ",aSelectedEmployee.EmployeeID);
           
            
       
            var oEmployeeModel= new sap.ui.model.json.JSONModel(aSelectedEmployee);
          //  console.log("empModel Data:", oEmployeeModel.getData())
            this.getView().setModel(oEmployeeModel,"EmpData")
            var oEmployeeModel2= new sap.ui.model.json.JSONModel(EmployeeData);
              this.getView().setModel(oEmployeeModel2,"EmployeeData")
           }
           this.updateListIconTabFilterCount();

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
        },
        updateListIconTabFilterCount: function(){
          console.log(" updateBadgeFromTable function called!");
 
            var iRowCount = 13;
    
            console.log("Row Count:", iRowCount);
             // Get IconTabFilter
    var oTabFilter = sap.ui.Core.byId("IconTabFilter1");

    if (oTabFilter) {
        oTabFilter.setCount(iRowCount.toString()); 
    } else {
        console.warn("IconTabFilter1 not found!");
    }
         
         },

    });
  });