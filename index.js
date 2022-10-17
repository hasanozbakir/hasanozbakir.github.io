const form = document.getElementById("form-container")
const colorFormat = document.getElementById("mode-color")
const colorInput = document.getElementById("input-color")
let colors = ["#F55A5A", "#2B283A", "#FBF3AB", "#AAD1B6", "#A626D3"]  

renderColors()
  
form.addEventListener("submit", function(e) {
    e.preventDefault()
    const mode = colorFormat.value
    const input = colorInput.value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${input.slice(1)}&format=json&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            const len = data.colors.length
            for (let i=0; i<len; i++) {
                colors.shift()
                colors.push(data.colors[i].hex.value)
            }
            renderColors()
        })
        document.getElementsByTagName("html")[0].style.backgroundColor=colors[Math.floor(len/2)]
})   

function renderColors() {
    let html=""
    for(let i=1; i<=colors.length; i++){
        document.getElementById(`container-${i}`).style.backgroundColor=colors[i-1]
        html += `<p>${colors[i-1]}</p>`
    }
    document.getElementById("hex-color").innerHTML = html
}
    
    