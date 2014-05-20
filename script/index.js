var twitter = require('ntwitter')
  , compute = require('./algorithm')
  , config  = require('./config.json');


var new_york  = '-74,40,-73,41'
  , args      = process.argv.slice(2)
  , geography = { 'locations': args[0] || new_york }
  , delimiter = '-----------------------------------------------';


var t = new twitter(
  { consumer_key: config.consumer_key
  , consumer_secret: config.consumer_secret
  , access_token_key: config.access_token_key
  , access_token_secret: config.access_token_secret
});


t.stream('statuses/filter', geography, function(stream) {

  stream.on('data', function(data) {
    var tweet = data.text
      , index = compute(tweet).toFixed(2);

    console.log(delimiter);
    console.log([tweet, '====>', index].join(' '));
    console.log(delimiter);
  });

  stream.on('error', function(err) {
    console.log('Something went terrible wrong. Evacuate the room.');
    console.log(err);
  });

});
