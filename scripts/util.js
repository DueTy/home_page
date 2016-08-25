define("util",function(require,exports,module){
     var util = {};
     util.logText = function(){
       var text="this is imported from util.js";
       var object= {};
       object.text=text;
       return object;
     };
     module.exports = util;
});
