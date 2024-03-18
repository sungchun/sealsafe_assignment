import React, { useState } from 'react';
import axios from "axios"

function Search() {
    const [input, setInput] = useState('')

    function handleChange(event) {
        setInput(event.target.value)
    }
    
    async function handleSubmit(event) {
        event.preventDefault()
        event.target.value = ''
        const config = {
            method: "get",
            url: `api/city-weather/${input}`,
        }
        
        const response = await axios(config)
        return response.data
    }
    
    return (
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <input type="text" placeholder="Type City Name..."/>
        </form>
    );
}

export default Search;