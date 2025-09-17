import React, { useEffect, useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";
import Suggestion from "./Suggestion";
import MyLocationSuggestion from "./MyLocationSuggestion";

export default function SearchBar({
  placeholder,
  btnText,
  setCityData,
  suggestions,
  setSuggestions,
  myLocalSuggestion,
  setMyLocalSuggestion,
  setIsShimmer,
}) {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center my-8 gap-4">
      <div
        className="flex items-center bg-[hsl(243,27%,20%)] rounded-xl w-[100%] lg:w-[36%] relative border-2 border-[hsl(243,96%,9%)]"
        onFocus={(e) => {
          e.target.parentElement.style.outline = "1px solid white";
        }}
        onBlur={(e) => {
          e.target.parentElement.style.outline = "none";
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <label className="ml-4" htmlFor="search">
          <img src={searchIcon} alt="search-icon" />
        </label>
        <input
          onClick={() => setMyLocalSuggestion(true)}
          onChange={(e) => {
            (setSuggestions(false), setInput(e.target.value));
          }}
          value={input}
          id="search"
          type="text"
          placeholder={placeholder}
          autoComplete="off"
          className="font-[DM_Sans] bg-[hsla(238,16%,31%,0)] placeholder:text-white placeholder:opacity-70 text-white text-lg px-6 py-2.5 w-[100%]  focus:outline-none"
        />
        {myLocalSuggestion && (
          <MyLocationSuggestion
            MyLocationSuggestion={myLocalSuggestion}
            setMyLocalSuggestion={setMyLocalSuggestion}
            setCityData={setCityData}
            setIsShimmer={setIsShimmer}
          />
        )}
        {suggestions && (
          <Suggestion
            input={input}
            setSuggestions={setSuggestions}
            setCityData={setCityData}
            setMyLocalSuggestion={setMyLocalSuggestion}
          />
        )}
      </div>
      <button
        onFocus={(e) => {
          e.target.style.outline = "1px solid hsl(233,67%,56%)";
        }}
        onBlur={(e) => {
          e.target.style.outline = "none";
        }}
        onClick={(e) => {
          e.stopPropagation();
          setMyLocalSuggestion(false);
          setSuggestions(true);
        }}
        className="font-[DM_Sans] w-[100%] lg:w-auto bg-[hsl(233,67%,56%)] hover:bg-[hsl(233,68%,51%)] rounded-xl px-6 py-2.5 border-2 border-[hsl(243,96%,9%)] text-white text-lg font-medium "
      >
        {btnText}
      </button>
    </div>
  );
}
