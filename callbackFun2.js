function mainFunction(callback){
    var someData = 'here is some data';

    callback(someData);
}

mainFunction(function(a){
    console.log(a);
});

mainFunction(function(b){
    console.log(b);
});