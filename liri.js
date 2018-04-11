require("dotenv").config();
var omdbApi = require('omdb-client');
var Spotify = require('node-spotify-api');
var Twitter = require('twitter'); 
var keys = require("./keys.js");
//console.log(keys)
// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

 var argOne=process.argv[2];
 var argTwo=process.argv[3];


//console.log(process.argv)
//console.log(argOne, argTwo );



 

if ( argOne === "movie-this" && argTwo){
    var params = {
        apiKey: 'trilogy', 
        title: argTwo 
    }
    omdbApi.get(params, function(err, data) {
        // process response...
        //console.log("Title: "+data.Title, "Year: "+data.Year, "Genre: "+data.Genre ); 
        
        console.log("Title of the movie:")
         console.log(data.Title);

         console.log("")

         console.log("Year of the movie:")
         console.log(data.Year); 

         console.log("")

         console.log("IMDB rating");
         console.log(data.imdbRating); 

         console.log("Country Origin");
         console.log(data.Country);

         console.log("");

         console.log("Language");
         console.log(data.Language)
         
         console.log(""); 

         console.log("Plot");
         console.log(data.Plot); 

         console.log("Actors"); 
         console.log(data.Actors); 

    });
    
}

else if (argOne==="spotify-this-song" && argTwo ) {
    console.log("You want to search for the song "+argTwo); 
    
 
    
 
    var Spotify = new Spotify(keys.spotify);
    //console.log(keys.spotify); 
     
    Spotify.search({ type: 'track', query: argTwo, limit: 1 }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
     
    // console.log(data.tracks.items);
    // Preview URL 
    //console.log("Artists from Album property ", data.tracks.items[0].album.artists);
    var artistArr = data.tracks.items[0].artists;
    console.log("Artists:")
    for (var i=0; i<artistArr.length; i++ ){
        console.log(artistArr[i].name )
    }
    console.log('')

    console.log("Song's Name:")
    console.log(data.tracks.items[0].name);
    console.log('')
    console.log("Preview Link:")
    console.log(data.tracks.items[0].preview_url); 
    console.log('')

    console.log("Album:")
    console.log(data.tracks.items[0].album.name); 



      
    });
}

else if (argOne==="my-tweets" ) {
console.log("This is twitter")
var client = new Twitter (keys.twitter);
var params = {q: 'nodejs'};
client.get('/search/tweets', params, function(error, tweets, response) {
    if(error) console.error(error);
    console.log(tweets);  // The favorites. 
    //console.log(response);  // Raw response object. 

  });
  

} 




