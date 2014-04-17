define( [	  "main"
			//, "tpl!app/collection_manager/templates/layout.tpl"
	         //, "tpl!app/collection_manager/templates/panel.tpl"
	         //, "tpl!app/collection_manager/templates/none.tpl"
	         //, "tpl!app/collection_manager/templates/list.tpl"
	         //, "tpl!app/collection_manager/templates/list_item.tpl"
         ]
       , function( 	  app
					//, layoutTpl
					      //, panelTpl
					      //, noneTpl
					      //, listTpl
					      //, listItemTpl
			      ){
app.module("CollView", function(CollView, app, Backbone, Marionette, $, _){

/*
		CollView.Layout = Marionette.Layout.extend({
		   	  template: "#template-app-layout"
		   	, regions: {
		   		// the following are nested inside #app-layout
				RegionAppCtrlPanel: "#region-control-panel",  
		    	RegionAppContent:   "#region-content"
		   	}
	  	});
		
		CollView.CtrlPanel = Marionette.ItemView.extend({
			  template: "#template-app-ctrl-panel" 
			  , triggers: {"click button.js-new": "item:new" } 
		});
		CollView.Item  = Marionette.ItemView.extend({
						  tagName: "tr"
						, template: "#template-item"
						, events: {   "click": 'highLight'
									, "click button.js-delete": 'deleteClicked'
									, "click a.js-show": 'showClicked'
									, "click a.js-edit": 'editClicked'
								  }
						, highLight: function() {this.$el.toggleClass('high-light');	}
						, deleteClicked: function(e) { 
								e.stopPropagation();
							    this.trigger("item:delete", this.model);
							}
						, showClicked: function(e) { 
							    e.preventDefault();
					    		e.stopPropagation();
					    		this.trigger("item:show", this.model);
					    	} 
				    	, editClicked: function(e) { 
						    e.preventDefault();
				    		e.stopPropagation();
				    		this.trigger("item:edit", this.model);
				    	}
					    , remove: function(){
					    	   var that = this;
					    	   this.$el.fadeOut(function(){
					    	   		Marionette.ItemView.prototype.remove.call(that);
					    	   });
					    	}
		});
		CollView.Items = Marionette.CompositeView.extend({
						  tagName: "table"
						, template: "#template-items"
						, itemView: CollView.Item
						, itemViewcontainer: "tbody" }); 



*/
}, null);
return app.CollView;});