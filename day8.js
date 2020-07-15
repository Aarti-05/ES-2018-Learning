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
const z1= multiply.bind(null,32,6);
console.log(z1()); ///function invocation using bind which returns a function //////

//****************functions are objects***********************/
const person={
    name:"jia",
    age:25
}
function displayName()
{
    return this.name;
}
const name =displayName.call(person,null);
console.log(name);
/**********************higher order functions************************ */
const arr=[11,22,1,2,7,8,88]/////[11,22,1,2,7,8,88]
const sorting=(n,m)=>{
    console.log(m,n)
    console.log(m-n);
    return n-m;
    
}

console.log(arr.sort(sorting))
console.log([11,1,2,22].sort())