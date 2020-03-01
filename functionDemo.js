/* function demo */
function sayHi(){
    console.log('Hey there!');
}

sayHi();

function tellMeHowToSayHi(sayHifunc){
    sayHifunc();
}

tellMeHowToSayHi(sayHi);

var sayHiToMe = function(){
    console.log('Hi to you!');
}

sayHiToMe();

tellMeHowToSayHi(sayHiToMe);

tellMeHowToSayHi(function(){
    console.log('Say hi again!')
});