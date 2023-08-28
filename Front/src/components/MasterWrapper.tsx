import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { StateSingleProjectsContext } from "../utils/StateSingleProjectProvider"
import { StateProjectsContext } from "../utils/StateProjectsProvider"
import { css, styled } from "styled-components"
import { StyleProjectProps, ThemeProps } from "../utils/type"
import { ThemeContext } from "../utils/ThemeProvider"

const SingleProjectWrapper = styled.section<StyleProjectProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px;
  opacity: 0;
  transition: opacity 500ms;
  transition-delay: 200ms;
  ${({ $isMasterWrapperShown }) =>
    $isMasterWrapperShown &&
    css`
      opacity: 1;
    `};
`

const Button = styled.button<ThemeProps>`
  display: flex;
  align-self: end;
  margin-bottom: 10px;
  border: none;
  border-radius: 7px;
  background: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  color: ${({ $isDarkMode }) => ($isDarkMode ? "black" : "white")};
`

const Close = styled(FontAwesomeIcon)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transform: rotate(0deg);
  transition: transform 300ms;

  &:hover {
    transform: rotate(90deg);
  }
`

export default function MasterWrapperComponent() {
  // STATE

  const { isProjectsWrapperHidden, changeProjectsWrapper } =
    useContext(StateProjectsContext)

  const { isMasterWrapperShown, changeMasterWrapper } = useContext(
    StateSingleProjectsContext
  )

  // CTXT

  const { theme } = useContext(ThemeContext)

  // EFFECT

  useEffect(() => {
    const reset = () => {
      if (isMasterWrapperShown === false && isProjectsWrapperHidden === false) {
        changeMasterWrapper()
        changeProjectsWrapper()
      }
    }
    reset()
  })

  // NAVIGATE

  const navigate = useNavigate()

  // LOGIC

  const closeProject = async () => {
    changeMasterWrapper()
    await new Promise((resolve) => setTimeout(resolve, 600))
    navigate("/")
    setTimeout(() => {
      changeProjectsWrapper()
    }, 200)
  }

  return (
    <>
      <SingleProjectWrapper $isMasterWrapperShown={isMasterWrapperShown}>
        <Button onClick={() => closeProject()} $isDarkMode={theme === "dark"}>
          <Close icon={faXmark} aria-label="Fermer le projet" />
        </Button>

        <Outlet />
      </SingleProjectWrapper>
    </>
  )
}
