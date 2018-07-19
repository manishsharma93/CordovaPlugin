cordova.define("smartech-ios.Cordova-Manish", function(require, exports, module) {
   var exec = require('cordova/exec');
   
   exports.setUpApplicationId = function (arg0, success, error) {
   exec(success, error, 'NetCorePushPlugin', 'setUpApplicationId', []);
   };
   
   exports.sendInAppActivity = function (arg0, success, error) {
   exec(success,error, 'NetCorePushPlugin','sendInAppActivity', [])
   };
   
   exports.pushLogin = function (arg0, success, error) {
   exec(success,error, 'NetCorePushPlugin','pushLogin', [])
   };
   
   exports.pushLogout = function (arg0, success, error) {
   exec(success,error, 'NetCorePushPlugin','pushLogout', [])
   };
   
   exports.profilePush = function (arg0, success, error) {
   exec(success,error, 'NetCorePushPlugin','profilePush', [])
   };
   
   exports.setUpIdentity = function (arg0, success, error) {
   exec(success,error, 'NetCorePushPlugin','setUpIdentity', [])
   };
   
   exports.getNotifications = function (arg0, success, error) {
   exec(success,error, 'NetCorePushPlugin','getNotifications')
   };
   
   exports.pushRegisteration = function (arg0, success, error) {
   exec(success,error, 'NetCorePushPlugin','pushRegisteration', [])
   };
});

//function NetCorePushPlugin() {
//
//}
//
//NetCorePushPlugin.prototype.setUpApplicationId = function (successCallback , errorCallback) {
//    cordova.exec(successCallback, errorCallback, "NetCorePushPlugin", "setUpApplicationId" , [] )
//};
//
//NetCorePushPlugin.prototype.sendInAppActivity = function (successCallback , errorCallback) {
//    cordova.exec(successCallback, errorCallback, "NetCorePushPlugin", "sendInAppActivity", [])
//};
//
//NetCorePushPlugin.prototype.pushLogin = function (successCallback, errorCallback) {
//    cordova.exec(successCallback, errorCallback, "NetCorePushPlugin", "pushLogin", [])
//};
//
//NetCorePushPlugin.prototype.pushLogout = function (successCallback, errorCallback) {
//    cordova.exec(successCallback, errorCallback, "NetCorePushPlugin", "pushLogout", [])
//};
//
//NetCorePushPlugin.prototype.profilePush = function (successCallback, errorCallback) {
//    cordova.exec(successCallback, errorCallback, "NetCorePushPlugin", "profilePush", [])
//};
//
//NetCorePushPlugin.prototype.setUpIdentity = function (successCallback, errorCallback) {
//    cordova.exec(successCallback, errorCallback, "NetCorePushPlugin", "setUpIdentity", [])
//};
//
//NetCorePushPlugin.prototype.getNotifications = function (successCallback, errorCallback) {
//    cordova.exec(successCallback, errorCallback, "NetCorePushPlugin", "getNotifications")
//};
//
//NetCorePushPlugin.prototype.pushRegisteration = function (successCallback, errorCallback) {
//    cordova.exec(successCallback, errorCallback, "NetCorePushPlugin", "pushRegisteration", [])
//};
//
//NetCorePushPlugin.install = function () {
//    if (!window.plugins) {
//        window.plugins = {};
//    }
//
//    window.plugins.netCore = new NetCorePushPlugin();
//    return window.plugins.netCore;
//};
//
//cordova.addConstructor(NetCorePushPlugin.install);
//
//
//
//
