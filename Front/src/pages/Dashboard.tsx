import { useEffect, useState } from "react"
import { styled } from "styled-components"

import { Project, StyleProjectProps } from "../utils/type"
import { Link, Outlet, useNavigate } from "react-router-dom"
import TopHeader from "../components/header/TopHeader"
import { useUser } from "../utils/customHooks"

const ProjectSection = styled.section<StyleProjectProps>`
  display: grid;
  grid-template-columns: 1fr 8fr;
  margin-top: 50px;
  padding: 0px 15px;
`
const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
`

const Section = styled.section`
  display: flex;
  justify-content: center;
`

const Li = styled.ul`
  text-decoration: none;
  cursor: pointer;
`

const Logo = styled.img`
  max-height: 100px;
  max-width: 100px;
  margin-top: 10px;
`

const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 300px;
`

const P = styled.p`
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

  const url = "http://localhost:8000/projects"

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem(`token`)}`,
          },
        })
        const dataJson = await response.json()

        setAllProjects(dataJson)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [url])

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
          <Link to={`/dashboard/${p.name}`} key={p.id}>
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
          <SideNav>
            <ul>{projects()}</ul>
          </SideNav>
          <Section>
            <Outlet />
          </Section>
        </ProjectSection>
      ) : (
        <Div>
          <P>Pour accéder à cette page, vous devez vous identifier.</P>
          <P>Vous allez être redirigé.</P>
        </Div>
      )}
    </>
  )
}
