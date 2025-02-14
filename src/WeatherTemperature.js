import React, {useState} from "react";


export default function WeatherTemperature (props){
    let [unit, setUnit] = useState ("fahrenheit");
  
  function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function  showCelsius(event){
        event.preventDefault();
        setUnit("celsius")
    }
if (unit === "fahrenheit"){
return(
        <span className="WeatherTemprature">
        <span className="value">
            {Math.round(props.fahrenheit)}
            </span>
    <span className="unit"> 
        <a href="/" onClick={showCelsius}>
       °C</a>
      {" "} |
       °F 
        </span> 
    </span> 
     );
   
} else {
    let celsius =(props.fahrenheit -32) * 5/9;
       return(
        <span className="WeatherTemprature">
        <span className="value">
            {Math.round(celsius)}
            </span>
    <span className="unit">
       °C
        |{" "}
        <a href="/" onClick={showFahrenheit}>°F </a>
        </span> 
    </span> 
    );
}
}

