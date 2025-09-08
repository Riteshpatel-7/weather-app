import { useState } from 'react'
import Header from './Components/Header'
import Slogan from './Components/Slogan'
import SearchBar from './Components/SearchBar'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  const [cityData, setCityData] = useState({})
  console.log(cityData);
  return (
    <>
      <div className='container w-[80%] max-w-[1200px] mx-auto'>
        <main>
          <Header />
          <Slogan />
          <SearchBar placeholder="Search for a place..." btnText="Search" setCityData={setCityData} />
        </main>
      </div>
    </>
  )
}

export default App
