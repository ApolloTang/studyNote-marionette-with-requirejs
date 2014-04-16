define(["marionette"], function(Marionette){
	
	var app = new Marionette.Application();
	
    app.addRegions({r1: "#main-region"});
	app.addRegions({r2: "#dialog-region"});
	
	app.persisted = true;
	app.useLocalStorage = true;

	app.on("initialize:after", function(){ 
		console.log( 'exec [3] after initializer');
		if(Backbone.history){ 
			console.log('backbone history is up');
			Backbone.history.start(); 
			if(app.getCurrentRoute() === ""){	
				app.trigger('AppControl:content:items');
			};
		};
	});

	
	//helper
	_.extend(app, {
		navigate: function(route, opts) { opts || (opts={}); Backbone.history.navigate(route, opts); }
		, getCurrentRoute : function(){ return Backbone.history.fragment; }
	});
	
	// start application control
	require(['app/AppControl'], function(){});
		
	return app;
});