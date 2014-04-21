define(['main'
		, 'app/common/edit_form/edit_form_view'
		, "tpl!app/common/missing/templates/missing.tpl"
		, "app/common/test"
		]
	, function(
		 app
		, View
		, missingTpl
		, test
	){
		var outside = 'outside'
		console.log('in edit_view.js');
debugger;
app.module('edit_view', function(edit_view, app, Backbone, Marionette, $, _, outside){
debugger;
	this.View_edit = new app.View_editForm.View({
			initialize: function() {
				console.log('Edit Item View comstructor called');
				this.title = "zzzzzzEdit item with id: " + this.model.get("id");
			}
		});
	this.View_missing = Marionette.ItemView.extend({
			template: missingTpl
		}); 
}, outside);
return app.edit_view;
});