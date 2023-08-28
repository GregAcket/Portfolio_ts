import { Outlet } from "react-router-dom"
import { styled } from "styled-components"
import { ThemeProvider } from "../utils/ThemeProvider"
import GlobalStyle from "../utils/GlobalStyle"
import { StateProjectsProvider } from "../utils/StateProjectsProvider"
import { StateSingleProjectsProvider } from "../utils/StateSingleProjectProvider"

const GlobalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default function WholeSiteWrapper() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <StateProjectsProvider>
          <StateSingleProjectsProvider>
            <GlobalWrapper>
              <Outlet />
            </GlobalWrapper>
          </StateSingleProjectsProvider>
        </StateProjectsProvider>
      </ThemeProvider>
    </>
  )
}
