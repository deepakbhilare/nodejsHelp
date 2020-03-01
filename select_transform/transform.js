var ST = require('stjs');

var data = {
    "title": "List of websites",
    "description": "This is a list of popular websites",
    "data": {
        "sites": [{
            "name": "Google",
            "url": "https://google.com"
        }, {
            "name": "Facebook",
            "url": "https://facebook.com"
        }, {
            "name": "Twitter",
            "url": "https://twitter.com"
        }, {
            "name": "Github",
            "url": "https://github.com"
        }]
    }
}

var sel = ST.select(data, function (key, val) {
    return key === 'sites';
})
    .transformWith({
        "items": {
            "{{#each sites}}": {
                "tag": "<a href='{{url}}'>{{name}}</a>"
            }
        }
    })

//var sel = JSON.select(data).transformWith(data).root();
var sel = ST.select(data, function (key, val) {
    return key === 'sites';
})
    .transformWith({
        "items": {
            "{{#each sites}}": {
                "tag": "<a href='{{url}}'>{{name}}</a>"
            }
        }
    })

var keys = sel.keys();
console.log(keys);
console.log('-------------------------------');
var values = sel.values();
console.log(values)
console.log('-------------------------------');
var objects = sel.objects();
console.log(objects)
console.log('-------------------------------');
var root = sel.root();
console.log(root)
console.log('-------------------------------');

console.log(sel);