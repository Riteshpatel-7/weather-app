import { useState } from "react";
import sunnyIcon from "../assets/images/icon-sunny.webp";
import DataCard from "./DataCard";
import DailyForecastCard from "./DailyForecastCard";
import icon1 from "../assets/images/icon-rain.webp";
import icon2 from "../assets/images/icon-snow.webp";
import icon3 from "../assets/images/icon-storm.webp";
import icon4 from "../assets/images/icon-overcast.webp";
import icon5 from "../assets/images/icon-partly-cloudy.webp";
import icon6 from "../assets/images/icon-fog.webp";
import icon7 from "../assets/images/icon-drizzle.webp";
import dropdownIcon from "../assets/images/icon-dropdown.svg";
import HourlyForecastEle from "./HourlyForecastEle";
import HourlyDropdown from "./HourlyDropdown";
import Home from "./Home";
import HomeShimmer from "./shimmer-effects/HomeShimmer";
const today = new Date();

const options = {
  weekday: "long", // "Monday"
  year: "numeric", // "2025"
  month: "short", // "Sep"
  day: "numeric", // "10"
};

const formattedDate = today.toLocaleDateString("en-US", options);

function getWeatherIcon(code) {
  if (code === 0 || code === 1) return sunnyIcon;
  else if (code === 2) return icon5;
  else if (code === 3) return icon4;
  else if (code >= 45 && code <= 48) return icon6;
  else if (code >= 51 && code <= 57) return icon7;
  else if (code >= 61 && code <= 67) return icon1;
  else if (code >= 71 && code <= 77) return icon2;
  else if (code >= 80 && code <= 82) return icon1;
  else if (code >= 85 && code <= 86) return icon2;
  else if (code >= 95 && code <= 99) return icon3;
  else return errorIcon;
}

function getHourlyIndexes(date, currentWeather) {
  const indexes = [];
  for (let i = 0; i < currentWeather.hourly.time.length; i++) {
    if (currentWeather.hourly.time[i].includes(date) && i >= currentWeather.hourly.time.indexOf(currentWeather.current.time.slice(0, 14) + "00")) {
      indexes.push(i);
    }
  }
  return indexes;
}

function getTimeInAMPM(time) {
  let hour = parseInt(time);
  const ampm = hour >= 12 ? " PM" : " AM";
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  return hour + ampm;
}

export default function ({ cityData, currentWeather, units, hourlyDropdown, setHourlyDropdown }) {
  if (localStorage.getItem("cityData") === null || Object.keys(cityData).length === 0) {
    return (
      <div className="h-[300px] flex flex-col justify-center items-center opacity-60">
        <img src={icon5} alt="icon" />
        <p className="lg:text-2xl mt-[-2rem]">
          Please Enter Your Location . . .
        </p>
      </div>
    );
  }

  if (Object.keys(currentWeather).length === 0) {
    return (
      <HomeShimmer />
    );
  }

  const currentTimeIndex = currentWeather.hourly.time.indexOf(
    currentWeather.current.time.slice(0, 14) + "00"
  );
  const forecast = {
    "Feels Like": `${currentWeather.hourly.apparent_temperature[currentTimeIndex]}°`,
    Humidity: `${currentWeather.hourly.relative_humidity_2m[currentTimeIndex]}%`,
    Wind: `${Math.round(parseFloat(currentWeather.hourly.wind_speed_10m[currentTimeIndex]))} ${units.windSpeed}`,
    Precipitation: `${currentWeather.hourly.precipitation[currentTimeIndex]} ${units.precipitation}`,
  };

  const dailyForecast = [];
  for (let i = 0; i < currentWeather.daily.time.length; i++) {
    const date = new Date(currentWeather.daily.time[i]);
    const day = date.toLocaleDateString("en-US", { weekday: "short" });
    const min = Math.round(
      parseFloat(currentWeather.daily.temperature_2m_min[i])
    );
    const max = Math.round(
      parseFloat(currentWeather.daily.temperature_2m_max[i])
    );
    const icon = getWeatherIcon(currentWeather.daily.weathercode[i]);
    dailyForecast.push({ day, min, max, icon });
  }

  const [hourlyDate, setHourlyDate] = useState(currentWeather.daily.time[0]);
  const [weekday, setWeekDay] = useState(today.toLocaleDateString("en-US", {weekday: 'long'}));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      <div className="lg:col-span-2">
        <section className='flex flex-col justify-between items-center bg-[url("/bg-today-small.svg")] lg:bg-[url("/bg-today-large.svg")] lg:flex-row bg-cover bg-center rounded-2xl p-6 lg:px-8 lg:py-12 text-white'>
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <h2 className="text-2xl font-bold">
              {cityData.name.replace("ā", "a")}, {cityData.admin1},{" "}
              {cityData.country}
            </h2>
            <p className="opacity-75">{formattedDate}</p>
          </div>
          <div className="flex gap-8 lg:gap-4 items-center">
            <img
              className="moving h-24 lg:h-[120px]"
              src={getWeatherIcon(
                currentWeather.hourly.weather_code[currentTimeIndex]
              )}
              alt="Icon"
            />
            <h1 className="text-7xl lg:text-8xl font-semibold italic">
              {Math.round(parseFloat(currentWeather.current.temperature_2m))}°
            </h1>
          </div>
        </section>
      </div>
      <div className="grid gap-6 w-full grid-cols-[repeat(auto-fit,minmax(132px,1fr))] lg:col-span-2">
        {Object.entries(forecast).map(([title, data], index) => (
          <DataCard key={index} title={title} data={data} />
        ))}
      </div>
      <div className="lg:col-span-2">
        <p className="font-semibold">Daily forecast</p>
        <div className="grid gap-4 xl:gap-5 w-full grid-cols-[repeat(auto-fit,minmax(72px,1fr))] mt-4">
          {dailyForecast.map((dayInfo, index) => (
            <DailyForecastCard
              key={index}
              day={dayInfo.day}
              min={dayInfo.min}
              max={dayInfo.max}
              icon={dayInfo.icon}
            />
          ))}
        </div>
      </div>
      <div className="w-[100%] max-h-[564px] xl:max-h-[574px] lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-end-4 flex flex-col gap-4 bg-[hsl(243,27%,20%)] rounded-2xl p-4 overflow-y-scroll">
        <div className="flex justify-between items-center xl:mb-2">
          <p className="text-white font-semibold">Hourly forecast</p>
          <button onClick={(e)=>{e.stopPropagation(); setHourlyDropdown(!hourlyDropdown)}} className="flex items-center justify-center gap-2 text-[0.96rem] relative bg-[hsl(243,23%,30%)] rounded-md px-4 py-1">
            <span>{weekday}</span>
            <img src={dropdownIcon} alt="dropdown" />
            <HourlyDropdown hourlyDropdown={hourlyDropdown} setHourlyDropdown={setHourlyDropdown} today={today} setWeekDay={setWeekDay} setHourlyDate={setHourlyDate} currentWeather={currentWeather}/>
          </button>
        </div>
        {getHourlyIndexes(hourlyDate, currentWeather).map((index) => (
          <HourlyForecastEle
            key={index}
            icon={getWeatherIcon(currentWeather.hourly.weather_code[index])}
            time={getTimeInAMPM(currentWeather.hourly.time[index].slice(11, 13))}
            temp={Math.round(
              parseFloat(currentWeather.hourly.temperature_2m[index])
            )}
          />
        ))}
      </div>
    </div>
  );
}
