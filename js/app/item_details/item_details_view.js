define(['main'
		, "tpl!app/item_details/templates/missing.tpl"
		, "tpl!app/item_details/templates/details.tpl"], function(app){
app.module("Details", function( Details, app, BB, Marionette, $, _) {
		Details.View = Marionette.ItemView.extend({
			template: "#template-detailView"
			, events: {
				"click a.js-items": 'backToItemsClick'
			}
			, backToItemsClick : function(e) {
					e.preventDefault();
					app.trigger('AppControl:content:items');
			}
			
		});
		Details.ViewMissing = Marionette.ItemView.extend({
			template: "#template-detailView-missing-item"
		});
});	
return Details
});
