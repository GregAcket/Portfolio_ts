import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"

import Home from "./Home"
import Error from "./pages/Error404"

import Landing from "./pages/Landing"
import Bookisite from "./components/booki/Booki"
import Ohmyfoodsite from "./components/ohmyfood/OhmyfoodSite"
import Restaurant from "./components/ohmyfood/Restaurant"
import Projects from "./components/projects/Projects"
import Panthere from "./components/panthere/Panthere"
import PanthereMain from "./components/panthere/PanthereMain"
import MasterWrapper from "./components/MasterWrapper"
import Kanap from "./components/Kanap/tsx/kanap"
import Kanapindex from "./components/Kanap/tsx/kanapindex"
import Kanapproduct from "./components/Kanap/tsx/kanapproduct"
import Kanappanier from "./components/Kanap/tsx/kanappanier"
import Kanapconfirm from "./components/Kanap/tsx/kanapconfirm"
import MainKasa from "./pages/kasa/MainKasa"
import About from "./pages/kasa/About"
import Logement from "./pages/kasa/Logement"
import HomeKasa from "./pages/kasa/HomeKasa"
import ErrorPage from "./pages/kasa/Errorpagekasa"
import Login from "./pages/Login"
import WholeSiteWrapper from "./components/WholeSiteWrapper"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<WholeSiteWrapper />}>
      <Route path="/login" element={<Login />} />
      {/*     <Route path="/dashboard" element={<Dashboard />} />  */}

      <Route path="/" element={<Home />}>
        <Route path="/" element={<Landing />}>
          <Route path="/" element={<Projects />} />
          <Route path="/project" element={<MasterWrapper />}>
            <Route path="/project/booki" element={<Bookisite />} />
            <Route path="/project/ohmyfood" element={<Ohmyfoodsite />} />
            <Route
              path="/project/ohmyfood/:name"
              element={<Restaurant />}
              errorElement={<Error />}
            />
            <Route path="/project/panthere" element={<Panthere />}>
              <Route
                path="/project/panthere"
                element={
                  <PanthereMain goToContactPage={function (): void {}} />
                }
              />
            </Route>
            <Route path="/project/kanap" element={<Kanap />}>
              <Route path="/project/kanap" element={<Kanapindex />} />
              <Route
                path="/project/kanap/:id"
                element={<Kanapproduct />}
                errorElement={<Error />}
              />
              <Route path="/project/kanap/cart" element={<Kanappanier />} />
              <Route
                path="/project/kanap/confirmation"
                element={<Kanapconfirm />}
              />
              <Route path="*" element={<Error />} />
            </Route>
            <Route path="/project/kasa" element={<MainKasa />}>
              <Route path="/project/kasa" element={<HomeKasa />} />
              <Route path="/project/kasa/about" element={<About />} />
              <Route
                path="/project/kasa/:id"
                element={<Logement />}
                errorElement={<ErrorPage />}
              />
            </Route>
          </Route>
        </Route>

        {/* <Route path="/hot_takes" element={<Hottakes />} />*/}
        <Route path="*" element={<Error />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
