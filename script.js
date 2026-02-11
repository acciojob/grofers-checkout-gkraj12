 let prices = document.querySelectorAll(".prices");
let total = 0;

prices.forEach((price) => {
    total += Number(price.textContent);
});

let table = document.getElementById("groceryTable");

let newRow = document.createElement("tr");
let newCell = document.createElement("td");

newCell.textContent = total;

newRow.appendChild(newCell);
table.appendChild(newRow);
