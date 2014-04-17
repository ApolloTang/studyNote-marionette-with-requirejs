define([],function(){
	
	var models = [/* { a:'0a', b:'0b', ... },
		 				 { a:'1a', b:'1b', ... },
		 					...                    */
					 ];
		for (var i = 1; i < 6; i++) {
			var model = {/* { a:i+'a', b:i+'b', ... } */};
			model['id'] = i.toString();   // add custom id 
			_.each(['a', 'b', 'c', 'd'], function(elem) { model[elem] = i.toString() + elem; });
			models.push(model);
		}; //end for
	return models;

});
