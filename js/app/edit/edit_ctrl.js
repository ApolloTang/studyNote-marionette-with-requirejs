define(['main'
		, 'app/edit/edit_view']
	, function(
		  app
		, edit_view
	){
app.module('edit_ctrl', function(edit_ctrl, app, Backbone,Marionette, $, _){
	this.display = function(id) {
		console.log('in edit_ctrl.js');
		
		require(["app/common/spinner/view_spinner", "app/entities/collection"], function(ViewSpinner){
			// ** spawn a spnner **
			var spinnerView = new ViewSpinner({
		        title: "Simulating data latency",
		        message: "loading item...."
		      });
			app.r2.show(spinnerView);
				
			var promise_item = app.request('entity', id);	
			$.when(promise_item).done(function(item){
					console.log('[edit-1] promised passed to edit view contorl, here is the item:', item);
					var editItemView = null;
					if ( item !== undefined ) {
												
						editItemView = new edit_view.View_edit({ model:item });
								
						editItemView.on('form:submit', function(data){
							if( item.save(data)) {
								console.log('form save success, item is: ', item);
								app.trigger('AppControl:content:itemById', item.get('id'));
							} else {
								console.log('save fail');
								editItemView.triggerMethod("form:data:invalid", item.validationError); // this will trigger EditItem.View.onFormDataInvalid()
							}
						});
	
					} else {
						editItemView = new View.View_missing();	
					} 	
					app.r2.show(editItemView);
				}); // end of deffer object chain
			
		});// end require
		
	};// end this.display()
	
}, edit_view);
return app.edit_ctrl;
});