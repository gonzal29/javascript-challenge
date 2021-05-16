// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
// table.attr("class", "table table-striped");
function buildTable(data){
  tbody.html("");

// Step 1: Loop Through `data` and console.log each weather report object

//       });
      data.forEach((ufoSight) => {
        const row = tbody.append("tr");
        Object.entries(ufoSight).forEach(([key, value]) => {
          let cell = row.append("td");
          cell.text(value);
        });
      });
    }
// // Select the button
// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
  const date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }
   buildTable(filteredData);
}
d3.selectAll("#filter-btn").on("click", runEnter);
buildTable(tableData);
  // Prevent the page from refreshing
  // d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  // var inputElement = d3.select("#patient-form-input");

  // Get the value property of the input element
  // var inputValue = inputElement.property("value");

  // console.log(inputValue);
  // console.log(tableData);

  // var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  // console.log(filteredData);
