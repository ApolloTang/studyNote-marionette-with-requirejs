define( [	  "main"
			, "app/collection_manager/coll_mgn_view"
         ]
       , function( 	  app
					, View
			      ){
app.module("coll_mgn_ctrl", function(coll_mgn_ctrl, app, Backbone, Marionette, $, _){

	
	this.display =  function() {
		console.log('control manager display called')
		
		var applicationLayout = new View.Layout();
		var viewCtrlPanel = new View.CtrlPanel();
			
		console.log('applicationLayout.template()', applicationLayout.template());
		console.log('viewCtrlPanel.template()', viewCtrlPanel.template());
		
		require(["app/common/view_spinner", "app/entities/collection"], function(ViewSpinner){
			
	
			// ** spawn a spnner **
			var viewSpinner = new ViewSpinner({
		        title: "Simulating data latency",
		        message: "loading collection...."
		      });
			app.r1.show(viewSpinner);
			
			
			
			var promise_items = app.request('entities'); //  request entities

		
			$.when(promise_items).done(function(data){
			
				    console.log('[4] promised passed to collection view control, here is the collection:', data);
					viewItems.collection = data;  // spawn view for collection
					
					//app.r1.show(viewItems);
					applicationLayout.on("show", function(){
						console.log("applicationLayout shown");
						applicationLayout.RegionAppCtrlPanel.show(viewCtrlPanel);
						applicationLayout.RegionAppContent.show(viewItems);
					});
					
					
					viewCtrlPanel.on("item:new", function(){
						var newItem = new app.Entities.Item();
						var newItemView = new app.AddItem.View({model: newItem});
						
						newItemView.on("form:submit", function(data){
					            if(viewItems.collection.length > 0){
					              var highestId = viewItems.collection.max(function(c){ return c.id; }).get("id");
					              data.id = parseInt(highestId, 10)  + 1;
					            }
					            else{
					              data.id = 1;
					            }
					            if(newItem.save(data)){
					            	console.log('newItem.save(data) is true');

					              viewItems.collection.add(newItem);
					              app.r2.close();
					            }
					            else{
					              console.log('newItem.save(data) is false');
					              newItemView.triggerMethod("form:data:invalid", newItem.validationError); // this will trigger EditItem.View.onFormDataInvalid()
					            }
					            
				        }); // end newItemView.on("form:submit"
		
						app.r2.show(newItemView);
					});
					// end viewCtrlPanel.on("item:new"

					app.r1.show(applicationLayout);

				}); 
				// end deffer object chain
			
			
		});// end require Entity
		var viewItems = new View.Items;  // spawn view for collection			
			
			
      		var deleteItem = function(itemView, model) {
      			if (app.persisted) {
      				model.destroy();	
      			} else {
			    	this.collection.remove(model);
			    } 
      		}; 

      		var showItem = function(itemView, model) {
      			app.trigger('AppControl:content:itemById', model.get('id') );
      		};
      		var editItem = function(itemView, model) {
      			//app.trigger('AppControl:content:itemEdit', model.get('id') );
      			console.log( 'item edit click');
      			editItemView = new app.EditItem.View({ model: model, someProperty: 'someProperty' });
				editItemView.on('form:submit', function(data){
					if( model.save(data)) {
						console.log('form save success, item is: ', model);
						itemView.render();
						app.r2.close();
					} else {
						console.log('save fail');
						editItemView.triggerMethod("form:data:invalid", model.validationError); // this will trigger EditItem.View.onFormDataInvalid()
					};
				});
      			app.r2.show(editItemView);
      			//app.r2.show(applicationLayout);
      		};
		    viewItems.on("itemview:item:delete", deleteItem );
		    viewItems.on("itemview:item:show", showItem );
		    viewItems.on("itemview:item:edit", editItem );
		    
		    

	
};
//end CollMgnCtrl


}, null);
return app.coll_mgn_ctrl
});