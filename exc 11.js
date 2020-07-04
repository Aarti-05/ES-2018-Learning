// function add(a,b){
//     return {
//          sum:a+b
        
        
//     };
// }
// const sum1=add(6,5);
// console.log(sum1);
// function employee(name,salary,experience,department){
//     return {
//         name,
//         salary,
//         experience,
//         department
//     };
// }
// const employee1=employee("john",15000,5,"engineering");
// const employee2=employee("jane",15000,5,"engineering");
// const employee3=employee("slacey",15000,5,"engineering");
// console.log(employee1);
// console.log(employee2);
// console.log(employee3);
// const fullname= {
//     firstname:"john",
//     lastname:"smith",
//         get name(){
//         return `${fullname.firstname} ${fullname.lastname}`;},
//         set person(values){
//             const parts=values.split(' ');
//             this.lastname=parts[1];
//             this.firstname=parts[0];
        
//     }
// };
// // console.log(fullname)
// fullname.person="aarti dhiman";
//     console.log(fullname.name);
//     const fullname= {
//         firstname:"john",
//         lastname:"smith"};
//         const another =Object.assign({},fullname);
// console.log(another);
// const fullname= {
//     firstname:"john",
//     lastname:"smith"};
//     const another={...fullname};
//     console.log(another);
// let Student= {
//     name:"David",
//     rollno:15,
//     class:5
// }
// console.log(Student)
// delete Student.rollno ;
// console.log(Student);
// console.log(Object.keys(Student).length);
// let library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];
//     let arr= library.map(function(index){
//         //console.log(index)
//         for(let key in index){
//         console.log((index[key][readingStatus])}
//     })
    // let obj={
    //     author: 'Suzanne Collins',
    //     title:  'Mockingjay: The Final Book of The Hunger Games', 
    //     readingStatus: false
    // };
    // for (let key in obj){
    //     if (readingStatus in key){
    //         console.log(obj[key])
    //     }
    // }
    // function Volume(radius,height){
    //     this.radius=radius;
    //     this.height=height;
    //     this.volume=function(){
    //         return Math.PI(radius*radius*height);
    //     }
    // }
    // const vol=new Volume();
    // console.log(Volume[volume]);
    
    // function iterator(array){
    //     console.log(array.length);
    //     let i=0;
    //     return {
    //         next: ()=>{
               
    //             if (i<array.length){
                   
    //               return  {
    //                 value: array[i++],
    //                 done:false};}
    //             else{
    //                 return  {
    //                         done:true  };
    //                 }
    //     }
    //     }}
    //     const array=['apple','banana','grapes'];
    //     const fruits=iterator(array);
    //     // console.log(fruits);
        //console.log(iterator(array));
        // console.log(fruits.next().value);
        // console.log(fruits.next().value);

// console.log('The file is tutorial 51');
// Iterators

// function fruitsIterator(values) {
//     let nextIndex = 0;
//     // we will return an object
//     return {
//         next: function () {
//             if (nextIndex < values.length) {
//                 // We will return below object
//                 return {
//                     value: values[nextIndex++],
//                     done: false
//                 }
//             }
//             else {
//                 // We will return below object with only done
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
// }


// const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];
// console.log("My array is ", myArray)

// // Using the iterator
// const fruits = fruitsIterator(myArray);
// console.log(fruits.next().value)
// console.log(fruits.next().value)
// console.log(fruits.next().value)
// console.log(fruits.next().value)
// console.log(fruits.next().value)

// function sum(array,result=0,start=0){
//     return {
//         next : function (){
//      if (start<array.length){

//      }
//         }
//     }
// }
// function*numbergenrator(){
//     yield 1;
//     yield 2;
// }
// const gen=numbergenrator();
// console.log(gen.next().value);
// console.log(gen.next().value);
// const mymap= new Map;
// const key1='firstName',key2='lastName';
// mymap.set(key1,'aarti');
// mymap.set(key2,'Dhiman');
// //console.log(mymap.get(key1));
// for (let [key,value] of mymap){
//     //.log(key,value);
// };
// mymap.forEach((values,keys)=>{
//     //console.log(keys,values);
//     })
//     console.log(Array.from(mymap));
// const mySet=new Set();
// mySet.add("this");
// mySet.add("hii");
// mySet.add("this");
// mySet.add("this");
// mySet.add("how are you");
// console.log(mySet.has("this"))
// console.log(mySet.delete("this"))
// console.log(mySet);
// mySet.forEach((values)=>{
//     console.log(values);
// }
// let a,b;
// [a,b,c,...d]=[3,2,4,5,2,6,8,7,45];
// console.log(...d);

// let laptop={
//     model:"HP",
//     age:23,
//     net:1233,
//     start:()=>console.log("started")
// }
// let model,age,net=laptop;
// console.log("net");
let volume