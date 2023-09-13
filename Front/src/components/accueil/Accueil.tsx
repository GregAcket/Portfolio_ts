import { RefObject, useContext, useRef, useState } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../../utils/ThemeProvider"
import { ThemeProps } from "../../utils/type"
import Wave from "../../assets/Wave"

const SectionAccueil = styled.section<ThemeProps>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 65vh;
  padding: 90px 30px 0px;
`

const StyledH1 = styled.h1<ThemeProps>`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: 600;
  width: 222px;
  margin-top: 150px;
  text-transform: uppercase;
  color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  text-shadow: ${({ $isDarkMode }) =>
    $isDarkMode
      ? "3px 3px 5px rgba(221, 218, 216, 0.6)"
      : "3px 3px 5px rgba(34, 37, 39, 0.6)"};

  @media (min-width: 576px) {
    font-size: 25px;
    width: 277px;
  }

  @media (min-width: 768px) {
    top: 50px;
    font-size: 30px;
    width: 624px;
  }
`

export default function Accueil() {
  //  REF

  const title = useRef<HTMLHeadingElement>(null)

  // STATE

  const [isWritten, setIsWritten] = useState(false)

  // CTXT

  const { theme } = useContext(ThemeContext)

  // LOGIC

  // Typing effect
  const h1 = "Développeur Web React / Node.js"

  const speed = 45

  function effect(sentence: string, ref: RefObject<HTMLElement>, time: number) {
    let i = 0
    const timer = setInterval(() => {
      if (ref.current !== null && ref.current.innerHTML !== undefined)
        if (
          i < sentence.length &&
          ref.current.innerHTML.length < sentence.length
        ) {
          ref.current.append(sentence.charAt(i))
          i++
        } else {
          clearInterval(timer)
        }
    }, time)
  }

  const write = () => {
    if (isWritten === false) {
      effect(h1, title, speed)
      setIsWritten(true)
    }
  }

  write()

  return (
    <>
      <SectionAccueil $isDarkMode={theme === "dark"}>
        <StyledH1 ref={title} $isDarkMode={theme === "dark"}></StyledH1>
      </SectionAccueil>
      <Wave />
    </>
  )
}
