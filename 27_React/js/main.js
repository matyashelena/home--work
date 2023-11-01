const weatherList = [
  {
      city: 'Lisbon',
      temp: '21',
      icon: 'wi-day-sunny',
      width: 'w-50',
      link: 'https://www.timeanddate.com/weather/portugal/lisbon',
      bg: '#70B8DB'
  },
  {
      city: 'Paris',
      temp: '11',
      icon: 'wi-day-sleet',
      width: 'w-25',
      link: 'https://www.timeanddate.com/weather/france/paris',
      bg: '#33CCCC'
  },
  {
    city: 'Belgrade',
    temp: '15',
    icon: 'wi-day-cloudy',
    width: 'w-25',
    link: 'https://www.timeanddate.com/weather/serbia/belgrade',
    bg: '#B894B8'
},
{
    city: 'Venice',
    temp: '21',
    icon: 'wi-day-cloudy-high',
    width: 'w-25',
    link: 'https://www.timeanddate.com/weather/italy/venice',
    bg: '#C24747'
},
{
  city: 'Tel-Avive',
  temp: '32',
  icon: 'wi-hot',
  width: 'w-25',
  link: 'https://www.timeanddate.com/weather/israel/tel-aviv',
  bg: '#E2674A'
},
{
  city: 'Cair',
  temp: '21',
  icon: 'wi-day-sunny',
  width: 'w-25',
  link: 'https://www.timeanddate.com/weather/egypt/cairo',
  bg: '#FFCC66'
},
{
  city: 'New-York',
  temp: '17',
  icon: 'wi-day-sleet-storm',
  width: 'w-25',
  link: 'https://www.timeanddate.com/weather/usa/new-york',
  bg: '#99CC99'
},
{
  city: 'New-Delhi',
  temp: '17',
  icon: 'wi-rain-wind',
  width: 'w-25',
  link: 'https://www.timeanddate.com/weather/india/new-delhi',
  bg: '#669999'
},
{
  city: 'San-Francisco',
  temp: '15',
  icon: 'wi-day-cloudy',
  width: 'w-50',
  link: 'https://www.timeanddate.com/weather/usa/san-francisco',
  bg: '#CC6699'
},
{
  city: 'Tokyo',
  temp: '8',
  icon: 'wi-night-clear',
  width: 'w-25',
  link: 'https://www.timeanddate.com/weather/japan/tokyo',
  bg: '#339966'
},
{
  city: 'Sydney',
  temp: '25',
  icon: 'wi-night-cloudy',
  width: 'w-100',
  link: 'https://www.timeanddate.com/weather/australia/sydney',
  bg: '#666699'
}
]

function App() {
  return (
      <div className="container">
        <div className="main_box">
        <p className="title">CSS Weather Forecast</p>
          <WeatherCard/>
        <p className="description_bottom">Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
      </div>
      </div>
  )
}

function WeatherCard() {
  return (
    <div className="grid_box">
      {weatherList.map((card, index) => {
      return <Card item={card} key={index}/>
      })}
    </div>
  )
}

function Card(props) {
  const { city, temp, icon, width, bg, link } = props.item;
  const classIcon = `wi ${icon}`;
  return (
    <div className={width} style={{backgroundColor: bg}}>
      <p className="card-title">{city}</p>
      <span className="card_temp">{temp}&#8451;</span>
      <i className={classIcon}></i>
      <a target="_blank" className="link_city" href={link}></a>
    </div> 
  )
}


const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App))