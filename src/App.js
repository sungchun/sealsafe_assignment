import './App.css';
import React, { useState } from 'react';
import Search from './components/Search';
import Display from './components/Display';


function App() {
  const [weatherData, setWeatherData] = useState([])

  return (
    <div className="App">
      <Search weatherData={weatherData} setWeatherData={setWeatherData}/>
      <Display weatherData={weatherData}/>
    </div>
  );
}

export default App;
