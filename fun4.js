let person={};
person.name="elle",
person[1+1+1]="three",
person[3];
function letterCount(str)
{
    let obj={

    };
    for(let  i=0;i<str.length;i++){
        if(!str[i] in obj){
            obj.str[i]=1;
        }
        else{
           obj[str[i]]++;
        }
    }
    return obj;
}
console.log(letterCount("help"))
