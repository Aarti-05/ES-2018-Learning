//// functions/////
function add(x,y){
    return x+y;
}
const a= add(2,5)   /////invoking function add by passing parameters /////
console.log(a)   //////printing the result of function add////

///******** function invocation usin call,apply and bind******* */
function multiply(x,y){
    return x*y;
}
const z=multiply.call(null,45,2,3);///function invocation using call method//////
console.log(z)