import { Outlet } from "react-router-dom"
import { styled } from "styled-components"
import Header from "../../components/kasa/header/Header"
import Footer from "../../components/kasa/footer/Footer"

const Main = styled.main`
  font-family: -apple-system, "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  background: white;
`

export default function Kasa() {
  return (
    <>
      <Header />
      <Main className="kasa_main">
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}
