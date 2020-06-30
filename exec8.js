let today = new Date('06/30/2020');
let c = new Date('12/25/2020');
let time=c.getTime()-today.getTime();
let days= time/(1000*3600*24);
console.log(days);
