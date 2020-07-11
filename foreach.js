const getStockSymbol=(arr)=>{
    //let stocks=[];
// arr.forEach((value,key)=>{
// stocks.push(value.price);
//})
return arr.map((value)=>{
        return value.symbols;

})

}
let arr=[
    {
    symbols:"zxc",price:240.89,volume:253698
    },
    {
    symbols:"abc",price:200.09,volume:2698
    },
    {
    symbols:"mnp",price:140.89,volume:253
    }
];
console.log(getStockSymbol(arr));
