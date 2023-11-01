const url = 'http://www.omdbapi.com/?apikey=8adb89b7';
const options = {
    method: 'GET'
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="container">
                <SearchPage/>
            </div>
        )
    }
}

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            searchResults: []
        }
    }
    searchHandler = () => {
        let localUrl = `${url}&s=${this.state.searchValue}`;

        fetch(localUrl, options)
            .then(res => res.json())
            .then(res => {
                if(res.Search) {
                    this.setState({ searchResults: res.Search })
                } else {
                    this.setState({ searchResults: [] })
                }
            })
            .catch(err => console.error(err))
    }
    render() {
        let list;
        if(this.state.searchResults.length) {
            list = this.state.searchResults.map((movie, index) => {
                return <Card item={movie} key={index}/>
            })
        }
        return (
            <div className="card">
                <div className="row p-2 mt-2">
                    <SearchField
                        inputHandler={value => this.setState({searchValue: value})}
                        searchHandler={this.searchHandler}
                        searchValue={this.state.searchValue}/>
                </div>
                <div className="row p-2 mt-2">
                    <div className="col-12">
                        <h1>Results for: {this.state.searchValue} <span className="badge bg-secondary">{this.state.searchResults.length} items</span></h1>
                        <div className="row p-2">
                            {list}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class SearchField extends React.Component {
    constructor(props) {
        super(props);
    }

    inputHandler = (value) => {
        this.props.inputHandler(value)
    }

    searchHandler = () => {
        this.props.searchHandler && this.props.searchHandler();
    }

    render() {
        return (
            <div className='row align-content-start'>
                <div className="col-8">
                    <Input pattern="^[A-Za-z\s]*$" type='search' value={this.props.searchValue} onInputChange={this.inputHandler}/>
                </div>
                <div className="col-4">
                    <Button
                        clicker={this.searchHandler}
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
}

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false
        }
    }

    inputHandler = (e) => {
        e.preventDefault();

        const localValue = e.target.value;
        const re = new RegExp(this.props.pattern);
        if(!re.test(localValue)) {
            this.setState({isError: true});
            return false;
        }
        this.setState({isError: false});
        this.props.onInputChange && this.props.onInputChange(e.target.value);
    }

    render() {
        return (
            <input type={this.props.type} className={`form-control ${this.state.isError ? 'error' : ''}`} onChange={this.inputHandler} value={this.props.value}/>
        )
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    clickHandler = (e) => {
        e.preventDefault();
        this.props.clicker && this.props.clicker();
    }

    render() {
        return(
            <button className={`btn text-capitalize ${this.props.classList}`} onClick={this.clickHandler}>
                { this.props.label }
                { this.props.children }
            </button>
        )
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { Poster, Title, Year, imdbID } = this.props.item;
        const image = Poster ? <img src={Poster} className="card-img-top" alt=""/> : null
        return (
            <div className="card col-4">
                { image}
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Year}</p>
                    <a href="#" className="btn btn-primary" data-id={imdbID}>Details</a>
                </div>
            </div>
        )
    }
}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App))