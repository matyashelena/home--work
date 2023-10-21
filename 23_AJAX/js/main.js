const API_KEY = '8adb89b7';
// http://www.omdbapi.com/?i=tt389618&apikey=8adb89b7
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
let PAGE = 1;
let lastPage = 1;

function searchMovie() {
    const movieName = document.getElementById('searchText').value;
    console.log(movieName);
    if (movieName) {
        axios.get(BASE_URL + `&s=${movieName}&page=${PAGE}`)
            .then(function (res) {
                console.log(res.data);
                lastPage = Math.ceil(res.data.totalResults / 10);
                generateSearchResult(res.data.Search);

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
         </li>`;
    });
    html = html + `</ul>`;
    document.getElementById('list').innerHTML = html;
}

function nextPage(event) {
    event.preventDefault();
    PAGE++;
    goToPage(PAGE);
}
function prevPage(event) {
    event.preventDefault();
    PAGE--;
    goToPage(PAGE);
}
function goToPage(page) {
    PAGE = page;
    searchMovie();
}
function goToLast(event) {
    event.preventDefault();
    PAGE = lastPage;
    goToPage(PAGE);
}
function goToFirst(event) {
    event.preventDefault();
    PAGE = 1;
    goToPage(PAGE);
}

let page = 1;
let totalResults = 0;
let currentPage = 1;
let countPages = 0;
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