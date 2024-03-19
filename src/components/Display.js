function Display({weatherData}) {
    return (
        /*displays list of weather data elements for each instance of
        weather data found in api, if none return nothing. 
        */
        <div className="display">
            {
                weatherData ? (weatherData.map((data) => {
                    return (
                        <div className="weather">
                            <h1>City: {data.city_name}</h1>
                            <p>Temp: {data.temperature}&deg;C.</p>
                            <p>Humidity: {data.humidity}</p>
                            <p>Condition: {data.condition}</p>
                        </div>
                    );
                })):(
                    <></>
                )
            }
        </div>
    );
}

export default Display;