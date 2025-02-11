import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

import "./Weather.css";

export default function WeatherIcon (props){
   

    return(
        <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="#facf5a"
    size="512"
    animate="true"
    />
    );
}