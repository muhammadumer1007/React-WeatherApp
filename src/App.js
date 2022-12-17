import { useState, useEffect } from 'react';
import './App.css';
import Search from './Components/Search';
import { WEATHER_API_URL, WEATHER_API_KEY } from './Api/Api'
import CurrentWeather from './Components/CurrentWeather';
import Header from './Components/Header';
import Spinner from './Components/Spinner';

function App() {
  const [searchValue, setsearchValue] = useState('')
  const [searchnotFound, setsearchnotFound] = useState(false)
  const [CurrentWeatherValue, setCurrentWeatherValue] = useState(null)
  const [Loader, setLoader] = useState(false)


  const handleSearchChange = (e) => {
    setsearchValue(e.target.value)
  }

  const fetchData = async () => {
    setLoader(true)
    try {
      let ApiResponse = await fetch(`${WEATHER_API_URL}q=${searchValue ? searchValue : 'Karachi'}&units=metric&appid=${WEATHER_API_KEY}`)
      let Response = await ApiResponse.json()
      if (Response.message === 'city not found') {
        setsearchnotFound(true)
      }
      else {
        setsearchnotFound(false)
        setCurrentWeatherValue(Response)
      }
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoader(false)
    }
  }

  useEffect(() => {
  }, [searchValue])

  const handleSearchOnClick = (e) => {
    e.preventDefault()
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
      {Loader ? <Spinner /> : <CurrentWeather CurrentWeatherValue={CurrentWeatherValue} searchnotFound={searchnotFound} />}
    </>
  );
}

export default App;
