var fs = require('fs');

var data = fs.readFileSync(__dirname + '/data.txt', 'utf8');

console.log(data);

var data2 = fs.readFile(__dirname + '/data.txt', 'utf8', 
function(err, data){
    console.log(data);
});