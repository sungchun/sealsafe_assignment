import './App.css';
import React, { useState } from 'react';
import Search from './components/Search';
import Display from './components/Display';
import Login from './components/Login';

function App() {
  const [weatherData, setWeatherData] = useState([])

  return (
    <div className="App">
      <Search weatherData={weatherData} setWeatherData={setWeatherData}/>
      <Display weatherData={weatherData}/>
      <Login />
    </div>
  );
}

export default App;
