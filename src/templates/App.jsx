import * as React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import CookieConsent from 'react-cookie-consent'

export default function App() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>

      <CookieConsent
        location="bottom"
        buttonText="Ok!"
        cookieName="cookiesAreConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>

      <Footer />
    </>
  )
}
