import React, { useEffect, useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";
import Suggestion from "./Suggestion";

export default function SearchBar({ placeholder, btnText, setCityData, suggestions, setSuggestions }) {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center my-8 gap-4">
      <div className="flex items-center bg-[hsl(243,27%,20%)] rounded-lg w-[100%] lg:w-[36%] relative">
        <label className="ml-4" htmlFor="search">
          <img src={searchIcon} alt="search-icon" />
        </label>
        <input
          onChange={(e) => {
            (setSuggestions(false), setInput(e.target.value));
          }}
          value={input}
          id="search"
          type="text"
          placeholder={placeholder}
          autoComplete="off"
          className="font-[DM_Sans] bg-[hsla(238,16%,31%,0)] placeholder:text-white placeholder:opacity-70 text-white text-lg px-6 py-3 w-[100%]  focus:outline-none"
        />
        {suggestions && (
          <Suggestion
            input={input}
            setSuggestions={setSuggestions}
            setCityData={setCityData}
          />
        )}
      </div>
      <button
        onClick={(e) => {e.stopPropagation(); setSuggestions(true)}}
        className="font-[DM_Sans] w-[100%] lg:w-auto bg-[hsl(233,67%,56%)] hover:bg-[hsl(233,68%,51%)] transition-colors duration-300 ease-in-out rounded-xl px-6 py-3 text-white text-lg font-medium active:scale-95"
      >
        {btnText}
      </button>
    </div>
  );
}
