import { useContext, useState } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../utils/ThemeProvider"
import { ThemeProps } from "../utils/type"

const StyledButton = styled.button<ThemeProps>`
  position: relative;
  display: flex;
  cursor: pointer;
  width: 45px;
  height: 29px;
  background: ${({ $isDarkMode }) => ($isDarkMode ? "#e6e6e6" : "#333")};
  border-radius: 100px;
  border:none;
  transition: background-color 0.2s;

    @media (min-width: 768px){
      width: 60px;
      height:34px;
    }
  }
`

const Switch = styled.span<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  content: "";
  position: absolute;
  top: 2px;
  left: ${({ $isChecked }) => ($isChecked ? "calc(100% - 2px)" : "2px")};
  transform: ${({ $isChecked }) =>
    $isChecked ? "translateX(-100%)" : "translateX(0%)"};

  width: 25px;
  height: 25px;
  border-radius: 50%;
  transition: 0.2s;
  background: ${({ $isDarkMode }) => ($isDarkMode ? "black" : "white")};

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`

export default function ThemeSwitcher() {
  // CTXT

  const { toggleTheme, theme } = useContext(ThemeContext)

  // STATE

  const [checked, setChecked] = useState(false)

  const changeTheme = () => {
    toggleTheme()
    setChecked(!checked)
  }

  return (
    <>
      <StyledButton
        $isDarkMode={theme === "dark"}
        role="switch"
        onClick={changeTheme}
        aria-checked={checked}
      >
        <Switch $isDarkMode={theme === "dark"} $isChecked={checked}>
          {theme === "dark" ? "🌙" : "☀️"}
        </Switch>
      </StyledButton>
    </>
  )
}
