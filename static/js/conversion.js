"use strict";

var convert=document.getElementById("convert"),
	mainContent=document.getElementById("main-content"),
	conversion1=document.getElementById("conversion-1"),
	conversion2=document.getElementById("conversion-2"),
	dataResult1=document.getElementById("data-1"),
	dataResult2=document.getElementById("data-2"),
	displayContent=document.getElementById("displayContent");

convert.addEventListener("click", function(t){
	t.preventDefault(),
	displayContent.classList.toggle("display-toggle")
}),
conversion1.addEventListener("change",function(t){
	var e=Math.floor(9*t.target.value/5+32);
	dataResult1.textContent=e
}),
conversion2.addEventListener("change",function(t){
	var e=Math.floor(5*(t.target.value-32)/9);
	dataResult2.textContent=e
});