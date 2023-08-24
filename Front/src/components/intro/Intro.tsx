import styled, { keyframes } from "styled-components"
import { IntroProps, ThemeProps } from "../../utils/type"
import { useContext, useEffect } from "react"
import { ThemeContext } from "../../utils/ThemeProvider"

const Rotate = keyframes`
  100% {
    transform: translateX(-50%) translateY(-50%) rotateY(0deg) rotateZ(45deg);
  }
`

const TranslateLeft = keyframes`
  100%{
    transform: translate(-55px,55px);
  }
`

const TranslateRight = keyframes`
  100%{
    transform: rotate(-90deg) translate(55px,55px);
  }
`

const RevealLeft = keyframes`
  100%{
    left:10%;
    width:0px;
  }
`

const RevealRight = keyframes`
  100%{
    left:90%;
    width:0px;
  }
`
const Disappear = keyframes`
  100%{
    opacity:0;
  }
`

const SidesWrapper = styled.div`
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) rotateY(89deg) rotateZ(45deg);
  animation: 1000ms ease-in forwards normal ${Rotate};
`

const Left = styled.div<ThemeProps>`
  position: absolute;
  width: 100px;
  height: 100px;
  border-top: 15px solid transparent;
  border-left: 15px solid
    ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  border-right: 15px solid transparent;
  border-bottom: 15px solid
    ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  animation: 400ms ease-in forwards normal 1200ms ${TranslateLeft};
`

const Right = styled.div<ThemeProps>`
  position: relative;
  width: 100px;
  height: 100px;
  border-top: 15px solid transparent;
  border-left: 15px solid transparent;
  border-right: 15px solid
    ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  border-bottom: 15px solid
    ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  transform: rotate(-90deg);
  animation: 400ms ease-in forwards normal 1200ms ${TranslateRight};
`
const GreenStuffsWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

const BottomG = styled.div`
  position: absolute;
  top: -20px;
  right: 37px;
  width: 0px;
  height: 100px;
  border-top: 15px solid transparent;
  border-right: 15px solid green;
  border-bottom: 15px solid transparent;
  transform: rotate(45deg);
`

const MiddleG = styled.div`
  position: absolute;
  top: 0px;
  right: 30px;
  width: 70px;
  height: 0px;
  border-top: 15px solid green;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
`

const Slash = styled.div`
  position: absolute;
  background: green;
  top: -70px;
  left: 15px;
  width: 15px;
  height: 140px;
  transform: skewX(-20deg);
`

const CenterD = styled.div`
  position: absolute;
  bottom: -46px;
  left: 75px;
  width: 0px;
  height: 92px;
  border-top: 15px solid transparent;
  border-left: 15px solid green;
  border-bottom: 15px solid transparent;
`

const LeftLayer = styled.div<ThemeProps>`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translateX(-100%) translateY(-50%);
  width: 150px;
  height: 150px;
  background: ${({ $isDarkMode }) => ($isDarkMode ? "black" : "white")};
  animation: 600ms ease-in forwards normal 1200ms ${RevealLeft};
`
const RightLayer = styled.div<ThemeProps>`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translateX(0%) translateY(-50%);
  width: 150px;
  height: 150px;
  background: ${({ $isDarkMode }) => ($isDarkMode ? "black" : "white")};
  animation: 600ms ease-in forwards normal 1200ms ${RevealRight};
`

const MainWrapper = styled.div`
  animation: 500ms ease-in forwards normal 2000ms ${Disappear};
`

export default function Intro({ setIsLoaded }: IntroProps) {
  //CTXT

  const { theme } = useContext(ThemeContext)

  //EFFECT

  useEffect(() => {
    const isLoading = () => {
      setTimeout(() => {
        setIsLoaded(true)
      }, 2500)
    }
    isLoading()
  }, [])

  return (
    <>
      <MainWrapper>
        <SidesWrapper>
          <Left $isDarkMode={theme === "dark"} />
          <Right $isDarkMode={theme === "dark"} />
        </SidesWrapper>
        <LeftLayer $isDarkMode={theme === "dark"} />
        <RightLayer $isDarkMode={theme === "dark"} />
        <GreenStuffsWrapper>
          <BottomG />
          <MiddleG />
          <Slash />
          <CenterD />
        </GreenStuffsWrapper>
      </MainWrapper>
    </>
  )
}
