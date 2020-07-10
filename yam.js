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

// let timerId=setInterval(function(){
//   console.log("hello");
// },1000)

// setTimeout(function(){
// clearTimeout(timerId);
// },3000)
//Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.//
// const countDown=(a)=>{

//   let timerId=setInterval(()=>{
//     console.log(a);
//           a--;
//           if(a===0){
//             setTimeout(()=>{
//               clearInterval(timerId);
//             },1000) 
//           }


//   },1000);


// }
// countDown(10);
//Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.
// const randomGame=()=>{
//   let counter=0;
//  let timerId =setInterval(() => {
//     let x=Math.random();
//     console.log(x);
//     counter++;
//     console.log(counter)
//     if(x>.75){
//       setTimeout(() => {
//       clearInterval(timerId);  
//       }, 0);
//     }
//   }, 1000);
// }
// randomGame();
//Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not
// const isEven = (x) => {
//   //let timerId = setInterval(()=>{
//     //let x =parseInt(Math.random()) ;
         
//     if (x % 2 === 0) {
//       //console.log(x)
//       return true;
//     }
//     else {
//       return false;
//     }

//   //}, 1000);
// }
// console.log(isEven(13));
// let animal={
//   introduce:function(){
//     return this.name+ " is a "+this.type+ " and sound is "+ this.sound;
//   }
// };
// let dog={
//   name:"whiskey",
//   type:"dog",
//   sound:"wooh"
// };
// let cat={
//   name:"moxie",
//   type:"cat",
//   sound:"meaw"
// };
// console.log(animal.introduce.call(dog));
// console.log(animal.introduce.call(cat));
// function Vehicle(make,model,year){
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// function Motorcycle(make,model,year,motorcycleType){
//   Vehicle.call(this,make,model,year)
//   this.motorcycleType = motorcycleType;
// }
//  rest operator///
// function fun(a,b,...c){
// console.log(a);
// console.log(b);
// console.log(c);
// }
// fun(1,2,3,4,5,6,7,8,9,0);
// function sum(x, y, z) {
//   return z;
// }

// const numbers = [1, 2, 3];

// console.log(sum(...numbers));
// var match1 = "cookiessssssssss".match(/cookies+/) // ["cookiessssssssss"]
// var match2 = "cookies".match(/cookies+/) // ['cookies']
// var match3 = "cookie".match(/cookies+/) // null
// console.log(match1);
// let reg=new RegExp(/[0-9]/g);
// let x="123459";
// let count=0;
// for (let i=0;i<x.length;x++)
// {
//   let result=reg.test(x);
//   if(result){
//     count++;

//   }
  
// }
// console.log(count)
// let a=20;
// let b=13;
// let diff;
// if (a>b){
//   console.log((a-b)*(a-b));
// }
// const sum=(a,b)=>{
// if(a===b){
//   return (a+b)*3;
// }
// else{
//   return a+b;
// }
// }
// console.log(sum(13,13));
// console.log(sum(12,15));
// function num(a,b){
//   if(a===50||b===50||(a+b)===50){
//     return true;
//   }
// }
// console.log(num(12,38))
// let library = [ 
//   {
//       author: 'Bill Gates',
//       title: 'The Road Ahead',
//       readingStatus: true
//   },
//   {
//       author: 'Steve Jobs',
//       title: 'Walter Isaacson',
//       readingStatus: true
//   },
//   {
//       author: 'Suzanne Collins',
//       title:  'Mockingjay: The Final Book of The Hunger Games', 
//       readingStatus: false
//   }];
//   for (let key of library){
   
    
//       if(key["readingStatus"]){
//         console.log(`you have alraedy finished ${key["title"]} by ${key["author"]}`)
//       }
//       else{
//         console.log(`You still need to read ${key["title"]} by ${key["author"]}`)
//       }
   
// const volume=(radius,height)=>{
//   let v= Math.PI*(radius*radius*height);
//   return v.toFixed(3);
// }
//   console.log(volume(5,10));
// let arr=[6,4,3,-2,0,1];
// console.log(arr.sort());

//hour>=12? hour-12:hour;
// const updateClock=()=>{
//   setInterval(()=>{
//     let today=new Date();
//     let hour=today.getHours();
//     hour=(hour>12)?hour-12:hour;
//     let min=today.getMinutes();
//     min=(min<10)?"0"+min:min
//     let sec=today.getSeconds()
//     sec=(sec<10)?"0"+sec:sec
//      console.log(hour+":"+min+":"+sec) ;
//   },1000);
// }
// (updateClock());
let str="real";
let arr=[];
for (let i=0; i<str.length;i++){
  for (let j=1+i;j<str.length+1;j++){
     let str2=(str.slice(i,j));
   arr.push(str2);
    
  }
  
}
console.log(arr);

//console.log(key)

