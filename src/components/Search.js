import React, { useState } from 'react';
import axios from "axios"

function Search({weatherData, setWeatherData}) {
    //react componenet for rendering search bar and get requests for city weather.
    const [input, setInput] = useState('')

    function handleChange(event) {
        //sets input state to user input in search bar
        setInput(event.target.value)
    }
   
    function transformInput(city){
        //changes user input to remove whitespace to match string format in database
        const transformed_city = city.replace(" ", "_").toLowerCase()
        return transformed_city
    }        

    async function handleSubmit(event) {
        // get request for city weather on form submit
        event.preventDefault()
        const config = {
            method: "get",
            url: `http://127.0.0.1:8000/api/city-weather/${transformInput(input)}/`,
            header: {
                'Content-Type': 'application/json'
            },
        }
        try {
            const response = await axios(config)
            setWeatherData(...weatherData, response.data)
            console.log(response.data);
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <form className="search" onChange={handleChange} onSubmit={handleSubmit}>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" placeholder="Type City Name..."/>
        </form>
    )
}

export default Search;