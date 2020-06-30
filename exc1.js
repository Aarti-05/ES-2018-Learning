let today = new Date();
let day= today.getDay();
let arr=['sunday','monday','tuesday','wednesday','Thursday','Friday','Saturday'];
console.log("Today is :" ,arr[day]);
let hour=today.getHours();
let min=today.getMinutes();
let seconds=today.getSeconds();
 
let currentTime=(hour<12)?"am":"pm";
console.log(`${hour} : ${min} :${seconds} ${currentTime}`);
