const API_KEY = '8adb89b7';
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;
const options = {
  method: "GET"
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

  searchHandler = (event) => {
    event.preventDefault();
    console.log(this.state.searchValue);
    let localUrl = `${BASE_URL}&s=${this.state.searchValue}`
    fetch(localUrl, options)
    .then(res => res.json())
    .then(res => this.setState({ searchResults: res.Search}))
    .catch(err => console.error(err))
  }

  render () {
    return (
      <div className="card">
        <div className="row p-2 mt-2">
          
        </div>
        <div className="row p-2 mt-2">
          <div className="col-4">
            <h1>Results for: {this.state.searchValue}
              <span className="badge bg-secondary">
              {this.state.searchResults.length} items
              </span>
            </h1>
            <SearchInput/>
          </div>
        </div>
      </div>
    )
  }
}

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  inputHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({
      searchValue: event.target.value
    })
  }

  
  render() {
    return (
      
        <div>
        <div className="col-8">
            <input type="search" className='form-control' onChange={this.inputHandler} />
        </div>
        <div className="col-4">
          <button className="btn btn-info" onClick={this.clickHeandler}>Search</button>
        </div>
        </div>
      
    )
  }

}

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  clickHeandler = (e) => {
    e.preventDefault();
    this.props.clicker && this.props.clicker()
  }
}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App));