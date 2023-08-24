import { useState } from "react"
import { Outlet } from "react-router-dom"

import { ThemeProvider } from "./utils/ThemeProvider"
import GlobalStyle from "./utils/GlobalStyle"

import Header from "./components/header/Header"
import Intro from "./components/intro/Intro"
import Footer from "./components/footer/Footer"
import ScrollToTop from "./components/Scrolltotop"
import { StateProjectsProvider } from "./utils/StateProjectsProvider"
import { StateSingleProjectsProvider } from "./utils/StateSingleProjectProvider"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState<Boolean>(false)

  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <StateProjectsProvider>
          <StateSingleProjectsProvider>
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
          </StateSingleProjectsProvider>
        </StateProjectsProvider>
      </ThemeProvider>
    </>
  )
}
