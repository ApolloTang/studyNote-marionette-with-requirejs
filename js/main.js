define(["marionette"], function(Marionette){
	
	var app = new Marionette.Application();
	
    app.addRegions({r1: "#main-region"});
	app.addRegions({r2: "#dialog-region"});
	
	app.persisted = true;
	app.useLocalStorage = true;

	app.on("initialize:after", function(){ 
		// [insight] this get initialized before BBM.addInitializer !!! 
		console.log(  Date.now() + 'exec [2] app.on("initialize:after" ' );
		if(Backbone.history){ 
			console.log('backbone history object exist, but not started');
			require(['app/AppControl'], function(){
				// [!] Very important start history after requred router
				Backbone.history.start();
				console.log('just started bb.history'); 
				if(app.getCurrentRoute() === ""){	
					console.log('url fragment is empty');
					app.trigger('AppControl:content:items');
				};
			});
		};
	});

	//helper
	_.extend(app, {
		navigate: function(route, opts) { opts || (opts={}); Backbone.history.navigate(route, opts); }
		, getCurrentRoute : function(){ return Backbone.history.fragment; }
	});
	

		
	return app;
});