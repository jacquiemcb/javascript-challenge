// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var row = tbody.append("tr");

//FUNCTION TO BUILD TABLE
function buildTable(data){
tbody.html("");
data.forEach(function(dataRow){
    //console.log(dataRow);
    tbody.append("tr");

    //console.table(Object.values(dataRow));
    Object.entries(dataRow).forEach(function([key, value]){
    cell = tbody.append("td");
    cell.text(value);
//console.log(value);
    })
});

}

function handleClick(){
d3.event.preventDefault();

var date = d3.select("#datetime").property("value");
var filterData = tableData;

//console.log(date);
console.log(filterData);


if (date){
 filterData = filterData.filter((ufo => ufo.datetime === date));
 
}
console.log(filterData);

 buildTable(filterData);
}

d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);

