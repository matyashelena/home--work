const el = React.createElement;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  clickHandler = () => {
    console.log('Hello');
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div className='container'>
        <button
         className='btn'
         onClick={this.clickHandler}>
          click me please
          </button>
          
        <Badge value={this.state.counter}/>
      </div>
    )
    // return el('div', null, [
    //   el(
    //     'button',
    //     {
    //       onClick: this.clickHandler,
    //       className: 'btn btn-info',
    //       key: 'my-btn'
    //     },
    //     'click me please'
    //   ),
    //   el(Badge, { value: this.state.counter })
    // ])
  }
}

class Badge extends React.Component {
  constructor(props) {
    super(props)
  }
  // el('span',{key: 'my-span', className: 'badge'}, this.props.value)
  render() {
    return <span className="badge">{this.props.value}</span>
  }
}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App));