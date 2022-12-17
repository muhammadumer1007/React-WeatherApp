import { useState, useEffect } from 'react';
import './App.css';
import Search from './Components/Search';
import { WEATHER_API_URL, WEATHER_API_KEY } from './Api/Api'
import CurrentWeather from './Components/CurrentWeather';
import Header from './Components/Header';
import Spinner from './Components/Spinner';

function App() {
  const [searchValue, setsearchValue] = useState('')
  const [CurrentWeatherValue, setCurrentWeatherValue] = useState(null)
  const [Loader, setLoader] = useState(false)


  const handleSearchChange = (e) => {
    setsearchValue(e.target.value)
  }

  const fetchData = async () => {
    setLoader(true)
    let ApiResponse = await fetch(`${WEATHER_API_URL}q=${searchValue ? searchValue : 'Karachi'}&units=metric&appid=${WEATHER_API_KEY}`)
    let Response = await ApiResponse.json()
    setCurrentWeatherValue(Response)
    setLoader(false)
  }

  useEffect(() => {
  }, [searchValue])

  const handleSearchOnClick = () => {

    fetchData()
    setsearchValue('')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Header />
      <Search handleSearchChange={handleSearchChange} searchValue={searchValue} handleSearchOnClick={handleSearchOnClick} />
      {Loader?<Spinner/>:<CurrentWeather CurrentWeatherValue={CurrentWeatherValue} />}
    </>
  );
}

export default App;
