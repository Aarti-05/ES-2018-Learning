/*************************bubble sort************************ */
let arr1=[56,52,2,89,3,45,789];
// arr1.sort((a,b)=>{
//     return a-b
// })
// console.log(arr1)
/******************* insertion sort********************** */
// function insertsort(arr){
// for (let i=1;i<arr.length;i++){
//     for (let j=i;j>0;j--){
//         if(arr[j]<arr[j-1]){
//             // const temp=arr[j];
//             // arr[j]=arr[j-1];
//             // arr[j-1]=temp;
//             [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
//         }else{
//             break;
//         }
//     }}
// return arr;
// }
// console.log(insertsort(arr1))
const store={
    items:[
        {name:'Dragon Food',price: 10,quantity: 10},
        {name:'Dragon cage',price: 800,quantity:1},
        {name:'shipping',price:100,shipping:true}
    ]
}
const total=order=>{

 const totalItems= order.items.filter(x=>!x.shipping).reduce((acc,cur)=> 
acc+cur.price* cur.quantity,0)
const shippingItem=order.items.find(x=> x.shipping)
const shipping=totalItems>1000?0:shippingItem.price;
console.log(shipping)
console.log(totalItems)
 return totalItems+shipping
   }

console.log(total(store))