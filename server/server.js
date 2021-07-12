const path = require('path');
const fs = require('fs');
const request = require('request');

let chirps = [{text: "Chirp 1"}, {text: "Chirp 2"}, {text: "Chirp 3"}, {text: "Chirp 4"}, {text: "Chirp 5"}];
   

console.log(chirps);

let dataPath = path.join(_dirname, '../data.json');

request('https://reddit.com/r/popular.json', (err, res, body) => {

    if(err) console.log(err);

    JSON.parse(body).data.children.forEach(item => {
        fs.appendFileSynch(dataPath,item.data.title + '\n');
    });

    fs.writeFile(dataPath, res.body, err => {
        if(err) console.log(err);
    });

});