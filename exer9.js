// const celcius = (a,b)=>{

// let c= (a*5/9)+32;
// console.log(c);
// let f=(b-32)*5/9;
// console.log(f)

// }
//     celcius(35,32);
// const sum=(a,b)=>{
//     return (a+b);}
// console.log(sum(5,5));
    // function sum (name){
    //     setTimeout(function(){
    //         console.log("hello" + name)
    //     },5000);
    // }
    // function add(){
    //     setTimeout(function(){
    //         console.log("i am the best");
    //     })
    // }
    // sum("aarti");
    // add();
//     function sum(a,b,callback){
//         setTimeout(function(){
//             console.log(a+b);
//             // let add = (a+b);
//             // return add;
//             callback(1,3);
//         },5000);
        
//     }
// function mul(c,d){
//     setTimeout(function(){
//         console.log(c*d);
//     },1000);
// }
// sum(5,2,mul);
//mul(1,3);
// function fun(){
//     return new Promise(function(resolve,reject){
// setTimeout(function(){
// let error=;
// if(!error){
//     console.log("resolved");
//     resolve();}
//     else{
//         console.log("rejected");
//         reject();
//     }
// },5000);
//     })
// }
// fun().then(function(){
//     console.log("you are great");
// }).catch(function(){
//     console.log("very bad")
// })
// function getData(){
//     //const fetch =require("node-fetch");
//     url="test.txt";
//     fetch(url).then((response)=>{
//         return response.text();
//     }).then((data)=>{
//         console.log(data);
//     });
// }
// getData();
function postData(){
    url="http://dummy.restapiexample.com/api/v1/create";
    data={"name":"jiya","salary":"123","age":"23"}
    para={
        method:"post",
        headers:{
            "content-type":'application/json'
    },
    body:data}
    fetch(url,para).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}
postData();
// async function harry(){
//     console.log(" 1 .Inside the function");
//     const response=await fetch(`https://api.github.com/users`);
//     console.log(" 2 .before response");
//     const users=await response.json();
//     console.log(" 3 .users resolved");
// return users;
// }
// console.log("before calling the function")
// let a= harry();
// console.log("after calling the function")
// console.log(a);
// a.then((data)=>console.log(data));
// console.log("last line of code")