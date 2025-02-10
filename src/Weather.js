import React from "react";

import "./Weather.css";

export default function Weather (){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="serch" placeholder="Enter a city..." className="form-contol"/>     
            </div>
            <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary"/>
                </div>
                </div>
            </form>
<h1>New York</h1>
<ul>
    <li>Monday 11:00</li>s
    <li>Sunny</li>
</ul>
<div className="row">
    <div className="col-6"></div>
    ☀️
    33°F
</div>
<div className="col-6">
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
    );
}