var jp = require('JSONPath');
var js = require('jsonata');

var a = {
    "val": {
        "links": [
            {
                "remote_url": "http://localhost"
            },
            {
                "file_url": "file://documents"
            },
            {
                "remote_url": "https://blahblah.com"
            }
        ],
        "preview": "https://image",
        "metadata": "This is a link collection"
    }
}

var ex = js("val.links[0].remote_url");

console.log(ex);

var pos = "val.links[0].remote_url";


var obj = JSON.stringify(a);
var str = JSON.parse(obj);

a.val.links[0].remote_url = "REMOTE";

//console.log(a.val.links[0].remote_url);

//console.log(JSON.stringify(a));

