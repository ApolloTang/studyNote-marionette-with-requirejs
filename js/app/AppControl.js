define(['main'],function(app){
app.module("AppControl", function(AppControl, MyApp, Backbone, Marionette, $, _, Opts ) {
	
	console.log('in application control');
	
	var router = null;
	this.Router = Marionette.AppRouter.extend({
		appRoutes: {
			  "items"         : 'itemsCallback'
			, 'items/:id'     : 'itemsDetailCallback'
			, 'items/:id/edit': 'itemEdit' 
		}
	});
	
    // Router callback
	var _API = {
		// the following callback ask View to to things:
		  itemsCallback: function() { /*app.CollView.Controller.display();   */ 
		  	console.log('itemsCallback fired ');
		  	require(["app/collection_manager/coll_mgn_ctrl"], function(CollMgnCtrl){
		  		CollMgnCtrl.display();
		  	});
		  	
		  	}
		, itemsDetailCallback: function(id) { /*app.Details.Controller.display(id);  */ console.log('itemsDetailCallback fired ')}
		, itemEdit:            function(id) { /*app.EditItem.Controller.display(id); */ console.log('itemEdit fired ')}   
	};
	
	app.addInitializer(function(){
		console.log( Date.now()  + 'exec [3] app.addInitializer( ' );
		new AppControl.Router({controller: _API	});
	});
	
	//subscribe to app.trigger('AppControl:content:items');
	// responsible: display collection
	app.on("AppControl:content:items", function(){ 
		console.log("AppControl:content:items trigger")
		app.navigate('items');
		_API.itemsCallback();  // evoke router call back
	});
	
	// subscribe to app.trigger('AppControl:content:itemById');
	// responsible: display item by id
	app.on("AppControl:content:itemById", function(id){ 
		console.log('in AppControl:content:itemById ');
		app.navigate('items/'+ id);
		_API.itemsDetailCallback(id);  // evoke router callback
	});
	
	app.on("AppControl:content:itemEdit", function(id){ 
		app.navigate('items/'+ id + "/edit");
		_API.itemEdit(id);
	});	

}, null);
});
