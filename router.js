var Profile = require("./profile.js");
var renderer = require('./renderer.js');
var querystring = require('querystring');

var commonHeaders = {'Content-Type':'text/html'};

function home(request, response) {
	if(request.url === '/'){
		if(request.method.toLowerCase() === "get"){
			response.writeHead(200, commonHeaders);
			renderer.view("header",{}, response);
			renderer.view("search",{}, response);
			renderer.view("footer",{}, response);
			response.end();
		}else {
			request.on('data', function(postBody){
				var query = postBody.toString();
				query = querystring.parse(query);
				response.writeHead(303, {"Location":"/" + query.username});
				response.end();
			});
		}
	}
}

function user(request, response) {
	//determine username from url
	var username = request.url.replace("/","");
	//if username exists do stuff
	if (username.length > 0) {
		response.writeHead(200, commonHeaders);
		renderer.view("header",{}, response);
		//create new student object based on username
		var studentProfile = new Profile(username);
		studentProfile.on("end", function(profileJson){
			
			var values = {
				avatarUrl: profileJson.gravatar_url,
				username: profileJson.profile_name,
				badges: profileJson.badges.length,
				javascriptPoints: profileJson.points.Javascript
			}
			renderer.view("profile",values, response);
			renderer.view("footer",{}, response);
			response.end();
		});
		studentProfile.on("error", function(error){
			renderer.view("error",{errorMessage: error.message}, response);
			renderer.view("search",{}, response);
			renderer.view("footer",{}, response);
			response.end();
		});
	}
}


module.exports.home = home;
module.exports.user = user;