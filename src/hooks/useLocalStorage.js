import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    // Check if function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;

    // Set to state
    setLocalStorageValue(value);

    // Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };
  return [localStorageValue, setValue];
}

function getLocalStorageValue(key, initialValue) {
  const itemFromLocalStorage = localStorage.getItem(key);

  return itemFromLocalStorage ? JSON.parse(itemFromLocalStorage) : initialValue;
}
