const conf = require('rc')('myapp', {
    port: 12345,
    mode: 'test'
});

console.log(JSON.stringify(conf, null, 2));

try{
    throw new Error('This is an error');
}
catch(err)
{
    console.log(err);
}