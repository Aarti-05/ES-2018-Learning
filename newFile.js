
for (let i=2014;i<=2050;i++){
    let today=new Date(i,0,1);
    if(today.getDay()===0)
    console.log("1st january is: sunday",[i]);
}
