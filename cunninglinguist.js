Papa.parse('./dict.csv', {
	download: true,
	complete: function(results) {

		console.log(results)

		var len = results.data.length
		var index = Math.floor((Math.random() * len) + 1);

		setWord(results.data[index][0],results.data[index][1]);
	}
});

String.prototype.capitalize = function(){
    return this.toLowerCase().replace( /\b\w/g, function (m) {
        return m.toUpperCase();
    });
};

function setWord(word, def){
	document.getElementById('word').innerHTML = word.capitalize();
	document.getElementById('def').innerHTML = def;
}