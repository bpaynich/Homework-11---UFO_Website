// U of A Data Bootcamp
// Bryan Paynich
// Homework 11 - Javascript
// 3/18/2019

// Capitalize function for capitalizing first letter in word(s)
function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

// from data.js
let tableData = data;

let tbody = d3.select("tbody");

// Inital Page Load with all data
 data.forEach(function(tableData) {
   let row = tbody.append("tr");
   Object.entries(tableData).forEach(function([key, value]) {
     let cell = tbody.append("td");

    if(key === "city" || key === "shape"){
      //var fix_city = capitalize_Words(value);
      cell.text(capitalize_Words(value));
    } else if(key === "state" || key === "country"){
      var fix_state = value.toUpperCase();
      cell.text(fix_state);
    } else {
        cell.text(value);  
    }
   });
 });
 
// Select the submit button
let submit = d3.select("#filter-btn");

// Filter based on date provided
submit.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var filteredData = data.filter(report => report.datetime === inputValue);
  
  // Select current tbody section and remove
  let tbody = d3.select("tbody");
  tbody.html("");

  //  Reinsert new filtered table
  filteredData.forEach(function(filteredData) {
    let row = tbody.append("tr");
    Object.entries(filteredData).forEach(function([key, value]) {
        //console.log(value);
        //console.log(key);
      let cell = tbody.append("td");
      if(key === "city" || key === "shape"){
      cell.text(capitalize_Words(value));
      } else if(key === "state" || key === "country"){
      var fix_state = value.toUpperCase();
      cell.text(fix_state);
      } else {
        cell.text(value);  
      }
    });
  });
});



