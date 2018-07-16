// Exercise 13: Implement concatMap()
// Nearly every time we flatten a tree we chain map() and concatAll(). Sometimes, if we're dealing with a tree several levels deep, we'll repeat this combination many times in our code. To save on typing, let's create a concatMap function that's just a map operation, followed by a concatAll.

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
	return this.map(function(item) {
      return projectionFunctionThatReturnsArray(item)
		}).concatAll();
};


	let spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
	// collect all the words for each number, in every language, in a single, flat list
	let allWords = [0,1,2].
		concatMap(function(index) {
			return spanishFrenchEnglishWords[index];
		});
    
    console.log(allWords);
    //["cero","rien","zero","uno","un","one","dos","deux","two"]
		