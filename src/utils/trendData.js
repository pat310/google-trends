'use strict';

var rp = require('request-promise');
var createObj = require(__dirname + '/../resources/callbacks.js');
var checkErrors = require(__dirname + '/../resources/errorHandling.js');
var parseJSON = require(__dirname + '/../resources/htmlParser.js').parseJSON;

module.exports = function request(keywords, cbFunc){
	var obj = createObj(arguments, request);

	var error = checkErrors(obj);
	if(error instanceof Error) return Promise.reject(obj.cbFunc(error));

	return Promise.all(promiseArr(obj.keywords))
	.then(function(results){
		return obj.cbFunc(null, results);
	})
	.catch(function(err){
		return Promise.reject(obj.cbFunc(err));
	});
};

function promiseArr(keywords){
	return keywords.map(function(keyword){
		return rp(`http://www.google.com/trends/fetchComponent?q="${keyword}"&cid=TIMESERIES_GRAPH_0&export=3`)
		.then(function(htmlString){
		   return htmlString;	
         // return parseJSON(htmlString);
		});
	});
}
