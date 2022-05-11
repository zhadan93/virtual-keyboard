export function setLocalStorage(key, value) {
  window.localStorage.setItem(key, value);
}

export function getLocalStorage(key, defaultValue) {
  return window.localStorage.getItem(key) || defaultValue;
}
