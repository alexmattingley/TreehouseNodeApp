var Profile = require("./profile.js");


var chalkersProfile = new Profile("chalkers");

/**
* When the JSON body is fully recieved the 
* the "end" event is triggered and the full body
* is given to the handler or callback
**/
//chalkersProfile.on("end", console.dir);

/**
* If a parsing, network or HTTP error occurs an
* error object is passed in to the handler or callback
**/
//chalkersProfile.on("error", console.error);

// var alexmattingleyProfile = new Profile("alexmattingley");

// /**
// * When the JSON body is fully recieved the 
// * the "end" event is triggered and the full body
// * is given to the handler or callback
// **/
// alexmattingleyProfile.on("end", console.dir);

// /**
// * If a parsing, network or HTTP error occurs an
// * error object is passed in to the handler or callback
// **/
// alexmattingleyProfile.on("error", console.error);