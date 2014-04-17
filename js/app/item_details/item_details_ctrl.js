define(['main'], function(app){

			this.display = function(id) { 
				console.log('in item_detail_ctrl')
				
				/*
				// ** spawn a spnner **
				var spinnerView = new app.CommonView.Spinner({
			        title: "Simulating data latency",
			        message: "loading item...."
			      });
				app.r1.show(spinnerView);
				
				var promise_item = app.request('entity', id);
				$.when(promise_item).done(function(item){
					console.log('[c] promised passed to item view contorl, here is the item:', item);
					var detailView = null;
					if ( item !== undefined ) {
						detailView = new Details.View({ model:item });
					} else {
						detailView = new Details.ViewMissing();	
					} 	
					app.r1.show(detailView);
				}); // end of deffer object chain
			
			*/ }
	
		return Details
});