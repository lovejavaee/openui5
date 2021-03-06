/*!
 * ${copyright}
 */

/**
 * Analytical Version Information, used to figure out the version of the ODataModel
 *
 * @namespace
 * @name sap.ui.model.analytics
 * @public
 */

sap.ui.define(['jquery.sap.global'], function(jQuery) {
	"use strict";
	
	var AnalyticalVersionInfo = {
		NONE: null,
		V1: 1,
		V2: 2,
		// find out which model is used 
		getVersion: function (oODataModelInstance) {
			var iVersion;
			var sODataModelName = oODataModelInstance.getMetadata().getName();
			switch (sODataModelName) {
				case "sap.ui.model.odata.ODataModel": iVersion = this.V1; break;
				case "sap.ui.model.odata.v2.ODataModel": iVersion = this.V2; break;
				default: iVersion = this.NONE; 
						 jQuery.sap.log.warning("AnalyticalVersionInfo.getVersion(...) - The given object is no instance of ODataModel V1 or V2!"); 
						 break;
			}
			return iVersion;
		}
	};
	
	return AnalyticalVersionInfo;
}, true);