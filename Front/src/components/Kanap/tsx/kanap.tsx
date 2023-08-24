import { Outlet } from "react-router-dom"

import Kanapfooter from "./Kanapfooter"
import Kanapheader from "./Kanapheader"

export default function Kanap() {
  return (
    <>
      <Kanapheader />
      <Outlet />
      <Kanapfooter />
    </>
  )
}
