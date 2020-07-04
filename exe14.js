const area=(a,b,c)=>{
    let s= (a+b+c)/2;
    let z=Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return z.toFixed(3);
}
console.log(area(10,12,13));
