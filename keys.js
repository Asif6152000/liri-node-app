var twitter= require("twitter"); 
var api= require("node-spotify-api");
var request= require("request"); 

//here we are importing our keys from the .env file
require('dotenv').config() 

//creating and exporting an object that contains all of our twitter keys
exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

//creating an exporting object that contains all of our spotify keys
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

// Go to keys.js in the side bar, hold down control and click and choose open with terminal. 

// module.exports = {
//   twitter: {
//     consumer_key: process.env.TWITTER_CONSUMER_KEY,
//     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//     access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//     access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
//   },
//   spotify: {
//     id: process.env.SPOTIFY_ID,
//     secret: process.env.SPOTIFY_SECRET
//   }
// }