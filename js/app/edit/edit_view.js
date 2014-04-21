define(['main'
		, "tpl!app/common/missing/templates/missing.tpl"
		, 'app/common/edit_form/edit_form_view'
		]
	, function(
		 app
		, missingTpl
		, edit_form_view
	){
app.module('edit_view', function(edit_view, app, Backbone, Marionette, $, _, edit_form_view){
	this.View_edit = edit_form_view.View.extend({
			initialize: function() {
				console.log('Edit Item View comstructor called');
				this.title = "zzzzzzEdit item with id: " + this.model.get("id");
			}
		});
	this.View_missing = Marionette.ItemView.extend({
			template: missingTpl
		}); 
}, edit_form_view);
return app.edit_view;
});