const result =document.querySelector(".result");
const input =document.querySelector('#searchValue');

function displayCities(cities){
    const nameCities = cities.map(city =>`<div> City Name: ${city.name} Pop.:${city.population} Point of Intrest: ${city.landmark}</div>`);
    result.innerHTML += nameCities.join("");
}

const cities = [

    { name: "Houston", population: 2099451, landmark: "NASA Space Center" },

    { name: "Los Angeles", population: 3792621, landmark: "Hollywood Sign" },

    { name: "New York", population: 8175133, landmark: "Statue of Liberty" },

    { name: "Chicago", population: 2695598, landmark: "Willis Tower" },

    { name: "Philadelphia", population: 1526006, landmark: "Independence Hall" },

    {name: "New Brunswick", population:0, landmark: "Fat Sandwich Trucks"},
    
    {name: "Los Alamos", population: 45000, landmark: "Los Alamos National Laboratory"},

];

displayCities(cities);


input.addEventListener('input',displaySearch);

function displaySearch(e){
    result.innerHTML = "";
    const searchVal = e.target.value;
    const searchResults = cities.filter (city => city.name.toUpperCase().includes(searchVal.toUpperCase()));
    
    displayCities(searchResults)
}