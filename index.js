
const mydate = document.getElementById("date");

let weather = document.getElementById("weather");

const tempStatus = "Clouds";


// For Day becoz javascript give day in number so we will convert it into string
const getCurrentDay = () => {

    const weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tues";
    weekday[3] = "Wed";
    weekday[4] = "Thur";
    weekday[5] = "Fri";
    weekday[6] = "Sat";


    let currentTime = new Date();
    
    let nowday = weekday[currentTime.getDay()];

    return nowday;
}

const getCurrentTime = () => {

    let months = [
        "Jan","Feb","Mar","Apr","May","Jun","July","Aug",
        "Sep","Oct","Nov","Dec"
    ];

   let nowTime = new Date();

   let month = months[nowTime.getMonth()]; 
   let date = nowTime.getDate();

   let hours = nowTime.getHours();
   let mins = nowTime.getMinutes();
   let period = "AM";
   if(hours > 12){
       period = "PM"
   }
   if(mins < 10){
       mins = "0"+mins;
   }
 
   return `${date} ${month} ${hours}:${mins} ${period}`;
}

mydate.innerHTML = getCurrentDay() +  "|" + getCurrentTime();



