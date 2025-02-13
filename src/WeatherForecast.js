import React, {useState} from "react";
import axios from "axios";

import DailyForecast from "./DailyForecast";

import "./WeatherForecast.css";



export default function WeatherForecast (props){
let [load, setLoad] = useState(false);
let [forecast, setForecast] = useState(null);

function handleResponse(response){
    setForecast(response.data.daily);
 setLoad(true);
}

if (load) {
console.log(forecast)
return (
    <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function(dailyForcast, index){
                if (index < 6){
                return(
                     <div className="col" key={index}>
               <DailyForecast data={dailyForcast} />
            </div>
                );
            }
            })}
           
            
        </div>
    </div> 
);
} else { 

   let apiKey = "e48bbeefa4cbc305ad9334597oa8t957";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
   axios.get(apiURL).then(handleResponse);

   return null;
   
}
}
