export const setCookie = (cname, cvalue, exdays = 30) => {
  const d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  let expires = "expires=" + d.toUTCString()
  if (exdays == -1) {
    expires = 'Thu, 01 Jan 1970 00:00:00 UTC'
  }
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

export const getCookie = (cname) => {
  const name = cname + "="
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}