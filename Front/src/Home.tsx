import { useState } from "react"
import { Outlet } from "react-router-dom"

import Intro from "./components/intro/Intro"
import Footer from "./components/footer/Footer"
import ScrollToTop from "./components/Scrolltotop"
import Header from "./components/header/Header"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  return (
    <>
      {isLoaded === false ? (
        <Intro setIsLoaded={setIsLoaded} />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  )
}
