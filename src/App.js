import './App.css';
import React, { useState } from 'react';
import Search from './components/Search';
import Display from './components/Display';
import Login from './components/Login';

function App() {
  const [weatherData, setWeatherData] = useState([])

  return (
    <div className="App">
      <Login />
      <Search weatherData={weatherData} setWeatherData={setWeatherData}/>
      <Display weatherData={weatherData}/>
    </div>
  );
}

export default App;
