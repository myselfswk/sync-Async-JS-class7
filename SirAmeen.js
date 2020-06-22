/* let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("New Promise");
        resolve();
    }, 1000)
})
//we can also use tree then(), like multiple then() or say nested then()
promise.then( function() {
    console.log("Promise Resolve");
    return 2;
})
.then(function(val) {
    console.log(val);
})
//the return of first then() will become the input/attribute of second than and so on
.catch( function(error) {  //if we don't revieve an API
    console.log(error)
})
*/

console.log("Start Program");

function callBackEvOne() {
    setTimeout(function(){
        console.log("Call Back Event One");
    }, 3000)
}
function callBackEvTwo() {
    setTimeout(function(){
        console.log("Call Back Event Two");
    }, 2000)
}
function callBackEvThree() {
    setTimeout(function(){
        console.log("Call Back Event Three");
    }, 1000)
}

function funcOne() {
    callBackEvOne();
    console.log("This is Function One With CallBack One");
}
funcOne();
function funcTwo() {
    callBackEvTwo();
    console.log("This is Function Two With CallBack Two");
}
funcTwo();
function funcThree() {
    callBackEvThree();
    console.log("This is Function Three With CallBack Three");
}
funcThree();

console.log("End Program");