let today=new Date();

const arr=['sunday','monady','tuesday','wednesday','thursday','friday','saturday'];
arr.forEach((value,index)=>{
  if (index==today.getDay()){

      console.log("Today is :",value);
  }
})
let hour=today.getHours();
let min=today.getMinutes();
let second=today.getSeconds();
let prepand=hour>12?"pm":"am";
hour=hour>12?hour-12:hour;
console.log(`${hour}:${min}:${second}${prepand}`);
let date=today.getDate();
date=date<10?"0"+date:date;

let month=today.getMonth()+1;

month=month<10?"0"+month:month;

let year=today.getFullYear();
console.log(`${date}-${month}-${year}`);

