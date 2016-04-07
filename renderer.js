var fs = require('fs');

function view(templateName, values, response){
	//read from temp files
	fs.readFile('./views/' + templateName + '.html', (err, fileContents) => {
	  if (err) throw err;
	  
	  //Write out to response
	  response.write(fileContents);
	});
	// Insert values into content
}

module.exports.view = view;