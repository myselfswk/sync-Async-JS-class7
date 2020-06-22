//Example of callback by Sir Aamir Pinger
function printGreeting(msg, alertGreet) {
    if (msg === 'morning') {
        morning(alertGreet);
    }
    else if (msg === 'evening') {
        evening(alertGreet);
    }
    else if (msg === 'night') {
        night(alertGreet);
    }
    else {
        alert('unKnown Input');
    }
}
function morning(alertGreet) {
    alert("Good Morning");
    alertGreet("Hello World");
}
function evening(alertGreet) {
    alert("Good Evening");
    alertGreet("Hello World");
}
function night(alertGreet) {
    alert("Good Night");
    alertGreet("Hello World");
}
function alertGreet(msg) {
    alert(msg);
}
printGreeting("morning", alertGreet);

function success() {
    console.log("Success");
}
function failure() {
    console.log("Failure");
}

function chkUserPromise(userInput) {
    new Promise(function(resolve, reject) {
        if (userInput) {
            resolve();
        }
        else {
            reject();
        }
    })
}
chkUserPromise(true);

const mathFunc = () => {
    return (((Math.floor(Math.random() *10)) %2) === 0) ? true : false;
}
const resolveFunc = () => console.log("success");
const rejectFunc = () => console.log("Failure");

const result = new Promise((resolve, reject) => {
    setTimeout(() => (mathFunc() ? resolve() : reject()), 2000)
})

result.then(resolveFunc).catch(rejectFunc);
console.log("Hello World");