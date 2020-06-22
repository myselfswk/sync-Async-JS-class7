function apiFetch() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("New Promise");
            resolve("data");
            //if i call reject() here, than the output will be failure after this statement
        }, 1000)
    })
    return promise;
}

/* promise.then(function() {
    console.log("Success");
})
.catch(function() {
    console.log("Failure");
})
 */

async function _asyncJS() {
    try {
        let data = await apiFetch();
        console.log(data, "Successfully Run");
    }
    catch(error) {
        console.log(error, "Error");
    }
}
_asyncJS();