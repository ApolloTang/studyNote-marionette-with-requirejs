define([  'main'
		, "tpl!app/common/missing/templates/missing.tpl"
		, "tpl!app/item_details/templates/details.tpl"]
	, function(
		  app
		, missingTpl
		, detailTpl
	){
app.module("item_details_view", function( item_details_view, app, BB, Marionette, $, _) {
		this.View_details = Marionette.ItemView.extend({
			template: detailTpl
			, events: {
				"click a.js-items": 'backToItemsClick'
			}
			, backToItemsClick : function(e) {
					e.preventDefault();
					app.trigger('AppControl:content:items');
			}
			
		});
		this.View_missing = Marionette.ItemView.extend({
			template: missingTpl
		});
});	
return app.item_details_view;
});
