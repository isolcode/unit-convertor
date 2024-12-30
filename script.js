/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const metersEl = document.getElementById("meter-con")
const litersEl = document.getElementById("liter-con")
const kilosEl  = document.getElementById("kilos-con")

convertBtn.addEventListener("click", function(){
    const inputValue = Number(inputEl.value);
    inputEl.value = "";
    render(inputValue)
});

function render(inputValue){
const meter = (inputValue * 3.281).toFixed(2)
const feet = (inputValue * 0.3048).toFixed(2)
const liter = (inputValue * 0.264172).toFixed(2)
const gallons = (inputValue * 3.78541).toFixed(2)
const kilos = (inputValue *  2.20462).toFixed(2)
const pounds = (inputValue * 0.453592).toFixed(2)

let renderLength = `
<p>
${inputValue} meters = ${meter} feet | 
${inputValue} feet = ${feet} meters
</p>
`
metersEl.innerHTML =  renderLength

let renderVolume = `
<p>
${inputValue} liters = ${liter} gallons |
${inputValue} gallons = ${gallons} liters
</p>
`
litersEl.innerHTML = renderVolume

let renderMass = `
<p>
${inputValue} kilos = ${kilos} pounds |
${inputValue} pounds = ${pounds} kilos
</p>
`
kilosEl.innerHTML = renderMass
}
