
let apiResponse;
let responseDate;

async function getWeatherData(currentCity="cairo"){
 apiResponse=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d7e70ce0b200425ca80174950221501&q=${currentCity}&days=3`); 
 responseDate=await apiResponse.json();
 console.log(responseDate)
   
    displayTodayWeather();
    displayNextdayWeather();
}
getWeatherData();
 
let today= document.getElementById("today");
let date=document.getElementById("dateoftoday");
let locationCity=document.getElementById("location");
let todayDgree=document.getElementById("today-degree");
let todayIcon=document.getElementById("today-icon");
let todayDescription=document.getElementById("today-description");
let humidty=document.getElementById("humidty");
let wind=document.getElementById("wind");
let compass=document.getElementById("compass");
let nextDay=document.getElementsByClassName("nextday");
let nextDayICON=document.getElementsByClassName("nextday-icon")
let maxDegree=document.getElementsByClassName("max-degree");
let minDegree=document.getElementsByClassName("min-degree");
let nextDayDdescription=document.getElementsByClassName("nextDay-description");
let searchBar=document.getElementById("search-bar");

let days=[ "Sunday", "Monday",  "Tuesday", "Wednesday",   "Thursday",  "Friday",   "Saturday"];
let months=["January","February","March","April","May","June","July","August","Spetember","October","Novmber","December"];


 function displayTodayWeather(){

    let date= new Date();
    today.innerHTML=days[date.getDay()];
    date.innerHTML=months[date.getDate()];
    locationCity.innerHTML= responseDate.location.name;
    todayDgree.innerHTML=responseDate.current.temp_c;
    todayIcon.setAttribute("src",`http:${responseDate.current.condition.icon}`)
    todayDescription.innerHTML=responseDate.current.condition.text;
    humidty.innerHTML=responseDate.current.humidity;
    wind.innerHTML=responseDate.current.wind_kph;
    compass.innerHTML=responseDate.current.wind_dir;
    
 }

 function displayNextdayWeather(){
     
for(let i=0 ; i<nextDay.length; i++){
nextDay[i].innerHTML=days[new Date(responseDate.forecast.forecastday[i+1].date).getDay()];
nextDayICON[i].setAttribute("src",`http:${responseDate.forecast.forecastday[i+1].day.condition.icon}`);
maxDegree[i].innerHTML=responseDate.forecast.forecastday[i+1].day.maxtemp_c;
minDegree[i].innerHTML=responseDate.forecast.forecastday[i+1].day.mintemp_c;
nextDayDdescription[i].innerHTML=responseDate.forecast.forecastday[i+1].day.condition.text;
    }
 };
 searchBar.addEventListener("keyup",function(){
    currentCity= searchBar.value;
   console.log( currentCity);
  getWeatherData(currentCity);
  })
 