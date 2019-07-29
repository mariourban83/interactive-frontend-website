
//Create and initialize map
var mymap = L.map('mapid').setView([53.350140, -6.266155], 11);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFyaW91cmJhbiIsImEiOiJjanlvajR0eHUwOHZhM2dwZHkxcHA1aXg2In0.gL34DtbkN1pUVabRV93qOw',
}).addTo(mymap);
