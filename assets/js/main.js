
//Global variables
const url1 = "https://restcountries.eu/rest/v2/all";
let dataCountries = {};

// Fetch JSON data from restcountries.eu
fetch(url1).then(function (res) {
  return res.json()
}).then(function (data) {
  dataCountries = data;
  buildCountrySelect(data);
  console.log(data);
})

// Build SELECT element with OPTIONS on webpage for country selection
function buildCountrySelect(b) {
  let select = document.createElement('select');
  b.forEach(function (item, index) {
    let option = document.createElement('option');
    option.value = index;
    option.textContent = item.name;
    select.appendChild(option);
  })
  select.addEventListener("change", displayData);
  document.querySelector('#pickCountry').appendChild(select);
}

//Variables for storing  & Function for inserting data into html elements on the webpage
function displayData(d) {
  const countryName = document.querySelector("#countryName");
  const countryCapital = document.querySelector("#countryCapital");
  const countryPopulation = document.querySelector("#countryPopulation");
  let obj = dataCountries[d.target.value];
  countryName.innerHTML = '<h4>' + 'Country Name : ' + obj.name + '</h4>';
  countryCapital.innerHTML = '<h4>' + 'Country Capital : ' + obj.capital + '</h4>';
  countryPopulation.innerHTML = '<h5>' + 'Current Population : ' + obj.population + '</h5>';
  document.querySelector('#countryFlag').src = obj.flag;
}