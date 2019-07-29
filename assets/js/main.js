
//Global variables
const url1 = "https://restcountries.eu/rest/v2/all";
let dataCountries = {};

// Fetch JSON data from restcountries.eu
fetch(url1).then(function (res) {
  return res.json()
}).then(function (data) {
  dataCountries = data;
  console.log(data);
})