"use strict";
var map,
button=document.getElementById("button"),
mappy=document.getElementById("map"),
options={center:{lat:9.0778,lng:8.6775},zoom:7};

function createMap(){
	map=new google.maps.Map(mappy,options);
	var e=document.getElementById("input"),
	n=new google.maps.places.SearchBox(e);
	map.addListener("bounds_changed",function(){
		n.setBounds(map.getBounds())
	});

	var o=[];
	n.addListener("places_changed",function(){
		var e=n.getPlaces();
		if(0!==e.length){
			o.forEach(function(e){
				e.setMap(null)
			}),
			o=[];
			var t=new google.maps.LatLngBounds;
			e.forEach(function(e){
				e.geometry&&(o.push(new google.maps.Marker({
					map:map,title:e.name,position:e.geometry.location})),e.geometry.viewport?t.union(e.geometry.viewport):t.extend(e.geometry.location))}),map.fitBounds(t)}})}button.addEventListener("click",function(){mappy.classList.toggle("display-toggle")});