define(["main"
		, "app/config/storage/localstorage_conf"
		, 'app/entities/generate_model'
		]
	, function(
		app
		, storage
		, modelAttrs
		){
			

app.module("Entities", function(Entities, ContactManager, BB, Marionette, $, _, opts){
  	
		Entities.Item = BB.Model.extend({ 
			urlRoot: "items"
			, defaults: {a:'aNew', b:'bNew', c:'cNew', d:'dNew'}
			, validate: function(attrs, options) {
				 console.log('.**...... validating error');
					  var errors = {};
					  if (!attrs.a) {
					    errors.a = "can't be blank";
					  }
					  if (!attrs.b) {
					    errors.b = "can't be blank";
					  }
					  if (!attrs.c) {
					    errors.c = "can't be blank";
					  }
					  if( !_.isEmpty(errors)){
					    return errors;
					  }
				}// end validate;
			 });
		Entities.Items = BB.Collection.extend({
			url: function() {return 'items';} 
			, model : Entities.Item });
		
		if (app.useLocalStorage) {
		  Entities.configureStorage(Entities.Item);  
		  Entities.configureStorage(Entities.Items);
		}
			
		var API = {
			getEntities: function() {
				var items = new Entities.Items;	
				console.log('[1] before fetch entities, collection length:',  items.length);
				var defer = $.Deferred();
				setTimeout(function(){	// simulate network latency
					items.fetch({ 
						success: function(items){
							console.log('[2] data returned, collection length:',  items.length);
							defer.resolve(items);
							}
					}); // end items.fetch
				}, 2000); // end set timeout
				var promise = defer.promise();
				$.when(promise).done(function(items){			
					console.log('[3] promised returned, collection length:',  items.length);				
					if ( !items.length) {
						console.log('[3a] collection is empty, populate them' );
						items.add(opts.models_attr);
						items.forEach(function(item){ item.save(); });
						console.log('[3b] populated, collection length:',  items.length);
						};
				});// end done
				return promise;
			}// end getEntities
			, getEntity: function(itemId) {
				console.log('[a] fetch entity: id is:', itemId);
				var item = new Entities.Item({id: itemId});
				var defer = $.Deferred();
				setTimeout(function(){  // simulate network latency
					item.fetch({
						success: function(item){
							console.log('[b] entity data return, here is the item: ', item);
							defer.resolve(item); 
						}
						, error: function(item) {
							defer.resolve(undefined);
						}
					});// end fetch
				}, 2000 ); // end set timeout
				var promise = defer.promise();
				return promise;
			} //end getEntity	
		};

		// handler to respond to request				
	    app.reqres.setHandler('entities', function(){ return API.getEntities();});
	    app.reqres.setHandler('entity', function(id){ return API.getEntity(id);});

} , {models_attr: modelAttrs }  );
});