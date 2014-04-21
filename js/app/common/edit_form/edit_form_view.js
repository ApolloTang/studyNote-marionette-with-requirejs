define([  "main"
		 , "tpl!app/common/edit_form/templates/edit_form.tpl"]
	, function(    app
				,  edit_formTpl
	){
app.module("edit_form_view", function(edit_form_view, app, BB, Marionette, $, _){
	
	this.View = Marionette.ItemView.extend({
			template: edit_formTpl
			, events : {
				"click button.js-submit" : "submitClicked"
			}
			, submitClicked : function(e) {
					e.preventDefault();
					console.log("edit contact submit click");
					var data = Backbone.Syphon.serialize(this);
					console.log("data return from syphon:, ", data);
					var data_processed = {};
					_.each(data, function(element, key){ data_processed[key] = element[0];	});
					console.log("processed data that return from syphon:, ", data_processed);
					this.trigger("form:submit", data_processed);
				}
			, onRender: function(){
				console.log('Edit Item render fired');
				var $title = $("<h1>", { text: this.title });
				this.$el.prepend($title);
		    	}
		    , onShow: function(){
				console.log('Edit Item show fired');
		    	}			
			, onFormDataInvalid : function(validationError) {
				console.log('in onFormDataInvalid' );
					console.log('save fail b/c form fail validation, error is: ', validationError);
					var thisView = this;
					//remove previous error msg
					thisView.$el.find('.help-inline.error').each(function(){$(this).remove()});
					//for each form group with error, append error msg 					
					_.each(validationError, function(value, key){
						var $el_error = $("<span>", {class: 'help-inline error', text: value}); 
						thisView.$el.find('#item-'+key).parent().append($el_error);
					});
			}
		});// end this.View
	
});

return app.edit_form_view;	
});
