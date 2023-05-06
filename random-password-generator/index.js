const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const passwordOneEl = document.getElementById("first-password");
const passwordTwoEl = document.getElementById("second-password");
const app = document.getElementsByTagName("BODY")[0];
const slider = document.getElementById("my-range");
const output = document.getElementById("password-length");
const numberCheckbox = document.getElementById("numbers");
const symbolCheckbox = document.getElementById("symbols");


output.textContent = slider.value;

function getRandomIndex(arrLength){
    return Math.floor(Math.random()*arrLength);
} 

function getCharactersArr() {
    const arr = []

    for(let i=0; i<characters.length; i++){
        arr.push(characters[i])
    }
    if(numberCheckbox.checked){
        for(let i=0; i<numbers.length; i++){
            arr.push(numbers[i])
        }
    }
    if(symbolCheckbox.checked){
        for(let i=0; i<symbols.length; i++){
            arr.push(symbols[i])
        }
    }
    console.log(arr)
    return arr;
}

function getRandomPassword() {
    let password = "";
    const newArr = getCharactersArr()
    const len = newArr.length
    for(let i=0; i<output.textContent; i++){
        password +=newArr[getRandomIndex(len)]
    }
    return password;
}

function generatePassword() {
    passwordOneEl.textContent = getRandomPassword();
    passwordTwoEl.textContent = getRandomPassword();
}

function resetPassword() {
    passwordOneEl.textContent = "";
    passwordTwoEl.textContent = "";
}

function copyPassword(element) {
    const newPassword = element.parentNode.parentNode.children[0].textContent

    if(newPassword) {
        navigator.clipboard.writeText(newPassword)
        element.parentNode.style.border = "#D5D4D8"
        element.style.color = "#D5D4D8"
        element.parentNode.parentNode.nextSibling.nextSibling.style.display = "inline-block"
        setTimeout(() => {
            element.parentNode.parentNode.nextSibling.nextSibling.style.display = "none"
        },1000)
    }
}

function setStyleBack(element) {
    element.children[1].style.border = "1px solid #55F991"
    element.children[1].children[0].style.color = "#55F991"
}

if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
}

function toggle_light_mode() {
    if (app.getAttribute("light-mode") == "light") {
        app.setAttribute("light-mode", "dark");
    } else {
        app.setAttribute("light-mode", "light");
    }
}

slider.oninput = function() {
  output.textContent = this.value;
}

