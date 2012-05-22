/*

   hook.io hook for creating hook.io hooks
   
   ( the hookTemperature generates new hooks by inspecting itself )

*/


var Hook = require('hook.io').Hook,
    util = require('util');

var HookTemperature = exports.HookTemperature = function(options){
  Hook.call(this, options);
  var self = this;
};

// HookTemperature inherits from Hook
util.inherits(HookTemperature, Hook);

HookTemperature.prototype.doSomething = function(options, callback){

};

HookTemperature.prototype.doSomethingElse = function(options, callback){

};