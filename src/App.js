import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import WeatherBlock from './components/WeatherBlock';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';


const API_KEY = process.env.REACT_APP_USER_TOKEN;

const App = () => {

  const [locationName, setLocationName] = useState()
  const [weather, setWeather] = useState()
  const [errorMessage, setErrorMessage] = useState()

  const citySearch = document.getElementById('citySearch')

  const handleLocationChange = (event) => {
    setLocationName(event.target.value)
  }

  async function getWeather(event) {
    event.preventDefault()
    setWeather()
    citySearch.value = ''

    axios
      .get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${locationName}`)
      .then(response => {

        if (response.data.length > 0) {
          axios
            .get(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${response.data[0].Key}?apikey=${API_KEY}&metric=true`)
            .then(response => {
              setWeather(response.data)
              setErrorMessage('')
            })
        }
        else {
          setErrorMessage('I`m so sorry!')
        }
      })
      .catch(err => {
        setErrorMessage('Some problems with API request')
      })
  }

  return (
    <div className='App'>
      <Header />
      <main>
        <div className='row'>
          <div className='col l3 s1 m1'></div>
          <form className='col l5 s10 m10'>
            <div className='input-field'>
              <input
                id='citySearch'
                type="email"
                className="validate "
                autoComplete='off'
                autoFocus
                onChange={handleLocationChange}
                placeholder='Enter the name of a city'
              />
              <button className="light-blue darken-2 btn-small search-btn" type="submit" onClick={getWeather}><i className="material-icons left">cloud</i>Show weather info</button>
            </div>
          </form>
          <div className='col l3 s1 m1'></div>
        </div>
        <WeatherBlock weather={weather} locationName={locationName} />
        <Error errorMessage={errorMessage} />
      </main>
      <Footer />
    </div>
  )
}

export default App;