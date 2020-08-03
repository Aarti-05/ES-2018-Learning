// function postData(){
//         url="http://dummy.restapiexample.com/api/v1/create";
//         data=	'{"name":"Rey","salary":"123","age":"23"}';
//         para={
//             method:"post",
//             header:{
//                 "content-type":"application/json"
//             },
//             body:data
//         }
//         fetch(url,para).then((response)=>{
//             return response.json();
//         }).then((data)=>{
//             console.log(data)
//         })
//     }
//     postData();
//     /***********getdata********* */
    
// function getData(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data)
//     })
// }
// getData();
// /**************async/await************* */
// async function fetchData(){
//     const response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const user=await response.json();
//     //console.log(user);
//     return user;
// }
// fetchData().then((data)=>{
//     console.log(data);
// })
/***************callback************** */
function greeting(name){
    console.log("then here")
    console.log('good morning' + name)
}
function process(callback){
    let name="aarti"
    console.log("first here")
    callback(name);
}
process(greeting);