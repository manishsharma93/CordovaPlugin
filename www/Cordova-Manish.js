var exec = require('cordova/exec');

exports. setUpApplicationId = function (arg0, success, error) {
    exec(success, error, 'NetCorePushPlugin', 'setUpApplicationId', ["6ed2b7cb20edd6ddf29c5b378542677f"]);
};
