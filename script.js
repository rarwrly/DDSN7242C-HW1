/*

Create a search bar that filters a list of cities by name.

https://www.javascripttutorial.net/javascript-array-filter/

[X]1. Display a page with the cities below, their population, and a famous landmark. Use javascript to populate the page.

2. 
[x]a search bar using the input tag.
[x]When a user types into the search bar only the cities where the search characters overlap should be displayed on the page. 
[x]Make the search bar case-insensitive. For example: If a user types in 'hou' the page should only show Houston.

Grading criteria:

[X]1. Use the filter() function to complete this assignment.

[x]2. There should be at least two functions.
    [x]One should populate the page when the page loads. 
    [x ]The other should filter when the user types into the search bar.

3.[x]Use only ES6+ techniques if needed: template strings (`${}`), arrow functions, forEach(), etc.

4.[x]Use GitHub and make at least 5 commits with meaningful commit messages in the present tense. For example: "Create filter function."

5. Do not have any extraneous comments beyond explanations of code (if needed) in your final result. Do not have any console.logs, in comments or otherwise.

6. CSS is not necessary and will not be graded but is encouraged for the sake of practice.

Ungraded Stretch Goals:

1. Create a dropdown using the select element. The dropdown will have two options: name and landmark. The selected option will change how the list is being filtered. For instance, if the landmark option is chosen the search bar will filter using the text in landmark instead of name.

2. Use the sort() function to sort the cities by population on load. Do not manually shift the objects within the array.

3. Create a button that, when clicked, changes the list from sorted ascending by population to sorted descending by population, and vice-versa.

*/

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

];

displayCities(cities);


input.addEventListener('input',displaySearch);

function displaySearch(e){
    result.innerHTML = "";
    const searchVal = e.target.value;
    const searchResults = cities.filter (city => city.name.toUpperCase().includes(searchVal.toUpperCase()));
    
    displayCities(searchResults)
}