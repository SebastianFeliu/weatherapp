require ('./index.css');
const { UI } = require ('./UI.js');
const { Weather } = require('./weather.js');
const { Store } = require('./store.js');

const ui = new UI();
const store = new Store();
const { city, countryCode } = store.getLocationData();
const weather = new Weather(city,countryCode);


async function fecthWeather() {
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    //console.log(city,countryCode);
    weather.changeLocation(city,countryCode);
    store.setLocationData(city,countryCode);
    fecthWeather();
    e.preventDefault();
});
document.addEventListener('DOMContentLoaded', fecthWeather);