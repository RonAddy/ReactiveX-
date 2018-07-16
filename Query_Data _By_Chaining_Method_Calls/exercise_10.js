// Exercise 10: Implement concatAll()
// Let's add a concatAll() function to the Array type. The concatAll() function iterates over each sub-array in the array and collects the results in a new, flat array. Notice that the concatAll() function expects each item in the array to be another array.

Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
    if ( typeof subArray != 'object'){
    	throw 'Error';
    }
    
    subArray.forEach( ele  => { return results.push(ele) });
    console.log(results);
	});

	return results;
};

[ [1,2,3], [4,5,6], [7,8,9] ].concatAll()
//[1,2,3,4,5,6,7,8,9]
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array
		
		