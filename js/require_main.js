requirejs.config({
    baseUrl: "js"
  , paths: {
      backbone    : "libs/backbone"
    , jquery      : "libs/jquery"
    , json2       : "libs/json2"
    , localstorage: "libs/backbone.localstorage"
    , marionette  : "libs/backbone.marionette"
    , text        : "libs/text"
    , tpl         : "libs/underscore-tpl"
    , underscore  : "libs/underscore"
    , spinJQuery  : "libs/spin.jquery"
    , spin        : "libs/spin"
  } //end path
  , shim: {
      underscore  : { exports: "_" }
    , backbone    : {
      	  deps    : ["jquery", "underscore", "json2"]
      	, exports : "Backbone"
      }
    , marionette  : {
        deps      : ["backbone"]
      , exports   : "Marionette"
    }
    , "jquery-ui"  : ["jquery"]
    , localstorage : ["backbone"]
    , tpl          : ["text"]
  } // end shim
}); // end requirejs.config

require(["main"], function(app){

console.log( Date.now() +  'exec [1] before  app.start()' );
  app.start();
});
