// Mock data used to dynamically fill the HTML table
const data = [[{title: "123. Doortellen en terugtellen lorem ipsum lorem ipsum", pupils: '10'}, {title: "201. Splitsend vermenigvuldigen lorem ipsum lorem ipsum lorem ipsum", pupils: '10'}, {title: "123. Doortellen en terugtellen. Sprongen van 3 lorem ipsum", pupils: '10'}],
	[{title: "234. Terugtellen rekenen schrijven lorem ipsum lorem ipsum", pupils: '3'}, {title: "001. Vermenigvuldigen vermenigvuldigen lorem ipsum lorem ipsum lorem ipsum", pupils: '11'}, {title: "091. Tekenen schrijven lezen. Sprongen van 3 lorem ipsum", pupils: '8'}],
	[{title: "111. Rekenen tellen lorem ipsum lorem ipsum", pupils: '12'}, {title: "201. Spelling taal lorem ipsum lorem ipsum lorem ipsum", pupils: '10'}, {title: "123. Oefenopdrachten lezen rekenen. Sprongen van 3 lorem ipsum", pupils: '10'}],
	[{title: "094. Oefenen tellen rekenen lorem ipsum lorem ipsum", pupils: '80'}, {title: "201. Test test test lorem ipsum lorem ipsum lorem ipsum", pupils: '10'}, {title: "133. Statistiek lezen rekenen. Sprongen van 3 lorem ipsum", pupils: '10'}]];

// Get the table body element
let table = document.getElementById("table").getElementsByTagName('tbody')[0];

// Fill table with default data
fillTable(data[0])

function fillTable(data) {
	// Clear potential old data
	table.innerHTML = ''
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
}

// Dropdown logic
// Dropdown is made using js/css as per the assignment instructions, otherwise I would have opted for a HTML select element
// Dropdown is based on https://www.w3schools.com/howto/howto_js_dropdown.asp

function openDropdown() {
	document.getElementById("dropdown-content").classList.toggle("show");
}

// Change content based on which option is selected
function showContent(value) {
	switch (value) {
		case 4:
			fillTable(data[1])
			break
		case 3:
			fillTable(data[2])
			break
		case 2:
			fillTable(data[3])
			break
		default:
			fillTable(data[0])
	}
}

// Close dropdown
window.onclick = function(event) {
	if (!event.target.matches('#dropdown-button')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
