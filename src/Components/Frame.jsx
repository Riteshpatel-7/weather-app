import React from "react";
import sunnyIcon from "../assets/images/icon-sunny.webp";
import DataCard from "./DataCard";
import DailyForecastCard from "./DailyForecastCard";
import icon1 from "../assets/images/icon-rain.webp";
import icon2 from "../assets/images/icon-snow.webp";
import icon3 from "../assets/images/icon-storm.webp";
import icon4 from "../assets/images/icon-overcast.webp";
import icon5 from "../assets/images/icon-partly-cloudy.webp";
import dropdownIcon from "../assets/images/icon-dropdown.svg";
import HourlyForecastEle from "./HourlyForecastEle";

export default function ({ weatherData }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      <div className="lg:col-span-2">
        <section className='flex flex-col justify-between items-center bg-[url("/bg-today-small.svg")] lg:bg-[url("/bg-today-large.svg")] lg:flex-row bg-cover bg-center rounded-2xl py-6 lg:px-8 lg:py-12 text-white'>
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <h2 className="text-2xl font-bold">Delhi, India</h2>
            <p className="opacity-75">Tuesday, Sep 5, 2025</p>
          </div>
          <div className="flex gap-4 items-center">
            <img className="h-24 lg:h-[120px]" src={sunnyIcon} alt="sunny" />
            <h1 className="text-7xl lg:text-8xl font-semibold italic">32°</h1>
          </div>
        </section>
      </div>
      <div className="flex gap-6 flex-wrap lg:col-span-2 lg:flex-nowrap">
        <DataCard title="Wind Now" data={`12 Km/h`} />
        <DataCard title="Wind Now" data={`12 Km/h`} />
        <DataCard title="Wind Now" data={`12 Km/h`} />
        <DataCard title="Wind Now" data={`12 Km/h`} />
      </div>
      <div className="lg:col-span-2">
        <p className="font-semibold">Daily forecast</p>
        <div className="flex gap-4 mt-4 flex-wrap lg:flex-nowrap">
          <DailyForecastCard day={"Wed"} min={20} max={30} icon={icon1} />
          <DailyForecastCard day={"Thu"} min={20} max={30} icon={sunnyIcon} />
          <DailyForecastCard day={"Fri"} min={20} max={30} icon={icon5} />
          <DailyForecastCard day={"Sat"} min={20} max={30} icon={sunnyIcon} />
          <DailyForecastCard day={"Sun"} min={20} max={30} icon={sunnyIcon} />
          <DailyForecastCard day={"Mon"} min={20} max={30} icon={sunnyIcon} />
          <DailyForecastCard day={"Tue"} min={20} max={30} icon={sunnyIcon} />
        </div>
      </div>
      <div className="w-[100%] max-h-[560px] xl:max-h-[568px] lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-end-4 flex flex-col gap-4 bg-[hsl(243,27%,20%)] rounded-2xl p-4 overflow-y-scroll">
        <div className="flex justify-between items-center">
          <p className="text-white font-semibold">Hourly forecast</p>
          <button className="flex gap-2 text-[0.9rem] bg-[hsl(243,23%,30%)] rounded-md px-4 py-1">
            <span>Tuesday</span>
            <img src={dropdownIcon} alt="dropdown" />
          </button>
        </div>
        <HourlyForecastEle icon={sunnyIcon} time={"12 AM"} temp={32} />
        <HourlyForecastEle icon={sunnyIcon} time={"1 AM"} temp={30} />
        <HourlyForecastEle icon={icon5} time={"2 AM"} temp={28} />
        <HourlyForecastEle icon={icon5} time={"3 AM"} temp={32} />
        <HourlyForecastEle icon={icon4} time={"4 AM"} temp={30} />
        <HourlyForecastEle icon={sunnyIcon} time={"5 AM"} temp={28} />
        <HourlyForecastEle icon={sunnyIcon} time={"6 AM"} temp={28} />
        <HourlyForecastEle icon={sunnyIcon} time={"7 AM"} temp={28} />
        <HourlyForecastEle icon={sunnyIcon} time={"5 AM"} temp={28} />
        <HourlyForecastEle icon={sunnyIcon} time={"6 AM"} temp={28} />
        <HourlyForecastEle icon={sunnyIcon} time={"5 AM"} temp={28} />
      </div>
    </div>
  );
}
