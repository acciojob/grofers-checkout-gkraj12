 const getSumBtn = document.createElement("botton")
getSumBtn.append("Get Total Price")
document.body.appendChild(getSumBtn)
const getSum = ()=>{
let prices = document.querySelectorAll(".prices")

let total = 0;

prices.forEach(function(price){
    total = total + Number(price.textContent);
})

let table = document.getElementById("groceryTable")
let newRow = document.createElement("tr")
let newCell = document.createElement("td")

newCell.textContent= "Total Price:" + total;
newCell.colSpan= 2

newRow.appendChild(newCell)
table.appendChild(newRow)
}
getSumBtn.addEventListener("click",getSum)
