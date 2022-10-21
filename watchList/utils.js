const searchPage = document.getElementById("search-page")
const inputEl = document.getElementById("input-value")
let movies = []
let imdbIDArr = []

function renderOpenPage() {
    searchPage.innerHTML = `
                            <div id="search">
                                <img src="images/Icon.png">
                                <h3>Start exploring</h3> 
                            </div>`
}

async function renderImdbIDArray() {
    movies = []
    const value = inputEl.value
    const res = await fetch(`https://www.omdbapi.com/?s=${value}&apikey=488eafd6`)
    const data = await res.json()
    const dataResponse = await data.Response  
     
    if(dataResponse === "True") {
        imdbIDArr = data.Search.map(item => item.imdbID)
        console.log(imdbIDArr)
        render()
    }else{
        renderTryAgain()
    } 
}

async function render() {
    searchPage.innerHTML = ""
    for(let id of imdbIDArr){
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=488eafd6`)
        const movie = await res.json()
        searchPage.innerHTML +=`
            <section>
                <img class="movie-img" src="${movie.Poster}">
                <div class="info">
                    <div class="movie-header">
                        <h2>${movie.Title}</h2>
                        <div class="star">${movie.imdbRating}</div>
                    </div>
                    <div class="info-container">
                        <p>${movie.Runtime}</p>
                        <p>${movie.Genre}</p>
                        <div class="change-list">
                            <button id="${movie.imdbID}" class="add-btn" onclick="clicked()"></button>
                            <p>Watchlist</p>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p>${movie.Plot}</p>
                </div>
            </section>`          
        }
}

function renderTryAgain() {
    searchPage.innerHTML = `<div class="no-search-result">
                                <h3>Unable to find what you’re looking for. Please try another search.</h3> 
                            </div>`
}


export {renderOpenPage, renderImdbIDArray, render, renderTryAgain, movies}