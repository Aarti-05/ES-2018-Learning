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
// let student=[ ['David',80],['Vinoth',77],['Divya',88],['Ishitha',95],['Thomas',68]];
// let ave=0;
// for (i=0;i<student.length;i++){
// ave+=student[i][1];

// }
// ave=ave/student.length;
// console.log(ave)
// for (i=1;i<=100;i++){
//     if(i%3===0 && i%5===0){
//         console.log("fizz,buzz",i);
//     }
//     else if(i%3===0){
//         console.log("fizz",i);

//     }
//     else if(i%5===0){
//         console.log("buzz",i);
//     }
    

// const arm=(num)=>
// {
//     for (i=1;i<10;i++){
//         for (j=0;j<10;j++){
//             for (k=0;k<10;k++){
//                 let x=Math.pow(i,3)+Math.pow(j,3)+Math.pow(k,3);
//                 let y=i*100+j*10+k;
//                 if(x===y){
//                     console.log(x)
//                 }
//             }
//         }
//     }
// }
// arm();
// for (let i=1;i<=5;i++){
//    let str="*";
//     for (let j=0;j<i;j++){
//      // let  str="*";
     
//     }
//     console.log(str.repeat(i));
// }
// var a = 12; //First number
// var b = 50;  //Second number 
// let gcd;
// while(a!=b){
//     if(a>b){
//         a=a-b;
//     }
//     else{
//         b=b-a;
//     }
//     gcd=a;
// }
// console.log(gcd);
// for (let i=1;i<1000;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i);
//     }
// }
// let arr=[-1,-2,5,-3];
// let x=Math.max(...arr);
// console.log(x);
let arr=[1,2,3]
console.log(Array.isArray(arr))