import { use, useEffect, useState } from 'react'
import Header from './Components/Header'
import Slogan from './Components/Slogan'
import SearchBar from './Components/SearchBar'
import Frame from './Components/Frame'
import useLocalStorage from './Hooks/useLocalStorage'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  const [cityData, setCityData] = useLocalStorage('cityData' ,{})
  const [currentWeather, setCurrentWeather] = useState({})
  const [suggestions, setSuggestions] = useState(false);
  const [unitOptions, setUnitOptions] = useState(false);
  const [units, setUnits] = useLocalStorage('units', {
    temperature: '',
    windSpeed: 'km/h',
    precipitation: 'mm'
  });

  useEffect(() => {
    if (Object.keys(cityData).length !== 0) {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cityData.latitude}&longitude=${cityData.longitude}${units.temperature === ''?'':'&temperature_unit=fahrenheit'}${units.windSpeed === 'km/h'?'':'&wind_speed_unit=mph'}${units.precipitation === 'mm'?'':'&precipitation_unit=inch'}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`)
        .then(res => res.json())
        .then(data => setCurrentWeather(data))
        .catch(err => console.log(err))
    }
  }, [cityData, units])

  console.log(cityData);
  console.log(currentWeather);
  console.log(units);
  return (
    <>
      <div className='container w-[90%] sm:w-[70%] max-w-[1200px] mx-auto lg:w-[90%] xl:w-[80%]' onClick={() => setSuggestions(false)}>
        <main>
          <Header setUnitOptions={setUnitOptions} unitOptions={unitOptions} setUnits={setUnits} units={units}/>
          <Slogan />
          <SearchBar placeholder="Search for a place..." btnText="Search" setCityData={setCityData} suggestions={suggestions} setSuggestions={setSuggestions} setUnits={setUnits}/>
          <Frame cityData={cityData} currentWeather={currentWeather} units={units} />
        </main>
      </div>
    </>
  )
}

export default App
