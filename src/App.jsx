import { useState } from 'react'
import Header from './Components/Header'
import Slogan from './Components/Slogan'
import SearchBar from './Components/SearchBar'
import Frame from './Components/Frame'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  const [cityData, setCityData] = useState({})
  console.log(cityData);
  return (
    <>
      <div className='container w-[90%] sm:w-[70%] max-w-[1200px] mx-auto lg:w-[90%] xl:w-[80%]'>
        <main>
          <Header />
          <Slogan />
          <SearchBar placeholder="Search for a place..." btnText="Search" setCityData={setCityData} />
          <Frame weatherData={cityData} />
        </main>
      </div>
    </>
  )
}

export default App
