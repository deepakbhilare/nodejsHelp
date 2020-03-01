var ST = require('stjs');

var data = {
    links: [
        { "remote_url": "http://localhost" },
        { "file_url": "file://documents" },
        { "remote_url": "https://blahblah.com" }
    ],
    preview: "https://image",
    metadata: "This is a link collection"
};

var selection = ST.select(data, function (key, val) {
    return /https:/.test(val);
})

var selected_values = selection.values();
//console.log(selected_values);
console.log(selected_values);

var selected_keys = selection.keys();
console.log(selected_keys);

console.log('--------------------------');
var selected_objects = selection.objects();
console.log(selected_objects);

var selected_paths = selection.paths();
console.log(selected_paths);