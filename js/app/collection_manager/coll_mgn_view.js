define( [	  "main"
			, "tpl!app/collection_manager/templates/app-layout.tpl"
	        , "tpl!app/collection_manager/templates/app-ctrl-panel.tpl"
	         //, "tpl!app/collection_manager/templates/none.tpl"
	        , "tpl!app/collection_manager/templates/item.tpl"
	        , "tpl!app/collection_manager/templates/items.tpl"
         ]
       , function( 	  app
					, appLayoutTpl
					, appCtrlPanelTpl
					      //, noneTpl
				    , itemTpl
					, itemsTpl
			      ){
app.module("CollView", function(CollView, app, Backbone, Marionette, $, _){

		CollView.Layout = Marionette.Layout.extend({
		   	  template: appLayoutTpl
		   	, regions: {
		   		// the following are nested inside #app-layout
				RegionAppCtrlPanel: "#region-control-panel",  
		    	RegionAppContent:   "#region-content"
		   	}
	  	});
		
		CollView.CtrlPanel = Marionette.ItemView.extend({
			  template: appCtrlPanelTpl
			  , triggers: {"click button.js-new": "item:new" } 
		});
		CollView.Item  = Marionette.ItemView.extend({
						  tagName: "tr"
						, template: itemTpl
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
						, template: itemsTpl
						, itemView: CollView.Item
						, itemViewcontainer: "tbody" }); 

}, null);
return app.CollView;});