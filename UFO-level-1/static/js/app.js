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

// // Getting a reference to the button on the page with the id property set to `filter-btn`
// var button = d3.select("#filter-btn");

// // Getting a reference to the input element on the page with the id property set to 'datetime'
// var inputField = d3.select("#datetime");

// // This function is triggered when the button is clicked
// function handleClick() {
//   console.log("A button was clicked!");

//   // We can use d3 to see the object that dispatched the event
//   console.log(d3.event.target);
// }

// // We can use the `on` function in d3 to attach an event to the handler function
// button.on("click", handleClick);  

// // grab references to the input element and the output div
// var text = d3.select("#datetime");
// var output = d3.select(".output");

// // Function to handle input change
// function handleChange(event) {
//   // grab the value of the input field
//   var inputText = d3.event.target.value;

//   // Set the output text 
//   output.text(inputText);
// }

// text.on("change", handleChange);

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

  var dateTime = filteredData.map(ufo => ufo.datetime);
  var city = filteredData.map(ufo => ufo.city);
  var state = filteredData.map(ufo => ufo.state);
  var country = filteredData.map(ufo => ufo.country);
  var shape = filteredData.map(ufo => ufo.shape);
  var minutes = filteredData.map(ufo => ufo.durationMinutes);
  var comments = filteredData.map(ufo => ufo.comments);

  // Then, select the unordered list element by class name
  var list = d3.select(".summary");

  // remove any data from the list to
  list.html("");

  // append stats to the list
  list.append("li").text(`Datetime: ${dateTime}`);
  list.append("li").text(`City: ${city}`);
  list.append("li").text(`State: ${state}`);
  list.append("li").text(`Country: ${country}`);
  list.append("li").text(`Shape: ${shape}`);
  list.append("li").text(`Duration minutes: ${minutes}`);
  list.append("li").text(`Comments: ${comments}`);
};