/***********************************************************
 * Transforms the file that transform.R outputs (subset.txt)
 * into a JSON file in script/data/words.json.
 **********************************************************/
var fs = require('fs');


var data = fs.readFileSync('data/subset.txt')
  , file = 'script/data/words.json'
  , clean = data.toString()
                .split('\n')
                .map(function(word) { return word.replace(/"/g, ''); });

var res = clean.reduce(function(base, pair) {
  var cur = pair.split(' ')
    , key = cur[0]
    , val = cur[1];
  base[key] = val;
  return base;
}, {});


fs.writeFile(file, JSON.stringify(res, null, 4), function(err) {
  if (err) { console.log(err); }
  console.log('written to disk');
});
