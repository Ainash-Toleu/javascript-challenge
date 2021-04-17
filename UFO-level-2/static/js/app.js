// checking connections
console.log ("app.js loaded");
console.log ("data.js loaded");
console.log(data);

// geting a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// append all data in table
data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");

  // Get the value property of the input element
  var inputDateValue = inputDate.property("value");
  var inputCityValue = inputCity.property("value");
  var inputStateValue = inputState.property("value");
  var inputCountryValue = inputCountry.property("value");
  var inputShapeValue = inputShape.property("value");

  // filter UFO data by serch value
  if (inputDateValue) {
    var filteredData = tableData.filter(ufo => ufo.datetime === inputDateValue);
  }
  else if (inputCityValue) {
    var filteredData = tableData.filter(ufo => ufo.city === inputCityValue);
  }
  else if (inputStateValue) {
    var filteredData = tableData.filter(ufo => ufo.state === inputStateValue);
  }
  else if (inputCountryValue) {
    var filteredData = tableData.filter(ufo => ufo.state === inputCountryValue);
  }
  else if (inputShapeValue) {
    var filteredData = tableData.filter(ufo => ufo.state === inputShapeValue);
  }
  

  tbody.html("");

  // append all filtered data in table
  filteredData.forEach((ufoSelected) => {
    var row = tbody.append("tr");
    Object.entries(ufoSelected).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};