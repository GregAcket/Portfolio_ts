import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { styled } from "styled-components"
import { ThemeProps } from "../utils/type"
import { ThemeContext } from "../utils/ThemeProvider"
import TopHeader from "../components/header/TopHeader"
import { useNavigate } from "react-router-dom"

const Form = styled.form`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  align-self: center;
  margin: auto;
  flex-direction: column;
`

const FormField = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`

const Input = styled.input<ThemeProps>`
  height: 40px;
  font-size: 18px;

  &:focus + label {
    font-size: 16px;
    bottom: 72px;
    left: 2px;
    transition: all 200ms;
    color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  }

  &:valid + label {
    color: transparent;
    font-size: 16px;
    bottom: 72px;
    left: 2px;
  }
`

const Label = styled.label`
  position: relative;
  bottom: 39px;
  left: 5px;
  color: black;
  line-height: 18px;
`

const Login = styled.input`
  background-image: linear-gradient(to top right, black, green);
  align-self: center;
  color: white;
  border: none;
  border-radius: 25px;
  width: fit-content;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
`

const P = styled.p`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 20px;
  text-align: center;
  color: red;
  padding: 0px 10px;
  min-width: 340px;
`

export default function Connect() {
  const [credentials, setCredentials] = useState({
    name: " ",
    password: " ",
  })

  const [islogged, setIslogged] = useState({ logged: false, error: "" })

  // CTXT

  const { theme } = useContext(ThemeContext)

  // NAVIGATE

  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    const newField = { [fieldName]: fieldValue }
    setCredentials({ ...credentials, ...newField })
  }

  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const url = "http://localhost:8000/login"

    const postLogin = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify(credentials),
        })
        const data = await response.json()
        if (!data.token) {
          setIslogged({ logged: false, error: data })
          return
        } else {
          localStorage.setItem("token", data.token)
          localStorage.setItem("userId", data.userId)

          navigate("/dashboard")
        }
      } catch (error) {
        console.log(error)
        alert(`Une  erreur s'est produite. Veuillez nous excuser`)
      }
    }
    postLogin()
  }

  return (
    <>
      <TopHeader />
      <Form method="post" onSubmit={(e) => login(e)}>
        <FormField>
          <Input
            type="text"
            name="name"
            id="name"
            maxLength={15}
            onChange={(e) => handleChange(e)}
            $isDarkMode={theme === "dark"}
            required
          />
          <Label htmlFor="name">Identifiant</Label>
        </FormField>
        <FormField>
          <Input
            type="password"
            name="password"
            id="password"
            onChange={(e) => handleChange(e)}
            $isDarkMode={theme === "dark"}
            required
          />
          <Label htmlFor="password">Mot de passe</Label>
        </FormField>
        <Login type="submit" value="Login" id="send" />
      </Form>
      {!islogged.logged && <P> {islogged.error} </P>}
    </>
  )
}
