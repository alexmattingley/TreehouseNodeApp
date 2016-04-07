var Profile = require("./profile.js");

function home(request, response) {
	if(request.url === '/'){
		response.write('search\n');
		response.end('footer\n');
	}
}

function user(request, response) {
	//determine username from url
	var username = request.url.replace("/","");
	//if username exists do stuff
	if (username.length > 0) {
		//create new student object based on username
		var studentProfile = new Profile(username);
		studentProfile.on("end", function(profileJson){
			
			var values = {
				avatarUrl: profileJson.gravatar_url,
				username: profileJson.profile_name,
				badges: profileJson.badges.length,
				javascriptPoints: profileJson.points.Javascript
			}
			response.write(values.username + ' has ' + values.badges + ' badges.\n');
			response.end('footer\n');
		});
		studentProfile.on("error", function(error){
			response.write(error.message, function(){
				response.end('footer\n');
			});
		});
	}
}


module.exports.home = home;
module.exports.user = user;