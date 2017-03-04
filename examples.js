'use strict';

var googleTrends = require('./lib/google-trends-api.js');
var util = require('util');

// For rate limit testing add more to this list
var keywords = ['toast' , 'strawberry', 'Valentine\'s Day', 'barack obama'];

/******************** Interest over time **************************/
var G = new googleTrends;
G.login({ email:'yourUsername', password: 'yourPassword' })

    .then(function(){
        for ( let i = 0; i < keywords.length; ++i ) {
            G.interestOverTime({keyword: keywords[i]})
            .then((res) => {
                console.log("SUCCESS - " + keywords[i] + `(${res.length})`);
              // console.log('this is res', res);
            })
            .catch((err) => {
              console.log('got the error', err);
          });
      }
});
// googleTrends.interestOverTime({keyword: 'Valentines Day', startTime: new Date(Date.now() - (4 * 60 * 60 * 1000))}, function(err, results) {
//   if (err) console.log('oh no error!', err);
//   else console.log(results);
// });


/******************** Interest by region **************************/


// googleTrends.interestByRegion({keyword: 'Donald Trump', startTime: new Date('2017-02-01'), endTime: new Date('2017-02-06'), resolution: 'CITY'})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// })

// googleTrends.interestByRegion({keyword: 'Donald Trump', startTime: new Date('2017-02-01'), endTime: new Date('2017-02-06'), geo: 'US-CA'})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// })


/******************** Related queries **************************/

// googleTrends.relatedQueries({keyword: 'Westminster Dog Show'})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// })

/******************** Related topics **************************/

// googleTrends.relatedTopics({keyword: 'Chipotle', startTime: new Date('2015-01-01'), endTime: new Date('2017-02-10')})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });
