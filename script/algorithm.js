/******************************************************************
 * Implements the algorithm that was used by 
 *
 * Mitchell, L., Frank, M. R., Harris, K. D., Dodds, P. S.,
 * & Danforth, C. M. (2013). The Geography of Happiness:
 * Connecting Twitter Sentiment and Expression, Demographics,
 * and Objective Characteristics of Place. PloS ONE, 8(5), e64417.
 *
 * to analyze tweets in terms of their sentiment.
 ******************************************************************/
var ratings = require('./data/words.json')
  , PUNCTUATION = /[\.,-\/#!$%\^&\*;:{}=\-_`~()?!]/;


var count = function(word, array) {
  return array.reduce(function(base, cur) {
    if (cur == word) { base += 1; }
    return base;
  }, 0);
};

var strip = function(words) {
  return words.toLowerCase().split(' ').map(function(word) {
    return word.replace(PUNCTUATION, '');
  });
};


module.exports = function(tweet) {
  var words = strip(tweet);

  var dict = words.reduce(function(base, word) {
      var rating = ratings[word];
      if (rating < 4 || rating > 6) {
        base[word] = rating;
      }
      return base;
    }, {});

  var keys = Object.keys(dict)
    , len  = keys.length;

  var index = keys.reduce(function(index, key) {
    var rating = dict[key]
      , relfreq = count(key, keys) / len;

    index += rating * relfreq;
    return index;
  }, 0);

  return index || NaN;
};
