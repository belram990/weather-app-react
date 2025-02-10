import React from 'react';
import Weather from './Weather';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "container">
        <Weather defaultCity="New York" />
  
   
    <footer>
      This project was coded by 👩🏻‍💻 <a href="https://github.com/belram990">Donabel Liotta</a>{" "}
      and is open-sourced on <a href="https://github.com/belram990/weather-app-react">GitHub</a>
       {" "}hosted by <a href="dbweather-app.netlify.app">Netlify</a>.
    </footer>
    </div>
    </div>
  );
}

export default App;
