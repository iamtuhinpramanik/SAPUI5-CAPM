/*global QUnit*/

sap.ui.define([
	"commycompany/employee-management/controller/EmployeeList.controller"
], function (Controller) {
	"use strict";

	QUnit.module("EmployeeList Controller");

	QUnit.test("I should test the EmployeeList controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
