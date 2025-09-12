// import React from "react";

// export default function useLocalStorage(key, initialValue) {
//   const [storedValue, setStoredValue] = React.useState(initialValue);
//   React.useEffect(() => {
//     if (localStorage.getItem(key)) {
//       setStoredValue(JSON.parse(localStorage.getItem(key)));
//     } else {
//       localStorage.setItem(key, JSON.stringify(initialValue));
//     }
//   }, []);

//   function setValue(value) {
//     localStorage.setItem(key, JSON.stringify(value));
//     setStoredValue(value);
//   }

//   return [storedValue, setValue];
// }

import { useEffect, useState } from 'react'

export default function useLocalStorage(key, initialData) {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(key))
    if (existingData) {
      setData(existingData)
    } else {
      localStorage.setItem(key, JSON.stringify(initialData))
    }
  }, [])

  const updateLocalStorage = (newData) => {
  const valueToStore =
    typeof newData === 'function' ? newData(data) : newData;

  localStorage.setItem(key, JSON.stringify(valueToStore));
  setData(valueToStore);
};

  return [data, updateLocalStorage]
}