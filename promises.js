/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */
function num1() {
    return 1;
}
async function num2() {
    return 2;
}
num2().then(result => console.log(result))
console.log('num1', num1());
console.log('num2', num2());
// Your code here



/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */
async function waiting () {
    const value = await num2();
    console.log('waiting', value)
}
waiting();
// Your code here



/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */
async function waitForMyPromise() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!!!');
        }, 1000)
    })
    const result = await promise;
    console.log('my promise is', result);
};
waitForMyPromise();
// Your code here



/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */
new Promise((resolve) => {
    setTimeout(() => {
        resolve('done!');
    }, 1500)
}).then(r => console.log('then my other promise is', r))
// Your code here



/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here



/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here



/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here



/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
