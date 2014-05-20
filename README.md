# Twitter-Happiness

This is a demo I've hacked together for my presentation in a seminar about the social psychology
of happiness. The script implements the algorithm used by 

 Mitchell, L., Frank, M. R., Harris, K. D., Dodds, P. S.,
 & Danforth, C. M. (2013). The Geography of Happiness:
 Connecting Twitter Sentiment and Expression, Demographics,
 and Objective Characteristics of Place. PloS ONE, 8(5), e64417.

to quantify the happiness of geotagged tweets.

Rather then analysing tweets retrospectively, I stream tweets in realtime and
compute their happiness index on the fly (it's a pretty straightforward algorithm, so no problems their).
It analyzes tweets around New York City be default, but can be changed if you provide the necessary
arguments, more info <a href="https://dev.twitter.com/docs/streaming-apis/parameters" target="_blank">here</a>.

```
node index.js # analyzes tweets in nyc
node index.js -122.75,36.8,-121.75,37.8 # analyzes tweets in san francisco
```

## Happiness Ratings

In the data folder is a file called ratings.txt. It contains roughly 10.000 words that
have been rated (1-9) by people on Amazon MTurk. It's from

Dodds PS, Harris KD, Kloumann IM, Bliss CA, Danforth CM (2011)
Temporal patterns of happiness and information in a global social network:
Hedonometrics and Twitter. PLoS ONE 6: e26752.

In the graph folder, graph.R plots the frequency distribution of those words.

transform.R and tojson.js transform the original ratings.txt to subset.json in the script/data folder,
which is the format that can be used by the node script.

## License

The MIT License (MIT)

Copyright (c) 2014 Fabian Dablander

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
