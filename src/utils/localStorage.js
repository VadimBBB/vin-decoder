export const setStorageItem = (name, value) => {
  localStorage.setItem(name, value)
}

export const getStorageItem = (name) => {
  return localStorage.getItem(name)
}