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
const sorting=(m,n)=>{
    console.log(m,n)
    console.log(m-n);
    return n-m;
    
}

console.log(arr.sort(sorting))
console.log([11,1,2,22].sort())

/***********************filter in functional programming********************************8 */
const people=[
{    name:"John",age: 25  },    
{    name:"Mark",age: 45 }    ,
{    name:"Thomas",age: 65  },    
{    name:"Mosh",age: 90  }   , 
{    name:"Ria",age: 52 }    ,
{    name:"Jonny",age: 95  }    
    
]
const filter=people.filter((value)=>{
    return value.age>55
})
console.log(filter)

/************************** mapping in functional programming********************************8 */

    const mapped=people.map(value=>value.name)
    console.log(mapped);
let array=[25,56,23,29];
console.log(array.map(value=>value+1))

/****************adding numbers from obects************************************8 */
let entities=[   
     {number:10},
    {number:30},
    {number:40}
]

let total=entities.reduce((acc,current)=>{
   
const num=current.number;
return acc+num;    
},0)
console.log(total)

/************************************merging  arrays*****************************************8 */
const arr1=[[3,5],[8,9],[2,6]]
const arr2=arr1.reduce((acc,current)=>{
     return acc.concat(current)
     },[])
console.log(arr2)

//***********************longest array********************************** */
const arr3=[
    [1,2,3],
    [2,5,8,9,6,1],
    [2,3,5,6,7,,1,2,6,8,8,9,77,45]

]
const longest=arr3.reduce((acc,current)=>{
    return acc.length>current.length?acc:current
})
console.log(longest)