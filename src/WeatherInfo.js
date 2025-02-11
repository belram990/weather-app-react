import React from "react";
import DateFormat from "./DateFormat";


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
<div className="row ">
    <div className="col-6 ">
    <img src="{props.iconUrl}" alt={props.description} />
    <span className="value">{Math.round(props.data.temperature)}</span>
    <span className="unit">°F</span>
    
</div>
<div className="col-6 mt-3">
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