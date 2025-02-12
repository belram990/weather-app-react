import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForcast.css";

export default function WeatherForcast (){
    return(
        <div className="WeatherForcast">
            <div className="row">
                <div className="col">
                    <div className="Forcast-day">Tue</div>
                     <WeatherIcon code="snow-day" size={35} />  
                    <div className="ForcastTemperature">
                        <span className="MaxTemperature">19°</span> 
                        <span className="MinTemperature">10°</span>
                        </div>
                </div> 
                
            </div>

        </div>
    )
}