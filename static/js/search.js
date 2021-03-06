"use strict";
var input=document.getElementById("input"),
locationDisp=document.getElementById("location"),
city=document.getElementById("city"),
locationData=document.getElementById("content-sub"),
temp=document.querySelector("#temp"),
hum=document.querySelector("#hum"),
lat=document.querySelector("#lat"),
lon=document.querySelector("#lon"),
ws=document.querySelector("#ws"),
wc=document.querySelector("#wc");


function convertKelvin(t){
	return Math.floor(t-273)
}

input.addEventListener("change",function(t){
	var e=t.target.value;
	city.textContent=e.toUpperCase(),
	fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&APPID=7a79bc20763cb4af3197ba183f89d24c")
	.then(function(t){return t.json()})
	.then(function(t){
		locationDisp.textContent=" "+t.sys.country,
		temp.innerHTML=convertKelvin(t.main.temp)+" <sup>o</sup>C",
		hum.textContent=t.main.humidity,
		wc.textContent=t.weather[0].main,
		ws.innerHTML=t.wind.speed+" ms<sup>-1</sup>",
		lat.textContent=t.coord.lat,
		lon.textContent=t.coord.lon}
		)}
);