const moment = require('moment');

export class UI {
    
    constructor() {
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.icon = document.getElementById('weather-icon');
        this.string = document.getElementById('weather-string');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
        this.weathersunrise = document.getElementById('weather-sunrise');
        this.weathersunset = document.getElementById('weather-sunset');
        this.lastupdate = document.getElementById('last-update');
    }

    render(weather) {

        moment.locale('es');
        if(weather.cod === '404') {
            alert("Ciudad no encontrada =(");
        } else {
        const sunrise = new Date(weather.sys.sunrise * 1000);
        const sunset = new Date(weather.sys.sunset * 1000);
        const lastupdate = new Date(weather.dt * 1000);
        this.location.textContent = weather.name + '/' + weather.sys.country;
        this.desc.textContent = weather.weather[0]['description'];
        this.icon.style.background = `url('http://openweathermap.org/img/w/${weather.weather[0]['icon']}.png')`;
        this.string.textContent = 'Actual: ' + weather.main.temp + '°C';
        this.humidity.textContent = 'Humedad: ' + weather.main.humidity + '%';
        this.wind.textContent = 'Viento: ' + weather.wind.speed + ' m/s';
        this.weathersunrise.textContent = 'Amanecer: ' + moment(sunrise).format('LT');
        this.weathersunset.textContent = 'Atardecer: ' + moment(sunset).format('LT');
        this.lastupdate.textContent = 'Última actualización: ' + moment(lastupdate).format('L') + ' ' + moment(lastupdate).format('LT');
        }
    }
}