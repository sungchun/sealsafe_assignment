function Display({weatherData}) {
    return (
        <div>
            {
                weatherData ? (weatherData.map((data) => {
                    return (
                        <div>
                            <h1>{data.city_name}</h1>
                            <p>{data.temperature}</p>
                            <p>{data.humidity}</p>
                            <p>{data.condition}</p>
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