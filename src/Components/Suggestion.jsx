import React, { useEffect, useState } from 'react'
import SuggestionShimmer from './shimmer-effects/SuggestionShimmer';

export default function Suggestion({ input, setCityData, setSuggestions }) {
    const [citiesData, setCitiesData] = useState({});
    if (input === '')
        return;
    else {
        useEffect(() => {
            fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=4&language=en&format=json`)
                .then(res => res.json())
                .then(data => setCitiesData(data.results))
                .catch(err => console.log(err))
        }, [])
        return <>{Object.keys(citiesData).length === 0 ? <SuggestionShimmer /> : <div className='absolute top-[120%] left-0 w-[100%] bg-[hsl(243,27%,20%)] rounded-lg shadow-lg z-10 p-3'>
            {citiesData.map((city, index) => (
                <div onClick={(e) => {setCityData(citiesData[e.target.id]); setSuggestions(false) }} id={index} key={index} className='bg-transparent  p-2 rounded-lg hover:bg-[hsl(243,23%,24%)]'>{city.name}, {city.admin1}, {city.country}</div>
            ))}
        </div>}
        </>
    }
}
