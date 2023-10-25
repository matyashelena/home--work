const API_KEY = '8adb89b7';
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

let PAGE = 1;
let lastPage = 1;
let totalResults = 0;
let countPages = 0;

let card;
let cardBlock;

const cardUrl = './card.html';

axios.get(cardUrl)
    .then(function (response) {
        card = response.data;
        addCardBlockToDocument();
    });

function addCardBlockToDocument() {
    cardBlock = document.getElementById('#card_block');
    cardBlock.innerHTML = card;
}

function searchMovie(PAGE = 1) {
    const movieName = document.getElementById('searchText').value;
    if (movieName) {
        axios.get(BASE_URL + `&s=${movieName}&page=${PAGE}`)
            .then(function (res) {
                totalResults = res.data.totalResults;
                countPages = Math.ceil(totalResults / 10);
                generateSearchResult(res.data.Search);
                addPagination(PAGE);

            });
    }

}

function generateSearchResult(result) {
    let html = `<ul class="result_list">`;


    result.forEach(element => {
        html = html + `<li>
         <img alt="poster" class="poster_search" src="${element.Poster}"/>
         <span class="title_search">${element.Title}</span>
         <span class="year_search">${element.Year}</span>
         <button id="${element.imdbID}" type="button" class="button_details" onclick="getMovie(event)">Details</button>
         </li>`;
    });
    html = html + `</ul>`;
    document.getElementById('list').innerHTML = html;
}


function getMovie(event) {
    id = event.target.getAttribute('id');
    getFilmById(id);
}

function getFilmById(id) {
    findMovie = {};

    axios.get(`${BASE_URL}&i=${id}`)
        .then(function (response) {
            findMovie = response.data;
            showCard(findMovie);
        });
}



function showCard(movie) {
    if (movie) {
        cardBlock.classList.remove('d-none');
        document.getElementById('actors').textContent = 'Actors: ' + movie.Actors || "";
        document.getElementById('title').textContent = movie.Title || '';
        document.getElementById('poster').setAttribute('src', `${movie.Poster}`);
        document.getElementById('year').textContent = '(' + (movie.Year + ')' || '');
        // document.getElementById('awards').textContent = 'Awards: ' + movie.Awards || '';
        document.getElementById('country').textContent = 'Country: ' + movie.Country || '';
        document.getElementById('description').textContent = 'Description: ' + movie.Plot || '';
        document.getElementById('time').textContent = 'Time: ' + movie.Runtime;
        document.getElementById('languages').textContent = 'Language: ' + movie.Language || '';
        document.getElementById('genre').textContent = 'Genre: ' + movie.Genre || '';
        const awards = document.getElementById('awards');
        if (movie.imdbRating !== "N/A") {
            awards.textContent = 'Awards: ' + movie.Awards;
        } else {
            awards.textContent = '';
        }
        const score = document.getElementById('score');
        if (movie.imdbRating !== "N/A") {
            score.classList.remove('d-none');
            score.textContent = movie.imdbRating
        } else {
            score.classList.add('d-none');
        }


    }
}

const nav = document.getElementById('nav');

let pagination = document.getElementsByClassName('page-link');

[...pagination].forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();

        const toPage = item.getAttribute('href');

        switch (toPage) {
            case 'first':
                PAGE = 1;
                break;
            case 'prev':
                PAGE > 1 ? PAGE -= 1 : PAGE = 1;
                break;
            case 'page':
                break;
            case 'next':
                PAGE < countPages ? PAGE += 1 : PAGE = countPages;
                break;
            case 'last':
                PAGE = countPages;
                break;
        }

        searchMovie(PAGE);
    });
});

function addPagination(PAGE) {
    if (totalResults > 10) {
        (document.getElementById('page')).text = PAGE;
    }
}