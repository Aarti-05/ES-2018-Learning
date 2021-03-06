////*********************Regular expressions************************** */
const reg=(/good/g);
console.log(reg);
console.log(reg.source)/******************.source gives what is inside the regular expression****************** */
const str="you are a gooooood huan being and also have a goooooooooooooood personality";
let result1=reg.test(str);
console.log(result1);///********.test returns true or false if the match found********** */
let result2=reg.exec(str);
console.log(result2);
let result3=str.match(reg);
console.log(result3);
console.log(result3)
console.log(result3)
console.log(result3)
let result4=str.replace(reg,"very nice")
console.log(result4)
console.log(str.search(reg))

//***********************metachars**************************** */
const reg1=/^are/; ///^ should begins with////
if (reg1.test(str)){
    console.log("begins with")
}
else{
    console.log("not begins with");
}
const reg2= /ty$/;/***********$ ends with********* */
if(reg2.test(str)){
    console.log("ends with")
}
else{
    console.log("doesnot")
}
/******************************.matches one char************************* */
const reg3=/g.od/;
console.log(str.match(reg3));
const reg4=/g*od/;
console.log(str.match(reg4))
// console.log(str.match(reg4))
// ***********************optional char***************************************//
const reg5=/hum?an/
console.log(str.match(reg5))
//***********************quantifiers***************************** */
const reg6=/hap{2,5}y/;
const str1="happpy";
console.log(str1.match(reg6))
/////////////////////Char set//////////////////////
const reg7=/[aeiou]/g;
const str2= 'india';
const a=[]
console.log(a.concat(str2.match(reg7)))
var str3= `800-456-7890
(555) 456-7890
4564567890`;

let regex = /\(?(\d{3})\)?[\s-]?(\d{3})[\s-]?\d{4}/g;

console.log(str3.replace(regex, 'area code: $2'));
/****************************backrefrences match the same string twice*********************** */
let reg8=/(thing)?\s(?=\1)/g;
let str4="it is the the thing thing"
console.log(str4.match(reg8))
console.log(str4.match(reg8))
////**************************factorial of the num***************************************** */
const factorial=(num)=>{
    if (num===1){
        console.log(num) 
        return 1;
       
    }
    console.log(num)
return num*factorial(num-1);
}
console.log(factorial(5))
console.log("first")
/************************datstructure stack using array as stack********************************** */
let letters=[];
let word="BoB".toLowerCase();
let rword="";
for (let i=0;i<word.length;i++){
    
    letters.push(word[i]);
    
}
//letters=letters.join('')
console.log(letters);
for (j=0;j<word.length;j++){
    rword+=letters.pop();
}

console.log(rword)
if (rword===word){
    console.log(rword)
    console.log("palindrome")
      }
else{
    console.log("not a palindrome")
}
/*********************stack***************************** */
function Stack(){
    this.collection=[];
    this.top=0;
    this.push=push;
    this.peek=peek;
    this.pop=pop;
    this.length=length;
    this.clear=clear;
}
function push(value){
    this.collection[this.top++]=value;
}
function pop(){
    return this.collection[--this.top];
}
function peek(){
  return  this.collection[this.top-1];
}
function length(){
    return this.top;
}
function clear(){
    this.top=0;
}


/******************************palindrome datastructure***************************** */
function isPalindrome(str){
    let s=new Stack()
    let reword="";
    console.log(s.length())
    for (let r=0;r<str.length;r++){
        s.push(str[r]);
        
        }
        console.log(s.length())

        for (let k=0;k<str.length;k++){
            reword+=s.pop();
        }
        console.log(s.length())
        console.log(reword)
        if(reword==str){
            console.log("palindrome")
        }
        
     else{
     return false
    }
    
}
console.log(isPalindrome("rotor"))
/*****************************************factorial of number***************************************8 */
function fact(num){
    let s1=new Stack();
    let product=1;
    console.log(s1.length())
    while(num>1){
        s1.push(num--)
    }
    while(s1.length()>0){
        product*=s1.pop()
    }
    return product;
}
console.log(fact(10));
/*****************************************base conversion using stack****************************************** */
function conversion(num,base){
let s2=new Stack();
let converted=[]
do{
    s2.push(num%base);
    num=Math.floor(num/base);
}while(num>0)
console.log(s2.length())

while(s2.length()>0){
converted+=s2.pop()
}
return converted;
console.log(s2.length())
}
console.log(conversion(32,2));
console.log(conversion(32,8));
console.log(conversion(32,16));
console.log(conversion(125,8));
/********************************************queue in datastructure**************************************************** */
function Queue(){
     collection=[];
    this.print=function(){
       console.log(collection);
    }
    this.enqueue=function(vals){
        collection.push(vals);
    }
    this.dequeue=function(){
        return collection.shift();
    }
    this.front=function(){
        return collection[0];
    }
this.back=function(){
    return collection[collection.length-1];
}
this.toString=function(){
    let str="";
    for (let i=0;i<collection.length;i++){
        str+=collection[i]
    }
    return str;
}
this.empty=function(){
    if(collection.length===0){
        return true;
    }
    else{
        return false;
    }
}
}
let q=new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");
q.print();
console.log(q.dequeue());
(q.print());
console.log(q.front())
console.log(q.back());
console.log(q.toString());
q.empty();
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.empty())
/************************************************priority queue******************************************** */
function Queue1(){
    col=[];
    this.dequeue=function(){
        for (let i=0;i<col.length;i++){
            if(col[i]>5){
                  col.shift()
            }
            
        }
        
    }
    this.enqueue=function(val){
        col.push(val);
    }
    this.print=function(){
        console.log(col);
     }
}
let q1=new Queue1();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(5);
q1.enqueue(5);
q1.enqueue(5);
q1.enqueue(15);
q1.print();
console.log(q1.dequeue());
q1.print()
////**********************************linked list********************************* */
class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
          this.length=0;
    }
insertFirst(data,next){
    let node =new Node(data,next)
if (this.head===null){
    this.head=node;
}
else{
    this.head=new Node(data,this.head)

}  
this.length++;  
}

getFirst(){
    return this.head;
}

getLast()
{
    if(this.head===null){
        return (`this is last node `) ;
    }
    let currentNode=this.head;
    while(currentNode){
        if(currentNode.next===null){
            return currentNode;
        }
        
            currentNode=currentNode.next
    
    }
   
}
size(){
    return this.length;

}
clear(){
    this.head=null;
}
removeFirst(){
    if(this.head===null){
        return "llist is empty"
    }
   return this.head=this.head.next;
}
removeLast(){
    if(this.head===null)
    return "empty";
    let curNode=this.head;
    let preNode=this.head.next;
    while(preNode){
        if(preNode.next===null){
            curNode.next=null;
            return;
        }
        curNode=preNode;
        preNode=preNode.next;
    }
}
insertLast(data,next){
    let last=this.getLast();
    if(!last){
        last=new Node(data);
    return;
    }
    last.next=new Node(data);
  return;
}
getAt(index){
    let count=0;
    let node=this.head;
    while(node){
        if (count===index){
            return node;
        }
        count++;
        node=node.next;
    }
    return null;
}
/*********************************remove node from particular index******************************* */
removeAt(index){
    if(this.head===null){
        return;
    }
    if(index===0){
        return this.head=this.head.next;
    }
    let preNode=this.getAt(index-1);
    let curNode=this.getAt(index);
    if(!preNode||!curNode){
        return;
    }
    preNode.next=curNode.next;
}
insertAt(index,data){
    if(this.head===0){
     let node=new Node(data);
     return
    }
    if(index===0)
    {
        this.head=new Node(data,this.head)
        return;
    }
    let preNode=this.getAt(index-1);
    let curNode=this.getAt(index);
    if(!preNode&&!curNode){
        this.getLast.next=new Node(data);
        return;
    }
    if(preNode&&!curNode){
        preNode.next=new Node(data);
        return;
    }
    

        preNode.next=new Node(data);
    
    return;

}}

/******************************************midpoint of the linked list*************************************** */
const midPoint=list=>{
    let slowPointer=list.head;
    let fastPointer=list.head;
    while(fastPointer.next && fastPointer.next.next){
        slowPointer=slowPointer.next;
        fastPointer=fastPointer.next.next;
    }
    return slowPointer


}
/*********************circular linked list******************** */
const circular=(list)=>{
    let slowPointer=list.head;
    let fastPointer=list.head;
    while(fastPointer.next && fastPointer.next.next){
        slowPointer=slowPointer.next;
        fastPointer=fastPointer.next.next;
        if (slowPointer===fastPointer){
            return true;
        }
        
    }
    return false
}



let list= new LinkedList();
//  list.insertFirst(45);
// list.insertFirst(10)
console.log(list)
// list.insertFirst(12)
// list.insertFirst(11);
//list.getFirst();
//console.log(list.size())/********************size of linked list***************** */
// console.log(list.getLast());
// console.log(list);
// //list.clear();
// console.log(list.removeLast());
// list.insertLast(27);
// console.log(list.getAt(1))
// list.removeAt(0);
list.insertAt(0,5);
list.insertAt(1,6);
 //list.insertAt(2,56);
list.insertAt(3,6);
 list.insertAt(4,60);
//list.insertAt(7,70)
console.log(list)
console.log(midPoint(list))
list.getLast().next=list.getAt(0);
console.log(circular(list))
/*******************************dictionary************************************ */

    function Dictionary(){
        this.storage=[];
        this.add=add;
        this.remove=remove;
        //this.find=find;

    }
    function add(key,value){
        this.storage[key]=value;
    }
    function remove(key){
        delete this.storage[key];
    }
    function find (key){
        return this.storage[key];
    }


let people= new Dictionary();
people.add("name2","1");
people.add("name1","2");
people.add("name","3");
people.remove("name1")
console.log(people)

///////////////////////////*********************set as datastructure************************* */
function Set(){
    this.storage=[];
    this.add=add;
    this.remove=remove;
    this.has=has;
    this.size=size;
    this.union=union;
    this.intersect=intersect;
    this.show=show;
    this.diff=diff;
}
function has(vals){
    return this.storage.indexOf(vals)!==-1
}
function add(vals){
    if(this.storage.indexOf(vals)<0){
        this.storage.push(vals);
        return true;
        
    }
    return false;
}
function remove(vals){
    let pos=this.storage.indexOf(vals);
    if(pos>-1){

        this.storage.splice(pos,1);
        return true;
    }
    else {
        return false;
    }
    
}
function size(){
    return this.storage.length;
}
function union(set){
    let tempset=new Set();
    for (let i=0;i<this.storage.length;i++){
        console.log(this.storage.length)
            tempset.storage.push(this.storage[i]);
        
    }
    for (let i=0;i<set.storage.length;i++){
        console.log(set.storage.length)
        if(!tempset.has(set.storage[i]))
        tempset.storage.push(set.storage[i])
    }
    return tempset;
}
function intersect(set1){
    let tempset1=new Set();
    for (let i=0;i<this.storage.length;i++){
        console.log(this.storage.length)
        if(set1.has(this.storage[i])){

            tempset1.storage.push(this.storage[i]);
        }}
return tempset1;
}
function show(){
    return this.storage;
}
function diff(set1){
    let tempset1=new Set();
    for (let i=0;i<this.storage.length;i++){
        console.log(this.storage.length)
        if(!set1.has(this.storage[i])){

            tempset1.storage.push(this.storage[i]);
        }}
return tempset1;

}

let mySet=new Set();
console.log(mySet.add(1))
console.log(mySet.add(5))
console.log(mySet.add(9))
console.log(mySet.add(7))
console.log(mySet.add(7))
console.log(mySet.remove(9))
console.log(mySet)
console.log(mySet.has(8))
console.log(mySet.size())
let set1=new Set();
console.log(set1.add(5))
console.log(set1.add(9))
console.log(set1.add(3))
console.log(set1.add(85))
let set2= new Set();
set2=set1.union(mySet)
console.log(set2.show())
let set3=new Set();
set3=set1.intersect(mySet)
console.log(set3.show())
let set4=new Set()
set4=set1.diff(mySet);
console.log(set4.show());
/////*************************Tree Datastructure***************************** */
class Node1{
    constructor(data){
        this.data=data;
        this.children=[];
    }
    add(data){
        let node=new Node1(data);
        this.children.push(node);
    }
    remove(data){
        this.children=this.children.filter((node)=>{
            return node.data!==data;
        })
    }
}
class Tree{
    constructor(){
        this.root=null;
    }
    bf(){
        let arr=[this.root];
        console.log(arr.length)
       console.log(arr)
        while(arr.length){
            let a=arr.shift();
            
            console.log(a.data);
            //
            console.log(arr.push(...a.children));
            
        }
        
    }
    df(){
        let arr1=[this.root];
        while(arr1.length){
            let b=arr1.shift();
            console.log(b.data);
           console.log (arr1.unshift(...b.children))
        }
        
    }
}
let tree=new Tree();
let n=new Node1(0);
tree.root=n;
n.add("first");
n.add("second");
n.children[0].add(111);
 n.add("third");
n.children[1].add(121);
 n.children[2].add(131);
console.log(n.children[0]);
console.log(n.children[1]);
console.log(n.children[2]);
console.log(tree) ;
console.log(tree.bf())
console.log(tree.df())