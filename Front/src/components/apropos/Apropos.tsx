import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../../utils/ThemeProvider"
import { ThemeProps } from "../../utils/type"
import Avatar from "../../assets/Acket_Gregory.jpeg"
import { Link } from "react-router-dom"

const Section = styled.section<ThemeProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  min-height: 600px;
  background: linear-gradient(
    25deg,
    ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")} 50%,
    ${({ $isDarkMode }) => ($isDarkMode ? "black" : "white")} 50%
  );
  @media (min-width: 992px) {
    background: linear-gradient(
      15deg,
      ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")} 50%,
      ${({ $isDarkMode }) => ($isDarkMode ? "black" : "white")} 50%
    );
  }
`

const H2 = styled.h2`
  align-self: start;
  margin: 50px 0px;
  padding: 0px 30px;
  @media (min-width: 768px) {
    font-size: 34px;
    margin: 80px 0px;
  }
`

const Article = styled.article<ThemeProps>`
  background: linear-gradient(
    25deg,
    ${({ $isDarkMode }) => ($isDarkMode ? "black" : "white")} 50%,
    ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")} 50%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  width: 100%;
  padding: 0px 15%;

  @media (min-width: 992px) {
    background: linear-gradient(
      15deg,
      ${({ $isDarkMode }) => ($isDarkMode ? "black" : "white")} 50%,
      ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")} 50%
    );
    background-clip: text;
    -webkit-background-clip: text;
  }
`

const Img = styled.img`
  float: left;
  margin-right: 10px;
  clip-path: circle();
  width: 73px;
  @media (min-width: 768px) {
    width: 120px;
  }
`

const P = styled.p`
  text-align: justify;
`

const A = styled(Link)<ThemeProps>`
  font-weight: 600;
  color: ${({ $isDarkMode }) => ($isDarkMode ? "black" : "white")};
  text-shadow: 2px 1px 1px
    ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  text-decoration: none;
`

export default function Apropos() {
  //CTXT

  const { theme } = useContext(ThemeContext)

  return (
    <>
      <H2 id="a_propos">À propos</H2>
      <Section $isDarkMode={theme === "dark"}>
        <Article $isDarkMode={theme === "dark"}>
          <Img src={Avatar} alt="Portrait" />
          <P>
            Bienvenue sur mon portfolio, je suis
            <strong> développeur web, spécialisé en React et Node.js </strong>
            <br />
            <br />
            Ces 2 technologies, extrêmement populaires et utilisées par les
            géants du web (facebook, twitter, netflix, airbnb ... ), sont à la
            fois modernes, rapides en exécution et utilisent peu de ressources.
            Elles permettent d'afficher plus vite, un plus grand nombre
            d'éléments tout en réduisant les temps de chargement de vos pages
            pour vos utilisateurs.
          </P>
          <P>
            <br />
            Je vous présente ici différents projets, certains personnels,
            d'autres que j'ai eu à accomplir au cours de ma formation. Vous
            pouvez retrouver le code source sur mon{" "}
            <A
              to={"https://github.com/GregAcket/"}
              target="_blank"
              $isDarkMode={theme === "dark"}
            >
              Github
            </A>
            .
            <br />
            <br />
            Si vous avez des questions, besoin d'informations, de conseils ou
            tout simplement, que vous désirez en savoir plus, je me tiens à
            votre disposition. N'hésitez pas à me contacter.
            <br />
            <br />
            Je vous accompagnerais avec plaisir dans vos projets !
          </P>
        </Article>
      </Section>
    </>
  )
}
