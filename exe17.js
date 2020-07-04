let today=new Date(2020,11,25);
console.log(today.getTime());
let day=new Date();
console.log(day.getTime());
let one_day=1000*60*60*24;
let dayleft=(today.getTime()-day.getTime())/one_day;
console.log(Math.ceil(dayleft));