define(["main", "localstorage"], function(app){
app.module("Entities", function(Entities, app, Backbone, Marionette, $, _){

	var findStorageKey = function(entityPrototype){
	    // use a model's urlRoot value
	    if(entityPrototype.urlRoot){
	      return _.result(entityPrototype, "urlRoot");
	    }
	    // use a collection's url value
	    if(entityPrototype.url){
	      return _.result(entityPrototype, "url");
	    }
	    // fallback to obtaining a model's storage key from
	    // the collection it belongs to
	    if(entityPrototype.collection && entityPrototype.collection.url){
	      return _.result(entityPrototype.collection, "url");
	    }	
	    throw new Error("Unable to determine storage key");
	  };
	
	var StorageMixin = function(entityPrototype){
	    var storageKey = findStorageKey(entityPrototype);
	    return { localStorage: new Backbone.LocalStorage(storageKey) };
	  };
	
	Entities.configureStorage = function(entity){
	    _.extend(entity.prototype, new StorageMixin(entity.prototype));
	};	
	
});
return app.Entities	;	
});
