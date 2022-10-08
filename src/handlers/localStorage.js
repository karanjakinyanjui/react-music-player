export const saveToLocalStorage = (key, value) => {
  console.log("Saving to local storage");
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = (key, defaultValue) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : defaultValue;
};
