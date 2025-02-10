import React from "react";

import "./Weather.css";

export default function Weather (){
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
<h1>New York</h1>
<ul>
    <li>Monday 11:00 AM</li>
    <li>Sunny</li>
</ul>
<div className="row ">
    <div className="col-6 ">
    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny"/>
    <span className="value">33</span>
    <span className="unit">°F</span>
    
</div>
<div className="col-6 mt-3">
    <ul>
        <li>
Percipitation: 0%
        </li>
        <li>
            Humidity: 49%
        </li>
        <li>
            Wind: 9mph
        </li>
    </ul>
</div>
</div>
        </div>
    );
}