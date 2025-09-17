import Slogan from "./Slogan";
import SearchBar from "./SearchBar";
import Frame from "./Frame";
import useLocalStorage from "../Hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";

export default function Home() {
  const {
    units,
    setUnits,
    suggestions,
    setSuggestions,
    hourlyDropdown,
    setHourlyDropdown,
    myLocalSuggestion,
    setMyLocalSuggestion,
  } = useOutletContext();
  const [cityData, setCityData] = useLocalStorage("cityData", {});
  const [currentWeather, setCurrentWeather] = useState({});
  const [isShimmer, setIsShimmer] = useState(false);

  useEffect(() => {
    if (Object.keys(cityData).length !== 0) {
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${cityData.latitude}&longitude=${cityData.longitude}${units.temperature === "" ? "" : "&temperature_unit=fahrenheit"}${units.windSpeed === "km/h" ? "" : "&wind_speed_unit=mph"}${units.precipitation === "mm" ? "" : "&precipitation_unit=inch"}&current=temperature_2m,wind_speed_10m,is_day&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
      )
        .then((res) => res.json())
        .then((data) => setCurrentWeather(data))
        .catch((err) => (
          <Navigate to="/error?message=Error occurred while fetching data. Try with different input or check your internet connection." />
        ));
    }
  }, [cityData, units]);

  console.log(cityData);
  console.log(currentWeather);
  console.log(units);

  return (
    <>
      <Slogan />
      <SearchBar
        placeholder="Search for a place..."
        btnText="Search"
        setCityData={setCityData}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
        setUnits={setUnits}
        myLocalSuggestion={myLocalSuggestion}
        setMyLocalSuggestion={setMyLocalSuggestion}
        setIsShimmer={setIsShimmer}
      />
      <Frame
        cityData={cityData}
        currentWeather={currentWeather}
        units={units}
        hourlyDropdown={hourlyDropdown}
        setHourlyDropdown={setHourlyDropdown}
        isShimmer={isShimmer}
      />
    </>
  );
}
