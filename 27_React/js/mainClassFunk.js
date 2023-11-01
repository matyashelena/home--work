const url = 'http://www.omdbapi.com/?apikey=8adb89b7';
const options = {
    method: 'GET'
}

function App() {
    return (
        <div className="container">
            <SearchPage/>
        </div>
    )
}

function SearchPage() {
    const [searchValue, setSearchValue] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);

    const searchHandler = () => {
        let localUrl = `${url}&s=${searchValue}`;

        fetch(localUrl, options)
            .then(res => res.json())
            .then(res => {
                res.Search ? setSearchResults(res.Search) : setSearchResults([])
            })
            .catch(err => console.error(err))
    }

    let list;
    if(searchResults.length) {
        list = searchResults.map((movie, index) => {
            return <Card item={movie} key={index}/>
        })
    }
    return (
        <div className="card">
            <div className="row p-2 mt-2">
                <SearchField
                    inputHandler={value => setSearchValue(value)}
                    searchHandler={searchHandler}
                    searchValue={searchValue}/>
            </div>
            <div className="row p-2 mt-2">
                <div className="col-12">
                    <h1>Results for: {searchValue} <span className="badge bg-secondary">{searchResults.length} items</span></h1>
                    <div className="row p-2">
                        {list}
                    </div>
                </div>
            </div>
        </div>
    )
}

function SearchField(props) {
    const inputHandler = (value) => {
        props.inputHandler(value)
    }

    const searchHandler = () => {
        props.searchHandler && props.searchHandler();
    }

    return (
        <div className='row align-content-start'>
            <div className="col-8">
                <Input pattern="^[A-Za-z\s]*$" type='search' value={props.searchValue} onInputChange={inputHandler}/>
            </div>
            <div className="col-4">
                <Button
                    clicker={searchHandler}
                    classList='btn-info'
                    label='search'
                />
                <Button
                    classList='btn-secondary ms-1'
                    label='reset'
                >
                    <span className="badge rounded-pill text-bg-primary ms-1"> 110 </span>
                </Button>
            </div>
        </div>
    )
}

function Input(props) {
    const [isError, setIsError] = React.useState(false);

    const inputHandler = (e) => {
        e.preventDefault();

        const localValue = e.target.value;
        const re = new RegExp(props.pattern);
        if(!re.test(localValue)) {
            setIsError(true);
            return false;
        }
        setIsError(false);
        props.onInputChange && props.onInputChange(e.target.value);
    }

    return (
        <input type={props.type} className={`form-control ${isError ? 'error' : ''}`} onChange={inputHandler} value={props.value}/>
    )
}

function Button(props) {
    const clickHandler = (e) => {
        e.preventDefault();
        props.clicker && props.clicker();
    }

    return(
        <button className={`btn text-capitalize ${props.classList}`} onClick={clickHandler}>
            { props.label }
            { props.children }
        </button>
    )
}

function Card(props) {

    const { Poster, Title, Year, imdbID } = props.item;
    const image = Poster ? <img src={Poster} className="card-img-top" alt=""/> : null

    return (
        <div className="card col-4">
            { image }
            <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <p className="card-text">{Year}</p>
                <a href="#" className="btn btn-primary" data-id={imdbID}>Details</a>
            </div>
        </div>
    )
}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App));