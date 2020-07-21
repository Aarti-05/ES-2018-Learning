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
    this.storage=[];
    this.top=0;
    this.push=push;
    this.peek=peek;
    this.pop=pop;
    this.length=length;
    this.clear=clear;
}
function push(value){
    this.storage[this.top++]=value;
}
function pop(){
    return this.storage[--this.top];
}
function peek(){
  return  this.storage[this.top-1];
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