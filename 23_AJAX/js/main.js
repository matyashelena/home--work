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
                console.log(res.data.Search);
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
function goToPage(page) {
    PAGE = page;
    searchMovie();
}
function goToLast(event) {
    event.preventDefault();
    PAGE = lastPage;
    goToPage(PAGE);
}