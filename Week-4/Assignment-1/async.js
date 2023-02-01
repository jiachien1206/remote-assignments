// A. Callback
function delayedResult(n1, n2, delayTime, callback) {
    setTimeout(() => callback(n1+n2), delayTime);
}
delayedResult(4, 5, 3000, function (result) {
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
    console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds

// B. Promise
function delayedResultPromise(n1, n2, delayTime) {
    const result = new Promise((resolve, reject) => {
        setTimeout(() => resolve(n1+n2), delayTime);
    })
    return result;
}

delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds

// C. Async/Await
async function main(n1, n2, delayTime) {
    const result = await delayedResultPromise(n1, n2, delayTime);
    console.log(result);
}
main(3, 5, 7000); // result will be shown in the console after <delayTime> seconds