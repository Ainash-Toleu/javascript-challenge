// checking connections
console.log ("app.js loaded");
console.log ("data.js loaded");
console.log(data);

// geting a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// YOUR CODE HERE!
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
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  console.log("Filtered Data: ");
  console.log(filteredData);

  tbody.html("");

  filteredData.forEach((ufoSelected) => {
    var row = tbody.append("tr");
    Object.entries(ufoSelected).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};