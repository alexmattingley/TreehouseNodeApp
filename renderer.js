var fs = require('fs');

function mergeValues(values, content){
	//cycle over keys
	for(var key in values){
		content = content.replace("{{"+ key +"}}", values[key]);
		//replace all keys with values from the values object.
	}

	return content;
}

function view(templateName, values, response){
	//read from temp files
	var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: 'utf-8'});

	fileContents = mergeValues(values, fileContents);
	response.write(fileContents);
	// Insert values into content
}

module.exports.view = view;