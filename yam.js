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
var nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }
  for (let key in nestedData.innerData.numberData.primeNumbers){
      console.log(nestedData.innerData.numberData.primeNumbers[key])
  }








