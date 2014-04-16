define(["marionette"], function(Marionette){
	var app = new Marionette.Application();
		
	require(["app/MyModule"], function(myModule) {
      app.MyModule.method2();         //hello from MyModule
	  myModule.method2();            //hello from MyModule
	  console.log('data2: ', myModule.data2);   //public data
	  myModule.method3();            // {"a":"a","b":"b"}     
	   
	});
	
	return app;
});