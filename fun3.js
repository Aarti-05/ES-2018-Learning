
 let finalCount=0;
 function singleLetterCount(str,a){
   
    for(let i=0;i<str.length;i++){
        if(a.toLowerCase===str[i].toLowerCase){
            finalCount++;
        }
        
    }
return finalCount;
}
console.log(singleLetterCount("India","i"));
