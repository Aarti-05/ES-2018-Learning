console.log("hello")
const arr1=[[3,5],[8,9],[2,6]]
const merged=(stored,num)=>stored.push(num);
const a=arr1.reduce(merged,[])

console.log(a);