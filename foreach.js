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
let arr=[
         [
           {symbols:"zxc",price:240.89,volume:253698},
            {symbols:"zxc",price:240.89,volume:253698}
        ],
           [
            {symbols:"abc",price:200.09,volume:2698},
            {symbols:"mnp",price:140.89,volume:253 }
            ]
    ];
Array.prototype.concatAll=function(){
 let results=[];
    this.forEach((subArray)=>{
        subArray.forEach((item)=>{
        results.push(item);
    });
    });
    return results;
};
let stocks=arr.concatAll();
stocks.forEach((value)=>{
    console.log(value);
})
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