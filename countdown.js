let daysItem=document.querySelector("#days");
let hoursItem=document.querySelector("#hours");
let minItem=document.querySelector("#mins");
let secItem=document.querySelector("#secs");

let countDown=()=>{
    let futureDate= new Date("2025-02-11T14:00:00");
    let currentDate= new Date();
    let myDate= futureDate-currentDate;
    
    if (myDate <= 0) {
        daysItem.innerHTML = "00";
        hoursItem.innerHTML = "00";
        minItem.innerHTML = "00";
        secItem.innerHTML = "00";
        clearInterval(timer);
        return;
    }

    let days= Math.floor(myDate/1000/60/60/24);
    let hours= Math.floor(myDate/1000/60/60)%24;
    let min= Math.floor(myDate/1000/60)%60;
    let sec= Math.floor(myDate/1000)%60;

    daysItem.innerHTML=days;
    hoursItem.innerHTML=hours;
    minItem.innerHTML=min;
    secItem.innerHTML=sec;


}
countDown();
setInterval(countDown,1000);