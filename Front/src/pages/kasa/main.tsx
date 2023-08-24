import Header from "../../components/kasa/header/header"
import Footer from "../../components/kasa/footer/footer"
import Home from "./home"
import About from "./about"
import Logement from "./logement"
import { Route, Routes } from "react-router-dom"
import "./main.css"
import Errorpage from "./errorpagekasa"

export default function Kasa() {
  return (
    <>
      <Header />
      <main className="kasa_main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/Logement/:id"
            element={<Logement />}
            errorElement={<Errorpage />}
          />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
