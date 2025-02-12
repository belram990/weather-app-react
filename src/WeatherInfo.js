import React from "react";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo (props){
    return(
<div className="WeatherInfo">
<h1>{props.data.city},{" "}{props.data.country}</h1>
<ul>
    <li>
        <DateFormat date={props.data.date} />
        </li>
    <li className="text-capitalize">{props.data.description}</li>
</ul>
<div className="row mt-3">
    <div className="col-7">

    <WeatherIcon code={props.data.icon} alt={props.data.description} size={54} />  
   <WeatherTemperature celsius={props.data.temperature} />
    
    
</div>
<div className="col-3 mt-3 description">      
    <ul>
        <li>
            Humidity: {props.data.humidity}%
        </li>
        <li>
            Wind: {props.data.wind}mph
        </li>
    </ul>
    </div>
 </div>
    </div>
   
    
    );

}