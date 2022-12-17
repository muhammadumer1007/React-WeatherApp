import React from 'react'

function CurrentWeather({ CurrentWeatherValue, searchnotFound }) {
    if (CurrentWeatherValue != null) {
        return (
            <>
                {
                    searchnotFound ? (
                        <h3 className='mx-auto'>Search Result Not Found</h3>
                    ) : (
                        <div className="weather">
                            <div className="top">
                                <div>
                                    <p className="city">{CurrentWeatherValue.name}</p>
                                    <p className="weather-description">{CurrentWeatherValue.weather[0].description}</p>
                                </div>
                                <img
                                    alt="weather"
                                    className="weather-icon"
                                    src={`./icons/${CurrentWeatherValue.weather[0].icon}.png`}
                                />
                            </div>
                            <div className="bottom">
                                <p className="temperature">{Math.round(CurrentWeatherValue.main.temp)}°C</p>
                                <div className="details">
                                    <div className="parameter-row">
                                        <span className="parameter-label">Details</span>
                                    </div>
                                    <div className="parameter-row">
                                        <span className="parameter-label">Feels like</span>
                                        <span className="parameter-value">
                                            {Math.round(CurrentWeatherValue.main.feels_like)}°C
                                        </span>
                                    </div>
                                    <div className="parameter-row">
                                        <span className="parameter-label">Wind</span>
                                        <span className="parameter-value">{Math.round(CurrentWeatherValue.wind.speed)} m/s</span>
                                    </div>
                                    <div className="parameter-row">
                                        <span className="parameter-label">Humidity</span>
                                        <span className="parameter-value">{Math.round(CurrentWeatherValue.main.humidity)}%</span>
                                    </div>
                                    <div className="parameter-row">
                                        <span className="parameter-label">Pressure</span>
                                        <span className="parameter-value">{Math.round(CurrentWeatherValue.main.pressure)} hPa</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </>
        )
    }

}

export default CurrentWeather