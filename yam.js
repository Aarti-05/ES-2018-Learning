// let arr=[
//  obj1={
//     title:"jab we met",
//     star:5,
//     watched:true
// },
// obj2={
//     title:"dhoom",
//     star:3,
//     watched:false
// },
// obj3={
//     title:"3idiots",
//     star:5,
//     watched:true
// }]
// arr.forEach((value)=>{
//     if(value.watched){
//         console.log("youhave watched")
//     }
// else{

//     console.log("not yet watched"+value);
// }
// })
// var instructorData = {
//     name: "Tim",
//     favoriteHobbies: ["Sailing", "Hiking", "Coding"]
// };

//     instructorData.favoriteHobbies.push("singing")
//     console.log(instructorData["favoriteHobbies"])


//console.log(instructorData.favoriteHobbies[0])
// var instructorData = {
//     name: "Elie",
//     additionalData: {
//         instructor: true,
//         favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
//         moreDetails: {
//             favoriteBasketballTeam: "New York Knicks",
//             numberOfSiblings: 3,
//             isYoungest: true,
//             hometown: {
//                 city: "West Orange",
//                 state: "NJ",
//             },
//             citiesLivedIn: ["Seattle", "Providence", "New York"]
//         }
//     }
// };
// function displayCities(){
//     //for (let key in instructorData.additionalData.moreDetails){
//         console.log(instructorData.additionalData.moreDetails["citiesLivedIn"]);
//     }

// displayCities();
// const homeTown=()=>{
//     //for(let key in instructorData.additionalData.moreDetails.hometown){
//       let cities=(instructorData.additionalData.moreDetails.hometown);
//       for (let key in cities){
//           console.log(cities[key])
//       }
//     }

// homeTown();
// const addDetails = (key,value)=>{
//    instructorData[key]=value;
// }
// addDetails("isHillarious",true);
// console.log(instructorData);
// var nestedData = {
//     innerData: {
//       order: ["first", "second", "third"],
//       snacks: ["chips", "fruit", "crackers"],
//       numberData: {
//           primeNumbers: [2,3,5,7,11],
//           fibonnaci: [1,1,2,3,5,8,13]
//       },
//       addSnack: function(snack){
//           this.snacks.push(snack);
//           return this;
//       }
//     }
//   }
//   for (let key in nestedData.innerData.numberData.primeNumbers){
//       console.log(nestedData.innerData.numberData.primeNumbers[key])
//   }
//   for (let key in nestedData.innerData.numberData.fibonnaci){
//     console.log(nestedData.innerData.numberData.fibonnaci[key])
// }
// console.log(nestedData.innerData.order[1]);
// console.log(nestedData.innerData.addSnack("chocalate"));
// console.log(nestedData.innerData.snacks);
// var nestedObject = {
//     speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
//     data: {
//       continents: {
//         europe: {
//           countries: {
//             switzerland: {
//               capital: "Bern",
//               population: 8000000
//             }
//           }
//         }
//       },
//       languages: {
//         spanish: {
//             hello: "Hola"
//         },
//         french: {
//             hello: "Bonjour"
//         }
//       }
//     }
//   }
//   const addSpeaker=(key,value)=>{
//     //key:value;
//       nestedObject.speakers.push({key:value});

//   }
//   addSpeaker(name,"RIAZ");
//  console.log(nestedObject.speakers) 
// let myFirstSubarray = [["this", "is"], ["super", "cool"]];
// console.log(myFirstSubarray.length,myFirstSubarray[1])


// // myFirstSubarray.forEach((value,key)=>{
// //     console.log(value[0][1]);
// // })
// let nestedArr = [[1, 2], [3, 4]];
// for (let i = 0; i < nestedArr.length; i++) {
//   for (let j = 0; j < nestedArr[i].length; j++) {
//     // notice that we are going inside the outer array
//     // and now inside of the inner array
//     console.log(nestedArr[i][j]);
//   }
// }

// let nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];
// const printEven=()=>{
//     for(let i=0;i<nestedArr.length;i++){
//         //console.log(nestedArr.length)
//         for (let j=0;j<nestedArr[i].length;j++){
//             //console.log(nestedArr[i].length)
//             if(nestedArr[i][j]%2===0){
//                 console.log(nestedArr[i][j]);
//             }
//         }
//     }
// }
// printEven();
let nestedArr = [[1, 2], [3, 4], [5, 6]];
//let nestedArr = [1, 2, 3, 4, 5, 6];
// const sum=()=>{
//     let add=0;
//     for(let i=0;i<nestedArr.length;i++){
//                 //console.log(nestedArr.length)
//                 for (let j=0;j<nestedArr[i].length;j++){
//                     //console.log(nestedArr[i].length)
//                  add+=nestedArr[i][j];
                 

//                 }
//                 }
//                 console.log(add);
// }
// sum();
// const rotate=(arr,num)=>{
//     var amount = num % arr.length;
//     for (let i=0;i<amount;i++){
//         arr=arr.unshift((arr.pop()));
        
        
//     }
    
//     console.log(arr);


// rotate([1,2,3],);
// function rotate(arr, num){
//     var amount = num % arr.length;
//     for(var i=0; i< amount; i++){
//       arr.unshift(arr.pop());
//     }
//     return arr;
// }
// rotate([1,2,3,4],2)
// function each (arr,callback){
//     for (let i=0;i<arr.length;i++){
//          x=arr[i];
//        callback(x);
//     }
    
// }

// let x;
// function mul (){
//     console.log(x*2) ;}
//     (each([1,2,3,4],mul));

let timerId=setInterval(function(){
  console.log("hello");
},1000)

setTimeout(function(){
clearTimeout(timerId);
},3000)