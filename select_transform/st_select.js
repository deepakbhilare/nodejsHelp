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
    return /https?:/.test(val);
})

var selected_values = selection.values();
//console.log(selected_values);
console.log(selected_values);