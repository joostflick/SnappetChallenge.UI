// Mock data used to dynamically fill the HTML table
const data = [{title: "123. Doortellen en terugtellen lorem ipsum lorem ipsum", pupils: '10'}, {title: "201. Splitsend vermenigvuldigen lorem ipsum lorem ipsum lorem ipsum", pupils: '10'}, {title: "123. Doortellen en terugtellen. Sprongen van 3 lorem ipsum", pupils: '10'}];

// Get the table body element
let table = document.getElementById("table").getElementsByTagName('tbody')[0];

// Dynamically fill table based on the data
for (let i = 0; i < data.length; i++) {
	// Add empty <tr> element to html
	let row = table.insertRow();

	// Insert 3 new <td> elements
	let cell1 = row.insertCell(0);
	let cell2 = row.insertCell(1);
	let cell3 = row.insertCell(2);

	// Add content to the cells
	cell1.innerHTML = data[i].title;
	cell2.innerHTML = data[i].pupils;
	cell3.innerHTML = '<button>Show Details</button>';

}
