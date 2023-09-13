import { useContext, useEffect, useRef, useState } from "react"
import { styled } from "styled-components"
import { Delay, Project, StyleProjectProps, ThemeProps } from "../../utils/type"
import { Link, useNavigate } from "react-router-dom"
import { StateSingleProjectsContext } from "../../utils/StateSingleProjectProvider"
import { StateProjectsContext } from "../../utils/StateProjectsProvider"
import { ThemeContext } from "../../utils/ThemeProvider"

type SingleProjectProps = {
  project: Project
}

const delay = (num: number) => {
  const timeToWait = (num * 300).toString() + "ms"
  console.log(timeToWait)
  return timeToWait
}

const Links = styled(Link)<Delay>`
  text-decoration: none;
  transition: all 0.5s;
  opacity: ${({ $isIntersected }) => ($isIntersected ? "1" : "0")};
  transform: ${({ $isIntersected }) =>
    $isIntersected ? "translateY(0px)" : "translateY(30px)"};
  transition-delay: ${({ $isDelayed }) => delay($isDelayed)};

  @media (min-width: 768px) {
    display: flex;
  }
`

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 50px 0px;
  cursor: pointer;
  opacity: 1;

  @media (min-width: 768px) {
    margin: 0;
  }
`

const Images = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    min-height: 510px;
  }
`

const Screenshot = styled.img`
  object-fit: cover;
  height: 400px;
  width: 250px;
  margin-bottom: 10px;
`

const Logo = styled.img`
  max-height: 100px;
  max-width: 100px;
`

const Title = styled.div`
  display: flex;
  width: 135px;
  font-size: 16px;
  font-weight: 200;
  text-transform: uppercase;

  @media (min-width: 768px) {
    position: relative;
    bottom: 100px;
    left: 115px;
    flex-direction: column-reverse;
    align-items: end;
  }
`

const LogoUnderline = styled.div<StyleProjectProps>`
  min-width: 40px;
  height: 50px;
  margin-right: 20px;
  background: linear-gradient(
    to left,
    #ccc 50%,
    ${({ $ColorUnderline }) => $ColorUnderline}
  );
  background-repeat: no-repeat;
  background-size: 200% 3px;
  background-position: left 8px;
  transition: background-position ease-out 300ms;

  @media (min-width: 768px) {
    background-position: right 8px;
    min-width: 80px;
    align-self: ;
    margin: 0px;
  }
`

const Comment = styled.p<ThemeProps>`
  max-width: 135px;
  font-size: 15px;
  color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};

  @media (min-width: 768px) {
    text-align: right;
  }
`

export const SingleProject = ({ project }: SingleProjectProps) => {
  //STATE

  const [isIntersected, setIsIntersected] = useState<boolean>(false)

  //CTXT

  const { theme } = useContext(ThemeContext)
  const { changeProjectsWrapper } = useContext(StateProjectsContext)
  const { changeMasterWrapper } = useContext(StateSingleProjectsContext)

  // NAVIGATE

  const navigate = useNavigate()

  // REF

  const singleProjectRef = useRef(null)

  // INTERSECTION OBSERVER

  const handleIntersect: IntersectionObserverCallback = (
    [entries],
    observer
  ) => {
    if (entries.isIntersecting && singleProjectRef.current) {
      setIsIntersected(true)
      observer.unobserve(singleProjectRef.current)
    }
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  }

  useEffect(() => {
    if (!singleProjectRef.current) return

    const observer = new IntersectionObserver(handleIntersect, options)
    observer.observe(singleProjectRef.current)
  }, [singleProjectRef])

  /* The openProject function closes the projects section, wait for 600ms the time projects section fades-out, 
    goes to the wanted address, scroll to the top of the opened project and finally makes him fades-in
  */

  const openProject = async () => {
    changeProjectsWrapper()
    await new Promise((resolve) => setTimeout(resolve, 600))
    navigate("project" + project.link)
    const target = document.getElementById("projects")
    const scroll = () => {
      target?.scrollIntoView()
    }
    setTimeout(() => {
      scroll()
    }, 100)
    setTimeout(() => {
      changeMasterWrapper()
    }, 200)
  }

  return (
    <Links
      to="#"
      key={project.id}
      onClick={() => openProject()}
      ref={singleProjectRef}
      $isIntersected={isIntersected}
      $isDelayed={project.id}
    >
      <StyledArticle>
        <Images>
          <Screenshot
            src={project.urlScreenshot}
            alt="Project Screenshot"
            width={250}
            height={400}
          />

          <Logo src={project.urlLogo} alt={project.altLogo} />
        </Images>
        <Title>
          <LogoUnderline $ColorUnderline={project.colorUnderline} />
          <Comment $isDarkMode={theme === "dark"}>{project.title}</Comment>
        </Title>
      </StyledArticle>
    </Links>
  )
}
