import {setCookie, getCookie} from '../utils/cookies'
import {setStorageItem, getStorageItem} from '../utils/localStorage'

export const getLastCodesFromMemory = () => {
  const lastCodes = getCookie('cookiesAreConsent') ?
    getCookie('last_codes') :
    getStorageItem('last_codes')

  return lastCodes ? JSON.parse(lastCodes) : []
}

export const setLastCodesToMemory = (prevCodes, newCode) => {
  let lastCodesEdited = prevCodes
    .filter(code => code !== newCode)
  lastCodesEdited.unshift(newCode)
  if (lastCodesEdited.length > 5) {
    lastCodesEdited = lastCodesEdited.slice(0, 5)
  }

  getCookie('cookiesAreConsent') ?
    setCookie('last_codes', JSON.stringify(lastCodesEdited || '')) :
    setStorageItem('last_codes', JSON.stringify(lastCodesEdited || ''))

  return lastCodesEdited
}