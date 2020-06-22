/* --------------Sync Approach--------------- */
//Sync runs sequentially

console.log("Start Group");  //JS engine run this file in 0.0005 seconds
let data = "Content";   //JS engine run this file in 0.0005 seconds
//we can delay in our program by
setTimeout(function() {
    console.log(data);
}, 1000)  //time is one sec

console.log("End Group");

//example of Sync.....
console.log("start Group");

function breakFast() {
    setTimeout(function() {
        console.log("Breakfast Complete");
    }, 100)
}

function morning() {
    console.log("Starting BreakFast");
    breakFast();
}
morning()

console.log("End Group");