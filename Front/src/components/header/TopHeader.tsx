import { Link } from "react-router-dom"
import { styled } from "styled-components"
import LogoDev from "./logodev"
import ThemeSwitcher from "../ThemeSwitcher"
import { ThemeContext } from "../../utils/ThemeProvider"
import { useContext } from "react"
import { ThemeProps } from "../../utils/type"
import { StateProjectsContext } from "../../utils/StateProjectsProvider"
import { StateSingleProjectsContext } from "../../utils/StateSingleProjectProvider"

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 15px 0px;

`

const BrandName = styled.p<ThemeProps>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 22px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 35px;
    font-weight: 600;
  }
`

export default function TopHeader() {
  // CTXT

  const { theme } = useContext(ThemeContext)
  const { isProjectsWrapperHidden, changeProjectsWrapper } =
    useContext(StateProjectsContext)

  const { changeMasterWrapper } = useContext(StateSingleProjectsContext)

  // LOGIC

  // If a single project is open, on clic on the logo it'll reset properly opacity on main page
  const reset = () => {
    if (isProjectsWrapperHidden === true) {
      changeProjectsWrapper()
      changeMasterWrapper()
    }
  }

  return (
    <>
      <TopDiv>
        <Link
          to={"/"}
          onClick={() => reset()}
          aria-label="Logo du site retour à la page d'accueil"
        >
          <LogoDev />
        </Link>
        <BrandName $isDarkMode={theme === "dark"}>Greg_Dev</BrandName>
        <ThemeSwitcher />
      </TopDiv>
    </>
  )
}
