 const meterToFeet = 3.281
 literToGallon = 0.264
 kilogramToPound = 2.204


 const inputEl = document.getElementById("input-el")
 const buttonEl = document.getElementById("btn")
 const resultsEl = document.getElementById("results")
 const resultsElement = document.getElementById("results-2")
 const resultsElementLast = document.getElementById("results-3")

 buttonEl.addEventListener("click", function click() {
     const baseValue = inputEl.value
     const mult = baseValue * meterToFeet
     const multEl = mult.toFixed(2)
     const div = baseValue / meterToFeet
     const divEl = div.toFixed(2)
     const results = `${baseValue} Meter = ${multEl} Feet || ${baseValue} Feet =  ${divEl} meters`
     resultsEl.textContent = results


     const baseValueTwo = inputEl.value
     const mult2 = baseValueTwo * literToGallon
     const multElTwo = mult2.toFixed(2)
     const divTwo = baseValueTwo / literToGallon
     const divTwoEl = divTwo.toFixed(2)
     const results2 = `${baseValueTwo} Litres = ${multElTwo} Gallons || ${baseValueTwo} Gallons=  ${divTwoEl}Litres`
     resultsElement.textContent = results2

     const baseValueThree = inputEl.value
     const mult3 = baseValueThree * kilogramToPound
     const multElThree = mult3.toFixed(2)
     const divThree = baseValueTwo / kilogramToPound
     const divThreeEl = divThree.toFixed(2)
     const results3 = `${baseValueThree} Kilograms = ${multElThree} pounds || ${baseValueThree} Pounds =  ${divThreeEl}Killograms`
     resultsElementLast.textContent = results3
 })