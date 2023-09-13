import { useEffect, useState } from "react"
import { styled } from "styled-components"

import { Project, StyleProjectProps } from "../utils/type"
import { Link, Outlet, useNavigate } from "react-router-dom"
import TopHeader from "../components/header/TopHeader"
import { useUser } from "../utils/customHooks"
import { getAllProject } from "../utils/tools"

const ProjectSection = styled.section<StyleProjectProps>`
  display: grid;
  grid-template-columns: 1fr 8fr;
  margin-top: 50px;
  padding: 0px 15px;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  background: green;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: background 300ms;
  cursor: pointer;

  &:before {
    content: "+";
    font-size: 40px;
  }

  &:hover {
    background: #10bf41;
  }
`
const P = styled.p`
  margin: 5px 0px 15px;
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
`

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 5px;
  border-radius: 5px;
  min-height: 50px;
  transition: background 300ms;

  &:hover {
    background: #c6c6c6;
  }
`

const Logo = styled.img`
  max-height: 100px;
  max-width: 100px;
`

const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 300px;
`

const Redirect = styled.p`
  font-size: 22px;
  text-align: center;
  padding: 0px 15px;
  margin-bottom: 25px;
`

export default function Dashboard() {
  // STATE

  const [allProjects, setAllProjects] = useState<Project[]>([])

  //NAVIGATE

  const navigate = useNavigate()

  //CUSTOM HOOK

  const { auth, userLoading } = useUser()

  // EFFECT

  useEffect(() => {
    async function getProjects() {
      const response = await getAllProject()
      if (response) {
        setAllProjects(response)
      }
    }
    getProjects()
  }, [])

  // AUTH

  if (!userLoading) {
    if (!auth) {
      setTimeout(() => {
        navigate("/login")
      }, 4000)
    }
  }

  //LOGIC

  const projects = () => {
    const mapped = allProjects
      .map((p) => {
        return (
          <Link to={`/dashboard/${p.name}`} key={p.name}>
            <Li>
              <Logo src={p.urlLogo} alt={p.altLogo} />
            </Li>
          </Link>
        )
      })
      .reverse()

    return mapped
  }

  return (
    <>
      <TopHeader />

      {auth ? (
        <ProjectSection>
          <Nav>
            <Button onClick={() => navigate("/dashboard/new")} />
            <P>New project</P>
            <Ul>{projects()}</Ul>
          </Nav>
          <Section>
            <Outlet />
          </Section>
        </ProjectSection>
      ) : (
        <Div>
          <Redirect>
            Pour accéder à cette page, vous devez vous identifier.
          </Redirect>
          <Redirect>Vous allez être redirigé.</Redirect>
        </Div>
      )}
    </>
  )
}
