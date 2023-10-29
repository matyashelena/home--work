"use strict";

var weatherList = [{
  city: 'Lisbon',
  temp: '21',
  icon: 'icon-sun',
  width: 50
}, {
  city: 'Paris',
  temp: '11',
  icon: 'icon-rain',
  width: 25
}];
var app = document.getElementById('app');
var root = ReactDOM.createRoot(app);
root.render(React.createElement(App));