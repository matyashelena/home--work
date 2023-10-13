const API_KEY = '8adb89b7';
// http://www.omdbapi.com/?i=tt389618&apikey=8adb89b7
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
let PAGE = 1;

function searchMovie() {
    const movieName = document.getElementById('searchText').value;
    console.log(movieName);
    axios.get(BASE_URL+`&s=${movieName}&page=${PAGE}`)
        .then(function (res) {
            console.log(res.data);
        })
}
function nextPage(event) {
    event.preventDefault();
    PAGE++;
    searchMovie();
}