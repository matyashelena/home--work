// const API_KEY = '8adb89b7';
// http://www.omdbapi.com/?i=tt3896198&apikey=8adb89b7
// const BASE_URL = `http://img.omdbapi.com/?apikey=${API_KEY}`;

// // Робимо запит для користувача з даним ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // обробка успішного запиту
//     console.log(response);
//   })
//   .catch(function (error) {
//     // обробка помилки
//     console.log(error);
//   })
//   .finally(function () {
//     // виконується завжди
//   });
  // apikey=88150c8c

  
const url = 'http://www.omdbapi.com/?apikey=88150c8c';

const cardUrl = './parts/card.html';
let card;
let cardBlock;

axios.get(cardUrl)
    .then(function (response) {
        card = response.data;
        addCardBlockToDocument();
    });

function addCardBlockToDocument() {
    cardBlock = document.getElementById('#card_block');
    cardBlock.innerHTML = card;
}

const listMoviesUrl = '../parts/card.html';
let listMovies = [];

let list = document.getElementById('list');

let moviesList = [];
let findMovie = {};

let search = document.getElementById('searchText');

let messageError = document.getElementById('messageError');

let page = 1;
let totalResults = 0;
let currentPage = 1;
let countPages = 0;

let typesOfMovies = document.getElementsByName('type');
type = (document.querySelector('input[name="type"]:checked')).getAttribute('id');

typesOfMovies.forEach(item => {
    item.addEventListener('click', function () {
        type = item.getAttribute('id');
    });
});

const nav = document.getElementById('nav');

let pagination = document.getElementsByClassName('page-link');

[...pagination].forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();

        const toPage = item.getAttribute('href');

        switch (toPage) {
            case 'first':
                page = 1;
                break;
            case 'prev':
                page > 1 ? page -= 1 : page = 1;
                break;
            case 'page':
                break;
            case 'next':
                page < countPages ? page += 1 : page = countPages;
                break;
            case 'last':
                page = countPages;
                break;
        }

        searchFilms(page);
    });
});

function addListMoviesToDocument(listMovies) {
    list.innerHTML = '';

    if (listMovies.length) {
        listMovies.forEach(item => {
            list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
                <img style="width: 100px" src="${item.Poster}">
                <h2 class="h5">${item.Title} (${item.Year})</h2>
                <button type="button text-right" class="btn btn-info" id="${item.imdbID}" onclick="getMovie(event)">
                    Details
                </button>
            </li> `;
        });
    }
}

function searchFilms(page = 1) {
    messageError.classList.add('d-none');
    nav.classList.add('d-none');
    cardBlock.classList.add('d-none');

    const title = search.value;

    axios.get(`${url}&s=${title}&page=${page}&type=${type}`)
        .then(function (response) {
            if (response.data.Response === "True") {
                totalResults = response.data.totalResults;
                countPages = Math.ceil(totalResults / 10);
                moviesList = response.data.Search;
                addListMoviesToDocument(moviesList);
                addPagination(page);
            } else {
                onCatch(response.Error);
            }
        })
        .catch(function (error) {
            onCatch(error.response.message);
        });
}

function onCatch(error) {
    moviesList = [];
    list.innerHTML = '';
    messageError.text = error;
    messageError.classList.remove('d-none');
}

function addPagination(page) {
    if (totalResults > 10) {
        (document.getElementById('page')).text = page;
        nav.classList.remove('d-none');
    }
}

function getMovie(event) {
    id = event.target.getAttribute('id');
    getFilmById(id);
}

function getFilmById(id) {
    findMovie = {};

    axios.get(`${url}&i=${id}`)
        .then(function (response) {
            if (response.data.Response === "True") {
                findMovie = response.data;
                showCard(findMovie);
            } else {
                onCatch(response.Error);
            }
        })
        .catch(function (error) {
            onCatch(error.response.message);
        });
}
const listArr = [];
function addToWishList(e) {
    const filmItem = {
        id: e.target.dataset.id,
        name: e.target.dataset.name
    };
    listArr.push(JSON.stringify(filmItem))
    localStorage.setItem('watchList', listArr);

    generateWatchList();
}

function generateWatchList() {
    const list = localStorage.getItem('watchList').split('},');

    const formatedArr = list.map((el, index) => {
        if (index < list.length - 1) {
            return el + '}'
        }
        return el;
    });

    let html = '';

    formatedArr.forEach(film => {
        const parsedFilm = JSON.parse(film);
        html += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <h2 class="h5">${parsedFilm.name}</h2>
            <button type="button text-right" class="btn btn-info" id="${parsedFilm.id}">
                Details
            </button>
        </li>
        `;
    });

    document.getElementById('watchlist').innerHTML = html;

    const buttons = document.getElementById('watchlist').querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', getMovie);
    })
}

document.addEventListener('DOMContentLoaded', generateWatchList);

function showCard(movie) {
    if (movie) {
        cardBlock.classList.remove('d-none');

        const button = cardBlock.querySelector('.button__to_buy');

        button.setAttribute('data-id', movie.imdbID);
        button.setAttribute('data-name', movie.Title);
        button.addEventListener('click', addToWishList);

        const title = document.getElementById('title');
        title.textContent = movie.Title || '';

        const year = document.getElementById('year');
        year.textContent = 'Year: ' + (movie.Year || '');

        const description = document.getElementById('description');
        description.textContent = 'Description: ' + movie.Plot || '';

        const languages = document.getElementById('languages');
        languages.textContent = 'Language: ' + movie.Language || '';

        const poster = document.getElementById('poster');
        const posterSrc = movie.Poster || '';
        poster.setAttribute('src', `${posterSrc}`);

        const actors = document.getElementById('actors');
        actors.textContent = 'Actors: ' + movie.Actors || '';

        const genre = document.getElementById('genre');
        genre.textContent = 'Genre: ' + movie.Genre || '';

        const score = document.getElementById('score');
        if (movie.imdbRating !== "N/A") {
            score.classList.remove('d-none');
            score.textContent = movie.imdbRating || ''
        } else {
            score.classList.add('d-none');
        }

        const time = document.getElementById('time');
        time.textContent = movie.Runtime;
    }
}

