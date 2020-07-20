////*********************Regular expressions************************** */
const reg=(/good/g);
console.log(reg);
console.log(reg.source)/******************.source gives what is inside the regular expression****************** */
const str="you are a gooooood human being and also have a good personality";
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
console.log(str.match(reg3))