const config = require('config');
//...
const dbConfig = config.get('default.json');

if(config.has('Customer.dbConfig.port'))
{
    //const detail = config.get('optionalFeature.detail');

    console.log("hahaha");
}