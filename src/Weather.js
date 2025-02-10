import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather (props){

let [weatherData, setWeatherData] = useState({ready: false});

function handleResponse(response){
    setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        humidity: response.data.temperature.humidity,
        city: response.data.city,
        country: response.data.country,
        date: "Monday 11:00",
        description: response.data.condition.description,
        icon: response.data.condition.icon_url
    });
}
if (weatherData.ready){
  return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="serch" placeholder="Enter a city..." className="form-contol w-100" autoFocus="on" />     
            </div>
            <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
                </div>
            </form>
<h1>{weatherData.city},{" "}{weatherData.country}</h1>
<ul>
    <li>Monday 11:00 AM</li>
    <li className="text-capitalize">{weatherData.description}</li>
</ul>
<div className="row ">
    <div className="col-6 ">
    <img src="{weatherData.icon}" />
    <span className="value">{Math.round(weatherData.temperature)}</span>
    <span className="unit">°F</span>
    
</div>
<div className="col-6 mt-3">
    <ul>
        <li>
            Humidity: {weatherData.humidity}%
        </li>
        <li>
            Wind: {weatherData.wind}mph
        </li>
    </ul>
</div>
</div>  
  </div>  );   
}else{

    let apiKey = "e48bbeefa4cbc305ad9334597oa8t957";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
   }   
   
}