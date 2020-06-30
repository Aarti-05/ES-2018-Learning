
for (let year=2014; year<=2050;year++){
    let today =new Date(year,0,1);
    if (today.getDay()==0){
        console.log("1st january is being sunday"+year)
    }
    
}

