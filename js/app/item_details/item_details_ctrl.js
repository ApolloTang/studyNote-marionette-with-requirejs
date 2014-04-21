define([  'main'
		, 'app/item_details/item_details_view'], function(
		  app
		, View){
app.module("item_details_ctrl", function(item_details_ctrl, app, Backbone, Marionette, $, _){
		this.display = function(id) { 
			console.log('in item_detail_ctrl');
		
				
			require(["app/common/spinner/view_spinner", "app/entities/collection"], function(ViewSpinner){

					// ** spawn a spnner **
					var spinnerView = new ViewSpinner({
				        title: "Simulating data latency",
				        message: "loading item...."
				      });
					app.r1.show(spinnerView);
				
							
					var promise_item = app.request('entity', id);
					$.when(promise_item).done(function(item){
						console.log('[c] promised passed to item view contorl, here is the item:', item);
						var detailView = null;
						if ( item !== undefined ) {
							detailView = new View.View_details({ model:item });
						} else {
							detailView = new View.View_missing();	
						} 	
						app.r1.show(detailView);
					}); // end of deffer object chain
				
			});// end require view_spinner AND Entity
	   }; // end this.display
				
});	
return app.item_details_ctrl;
});