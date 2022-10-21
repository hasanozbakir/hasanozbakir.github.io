import {renderOpenPage, renderImdbIDArray, render, renderTryAgain} from './utils.js'
const form = document.getElementById("movie-search")

renderOpenPage()

form.addEventListener("submit", function(e){
    e.preventDefault()
    renderImdbIDArray()
})   
   
function clicked() {
    console.log("cliced")
}
  

