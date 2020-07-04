// let x=19;
// let y=25;
// x>y?x:y;
// //console.log('larger no is :' ,y):
// let z=-15;
// let product =x*y*z;
// product=product>0?"+":"-";
// // console.log(product)
// let arr=['4','0','-1'];
// arr=arr.sort();
// console.log(arr);
// let x=-5,y=-4,z=0,a=-1;
// if((x>y)&&(x>z)&&(x>a)){
//     console.log("largest number is:",x);
// }
// else if((y>x)&&(y>z)&&(y>a)){
//     console.log("largest number is:",y);
// }
// else if((z>x)&&(z>y)&&(z>a)){
//     console.log("largest number is:",z);}
//     else{
//         console.log("largest number is:",z);
//     }
// for (let i=0;i<=15;i++){
//     if([i]%2===0){
//         console.log(i," is even number");
//     }
//     else{
//         console.log(i,"is odd number");
//     }
// }
let student=[ ['David',80],['Vinoth',77],['Divya',88],['Ishitha',95],['Thomas',68]];
let ave=0;
for (i=0;i<student.length;i++){
ave+=student[i][1];

}
ave=ave/student.length;
console.log(ave)


