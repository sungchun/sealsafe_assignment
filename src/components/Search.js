import React, { useState } from 'react';
import axios from "axios"

function Search() {
    const [input, setInput] = useState('')

        function handleChange(event) {
            setInput(event.target.value)
        }
    
        async function handleSubmit(event) {
            event.preventDefault()
            const config = {
                method: "get",
                url: `http://127.0.0.1:8000/api/city-weather/${input}/`,
                header: {
                    'Content-Type': 'application/json'
                },
            }
            try {
                const response = await axios(config)
                console.log(response)
                return response.data
            } catch (error) {
                console.log(error)
            }
        }
    
    return (
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <input type="text" placeholder="Type City Name..."/>
        </form>
    )
}

export default Search;