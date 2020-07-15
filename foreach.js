const getStockSymbol=(arr)=>{
    //let stocks=[];
// arr.forEach((value,key)=>{
// stocks.push(value.price);
//})
// return arr.map((value)=>{
//         return value.symbols;

// })
// arr.forEach((value)=>{
//     if (value.price>=200)
//     stocks.push(value.price)
// })

// return stocks;
// return arr.filter((value)=>{
//     return value.price>200;
// })

//return stock;
}
// 
   
// //     console.log(getStockSymbol(arr));
// // //let stock;
// // let stock=arr.filter((value)=>{
// //     return value.price>200;
// // }).map((value)=>{
// //     return value.symbols;
// // });
// // stock.forEach((value)=>{

// //     console.log(stock)
// // })
// let arr=[
//          [
//            {symbols:"zxc",price:240.89,volume:253698},
//             {symbols:"zxc",price:240.89,volume:253698}
//         ],
//            [
//             {symbols:"abc",price:200.09,volume:2698},
//             {symbols:"mnp",price:140.89,volume:253 }
//             ]
//     ];
// Array.prototype.concatAll=function(){
//  let results=[];
//     this.forEach((subArray)=>{
//         subArray.forEach((item)=>{
//         results.push(item);
//     });
//     });
//     return results;
// };
// let stocks=arr.concatAll();
// stocks.forEach((value)=>{
//     console.log(value);
// })
// var exchanges = [
//     [
//         { symbol: "XFX", price: 240.22, volume: 23432 },
//         { symbol: "TNZ", price: 332.19, volume: 234 }
//       ],
//     [
//         { symbol: "JXJ", price: 120.22, volume: 5323 },
//         { symbol: "NYN", price: 88.47, volume: 98275 }
//       ]
//   ];
  
  
//   Array.prototype.concatAll = function() {
//     var results = [];
    
//     this.forEach(function(subArray) {
//       subArray.forEach(function(item) {
//         results.push(item);    
//       });
//     });  
  
//     return results;
//   };
  
  
//   var stocks =  exchanges.concatAll();
      
//   stocks.forEach(function(stock) {       
//     console.log(JSON.stringify(stock));  
//     // display in plunker preview
//     //displayInPreview(JSON.stringify(stock))
//   });
let people = [
    {
      name: 'Joe Schmoe',
      yearsExperience: 1,
      department: 'IT'
    },
    {
      name: 'Sally Sallerson',
      yearsExperience: 15,
      department: 'Engineering'
    },
    {
      name: 'Bill Billson',
      yearsExperience: 5,
      department: 'Engineering'
    },
    {
      name: 'Jane Janet',
      yearsExperience: 11,
      department: 'Management'
    },
    {
      name: 'Bob Hope',
      yearsExperience: 9,
      department: 'IT'
    }
  ];
//   let allDepartments=()=>{

//       return people.map((value)=>{
//      return value.department;
//     })
// }
// console.log(allDepartments());
//   let experienced=people.filter((value)=>{
        
//             return value.yearsExperience;
        
//   }).map((value)=>{
//       return value.yearsExperience;
//   }).reduce((sum,current)=>{
//       return sum+current;
//   })
//   console.log(experienced)
// let allDepartments=people.reduce((acc,vals)=>{
//  let department=vals.department;   
//     //console.log(acc);
//     if(!acc[department]){
//         acc[department]=0;
//     }
//     acc[department]+=vals.yearsExperience;
//     return acc;
//  },{})
//  console.log(allDepartments);
//let allDepartments=people.reduce((acc,vals)=>{
 //let department=vals.department; 
//  let employee=[];
//  if(!acc[department]){
//      acc[department]=0;
//  }
//  acc[department]+=employee.push(vals.name);
//  return acc;
 
// },{})
// console.log(allDepartments)
// function classifyExperience(employee) {
//     let years = employee.yearsExperience;
  
//     if (years <= 1)  return 'NEWBIE';
//     if (years <= 5)  return 'AMATEUR';
//     if (years <= 10) return 'PRO';
  
//     return 'EXPERT';
//   }
//   let groupedByExperience = people.reduce((accumulator, current) => {
//     let xpClass = classifyExperience(current);
//     if (!accumulator[xpClass]) 
//       accumulator[xpClass] = [];
//     accumulator[xpClass].push(current.name)
//     return accumulator;
//   }, {});
// console.log("Group employees by experience", groupedByExperience);

// let animals=[
//     {name: "cat",legs:4},
//     {name: "horse",legs:4},
//     {name: "human",legs:2}
// ]
// let twolegged=animals.filter(value=> value.legs==2)
//    .map(value=>value.name)

// console.log(twolegged);
// let set =new Set([[1,2,3,4],"this"]);

// //console.log(set);
// // console.log(set.has("this"))
// // console.log(set.size);
// for(let value of set){
//    // console.log(value);
// }
// set.forEach((value,key)=>{
//     console.log(value)
// })
// let arr=Array.from(set);
// console.log(arr[1]);
// const withCount=fn=>{
//     console.log("third")

//     let count=0;
//     console.log("returning")
// return (...args)=>{
//     console.log(args)
//     console.log("fourth")
//     //console.log(args,count++);
//     return fn(...args)
// }
// }


// const z=withCount((x,y)=>
// {
//     console.log("finally here"+ (x+y))
//    });
// console.log("second")
// console.log("first")
class  ImmutableGlass {
    constructor(content, amount) {
      this.content = content
      this.amount = amount 
      console.log(this.amount)
    }
  
    takeDrink(value) {
      //this.amount = Math.max(this.amount - value, 0)
      console.log(this.amount)
      return new ImmutableGlass(this.content="wine", Math.max(this.amount - value, 0))
    }
  }
  
//   const mg1 = new MutableGlass('water', 100)
//  // const mg1 = new MutableGlass('water', 100)
// const mg2 = mg1.takeDrink(20)
// console.log(mg1 === mg2)
// console.log(mg1.amount === mg2.amount)
// const ig1 = new ImmutableGlass('water', 100)
// const ig2 = ig1.takeDrink(20)
// console.log(ig1.amount)
// console.log(ig2.amount)
// console.log(ig2.content)
// console.log(ig1.content)
// console.log(ig1 === ig2)
// console.log(ig1.amount === ig2.amount)
// const scream = str => str.toUpperCase()
// const exclaim = str => `${str}!`
// const repeat = str => `${str} ${str}`

// const compose = (...fns) => x => 

//   fns.reduceRight((acc, fn) =>fn(acc),x)
   
//   const withExuberance = compose(
//     repeat, 
//     exclaim, 
//     scream
//   )
//   console.log(withExuberance('I love egghead'))
const {
    compose,
    map,
    split,
    join,
    lowerCase
  } = require('./shared')
const bookTitles = [
    'The Culture Code',
    'Designing Your Life', 
    'Algorithms to Live By'
  ]
  
  const trace = msg => x => (console.log(msg, x), x)
  
  const slugify = compose(
    join('-'),
    map(lowerCase),
    map(split(' ')),
    trace('before split')
  )
 
  const slugs = slugify(bookTitles)
  
  console.log(slugs)
