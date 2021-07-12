const rp = require('request-promise');

rp('https://www.reddit.com/r/popular.json')
    .then(function (json) {
            return JSON.parse(json);
    })
    .then(function(data){
        console.log(data.data.children);
    })
    .catch(function(err){
        console.log(err);
    });
