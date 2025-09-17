import React, { useEffect, useState } from "react";
import SuggestionShimmer from "./shimmer-effects/SuggestionShimmer";
import { Navigate } from "react-router-dom";

export default function Suggestion({
  input,
  setCityData,
  setSuggestions,
  setMyLocalSuggestion,
}) {
  function getCityDataObj(index) {
    const myObj = {};
    myObj["name"] = citiesData[index].name;
    myObj["latitude"] = citiesData[index].latitude;
    myObj["longitude"] = citiesData[index].longitude;
    myObj["country"] = citiesData[index].country;
    myObj["admin1"] = citiesData[index].admin1;
    return myObj;
  }
  const [citiesData, setCitiesData] = useState({});
  if (input === "") return;
  else {
    const myInput = input.replace(/\s+$/, ""); //remove space at end
    useEffect(() => {
      fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${myInput}&count=4&language=en&format=json`
      )
        .then((res) => res.json())
        .then((data) => setCitiesData(data.results))
        .catch((err) => console.log(err));
    }, []);
    return (
      <>
        {citiesData === undefined ? (
          <Navigate
            to="/error?message=Error occurred while fetching data. Try with different input or check your internet connection."
            replace
          />
        ) : Object.keys(citiesData).length === 0 ? (
          <SuggestionShimmer />
        ) : (
          <div className="absolute top-[120%] left-0 w-[100%] bg-[hsl(243,27%,20%)] rounded-lg shadow-lg z-10 p-3">
            {citiesData.map((city, index) => (
              <div
                onClick={(e) => {
                  setCityData(getCityDataObj(e.target.id));
                  setSuggestions(false);
                  setMyLocalSuggestion(false);
                }}
                id={index}
                key={index}
                className="bg-transparent  p-2 rounded-lg hover:border hover:border-[hsl(243,23%,30%)] hover:bg-[hsl(243,23%,24%)]"
              >
                {city.name}, {city.admin1}, {city.country}
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
}
