import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";


export default function Weather (props){
let [weatherData, setWeatherData] = useState({ready: false});
let [city, setCity] = useState(props.defaultCity);

function handleResponse(response){
   
    setWeatherData({
        ready: true,
        temperature:response.data.temperature.current,
        wind: response.data.wind.speed,
        humidity: response.data.temperature.humidity,
        city: response.data.city,
        country: response.data.country,
        coordinates: response.data.coordinates,
        date: new Date (response.data.time * 1000),
        description: response.data.condition.description,
        icon: response.data.condition.icon
    });
}
function search (){
    let apiKey = "e48bbeefa4cbc305ad9334597oa8t957";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handlesubmit(event){
    event.preventDefault();
    search();
}

function handleCityChange(event){
setCity(event.target.value);

}

if (weatherData.ready){
  return(
        <div className="Weather">
            <form onSubmit={handlesubmit}>
                <div className="row">
                    <div className="col-9">
                <input type="search" 
                placeholder="Enter a city..." 
                className="form-contol w-100" 
                autoFocus="on" 
                onChange={handleCityChange}
                />     
            </div>
            <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
                </div>
            </form>

<WeatherInfo data={weatherData}/>
<WeatherForecast coordinates={weatherData.coordinates} />
  </div> 
   );   
}else{

    search();
    return "Loading...";
   }   
   
}