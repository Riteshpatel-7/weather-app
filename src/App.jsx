import { use, useEffect, useState } from "react";
import Header from "./Components/Header";
import useLocalStorage from "./Hooks/useLocalStorage";
import { Outlet } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  const [suggestions, setSuggestions] = useState(false);
  const [hourlyDropdown, setHourlyDropdown] = useState(false);
  const [unitOptions, setUnitOptions] = useState(false);
  const [myLocalSuggestion, setMyLocalSuggestion] = useState(false);
  const [units, setUnits] = useLocalStorage("units", {
    temperature: "",
    windSpeed: "km/h",
    precipitation: "mm",
  });

  return (
    <>
      <div
        className="container w-[90%] sm:w-[70%] max-w-[1200px] mx-auto lg:w-[90%] xl:w-[80%]"
        onClick={() => {
          setSuggestions(false);
          setUnitOptions(false);
          setHourlyDropdown(false);
          setMyLocalSuggestion(false);
        }}
      >
        <main>
          <Header
            setUnitOptions={setUnitOptions}
            unitOptions={unitOptions}
            setUnits={setUnits}
            units={units}
          />
          <Outlet
            context={{
              units,
              setUnits,
              suggestions,
              setSuggestions,
              hourlyDropdown,
              setHourlyDropdown,
              myLocalSuggestion,
              setMyLocalSuggestion
            }}
          />
        </main>
      </div>
    </>
  );
}

export default App;
