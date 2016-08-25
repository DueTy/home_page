define(function(require,exports,module){

     var util = require('util');

    //  var helloSeaJS = document.getElementById('hello-seajs');
     var logText = util.logText();
});

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
