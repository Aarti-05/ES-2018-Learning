function triangle (a,b,c){
    let  s= (a+b+c)/2;
    let  area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;

}
console.log(triangle(5,6,8));