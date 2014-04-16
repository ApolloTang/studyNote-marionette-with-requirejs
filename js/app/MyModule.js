define(["main", "app/opt"], function(app, myOpt){
	
      app.module("MyModule", function(MyModule, MyApp, Backbone, Marionette, $, _, Opts ) {
      	
      	console.log('[1] this === MyModule: ', (this === MyModule)); //true
        console.log('[2] MyApp===app: ', (MyApp===app));  // true
      	
      	// Private
        var _data1 = "private data";
		var _method1 = function(){ };
  		// Exposed
  		this.data2 = "public data";
 		this.method2 = function(){console.log("hello from MyModule")};
 		this.method3 = function(){console.log("myOpt: ", JSON.stringify(Opts))};
 		
      }, myOpt);

return app.MyModule
});