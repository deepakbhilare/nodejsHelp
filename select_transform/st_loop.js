var ST = require('stjs');

var template = {
    "orders": {
        "{{#each customers}}": {
            "order": "One {{menu}} for {{name}}!"
        }
    }
}

var data = {
    "customers": [{
        "name": "Hatter",
        "menu": "miso ramen"
    }, {
        "name": "March Hare",
        "menu": "tonkotsu ramen"
    }, {
        "name": "Dormouse",
        "menu": "miso ramen"
    }, {
        "name": "Alice",
        "menu": "cup noodles"
    }]
}

var sel = ST.select(template)
    .transform(data)
    .root();

console.log(sel);