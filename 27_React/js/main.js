const weatherList = [
  {
      city: 'Lisbon',
      temp: '21',
      icon: 'wi wi-day-sunny',
      width: 'w-50',
      link: 'https://www.timeanddate.com/weather/portugal/lisbon'
  },
  {
      city: 'Paris',
      temp: '11',
      icon: 'wi wi-night-clear',
      width: 'w-25',
      link: 'https://www.timeanddate.com/weather/france/paris'
  },
  {
    city: 'Belgrade',
    temp: '15',
    icon: 'wi wi-night-clear',
    width: 'w-25',
    link: 'https://www.timeanddate.com/weather/serbia/belgrade'
},
{
    city: 'Venice',
    temp: '21',
    icon: 'wi wi-night-clear',
    width: 'w-25',
    link: 'https://www.timeanddate.com/weather/italy/venice'
},
{
  city: 'Tel-Avive',
  temp: '32',
  icon: 'wi wi-night-clear',
  width: 'w-25',
  link: 'https://www.timeanddate.com/weather/israel/tel-aviv'
},
{
  city: 'Cair',
  temp: '21',
  icon: 'wi wi-night-clear',
  width: 'w-25',
  link: 'https://www.timeanddate.com/weather/egypt/cairo'
},
{
  city: 'New-York',
  temp: '17',
  icon: 'wi wi-night-clear',
  width: 'w-25',
  link: 'https://www.timeanddate.com/weather/usa/new-york'
},
{
  city: 'New-Delhi',
  temp: '17',
  icon: 'wi wi-night-clear',
  width: 'w-25',
  link: 'https://www.timeanddate.com/weather/india/new-delhi'
},
{
  city: 'San-Francisco',
  temp: '15',
  icon: 'wi wi-night-clear',
  width: 'w-50',
  link: 'https://www.timeanddate.com/weather/usa/san-francisco'
},
{
  city: 'Tokyo',
  temp: '8',
  icon: 'wi wi-night-clear',
  width: 'w-25',
  link: 'https://www.timeanddate.com/weather/japan/tokyo'
},
{
  city: 'Sydney',
  temp: '25',
  icon: 'wi wi-night-clear',
  width: 'w-100',
  link: 'https://www.timeanddate.com/weather/australia/sydney'
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
      console.log(card);
      return <Card item={card} key={index}/>
      })}
    </div>
  )
}

function Card(props) {
  const { city, temp, icon, width, link } = props.item;
  return (
    <div className={width}>
      <p className="card-title">{city}</p>
      <span className="card_temp">{temp} &#8451;</span>
      <i className={icon}></i>
      <a target="_blank" className="link_city" href={link}></a>
    </div> 
  )
}


const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App))