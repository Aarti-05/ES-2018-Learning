// ***************understanding the callback function
// function add(a, b) {
//     setTimeout(() => {
//         console.log(a + b);///******setTimeout function never returns */
//     }, 5000);

// }
// function sub(a, b) {
//     return (a - b);
// }
// (add(10, 5));
// console.log(sub(10, 5));
//************************************promises */
// function func1() {
//     return new Promise(function(resolve,reject){

//    console.log("enter promise")
//     setTimeout(() => {
//         let error = true;
//         console.log("entering true")
//         if (!error){
//             console.log("promise resolved");
//         resolve();
//     console.log("value returned")}
//         else {
//             console.log(" inside the else")
//             console.log("promise rejected");
//             reject();
//             console.log ("rejecte return")
//         }
//     }, 5000);
// });
// }
// console.log("calling function");
// func1().then(function()  {
//     console.log("thanks for resolving");
// }).catch(function(){
//     console.log("sorry for rejecting")
// })
// console.log("last line of the code");
///************* fetch API***************** */
// function getData(){
//     url="https://api.github.com/users"
//     fetch(url).then((response)=>{
//       return response.json();
//     }).then((data)=>{
//         console.log(data)
//     })
// }
// function getData(){
//     url="hello.js"
//     fetch(url).then((response)=>{
//       return response.text();
//     }).then((data)=>{
//         console.log(data)
//     })
// }
// getData();
///*************post data******************* */
// function postData(){
//     url="http://dummy.restapiexample.com/api/v1/create";
//     data=	{"name":"Riya","salary":"123","age":"23"};
//     para={
//         method:"post",
//         header:{
//             "content-type":"application/json"
//         },
//         body:data
//     }
//     fetch(url,para).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data)
//     })
// }
// postData();
//////****************async/await********************** */////////////
async function getData(){
    const x=await fetch("https://api.github.com/users");
    const y=await x.json();
    return y;
}
getData().then((data)=>{
    console.log(data);
});
