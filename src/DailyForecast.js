import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function DailyForecast(props){
   
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
        return days[day];
    }
    return(
        <div>
         <div className="DailyForcast">{day()}</div>
                        <WeatherIcon code={props.data.condition.icon} size={35} />
                        <div className="DailayTemperature">
                            <span className="MaxTemperature">{Math.round(props.data.temperature.maximum)}°</span>
                            <span className="MinTemperature">{Math.round(props.data.temperature.minimum)}°</span>
        
                        </div>
                        </div>
    );
}