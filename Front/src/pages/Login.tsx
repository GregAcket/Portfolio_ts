import { ChangeEvent, FormEvent, useContext } from "react"
import { styled } from "styled-components"
import { ThemeProps } from "../utils/type"
import { ThemeContext } from "../utils/ThemeProvider"
import TopHeader from "../components/header/TopHeader"

const Form = styled.form`
  display: flex;
  align-self: center;
  margin: auto;
  flex-direction: column;

  margin: 70px 0px;
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

export default function Connect() {
  // CTXT

  const { theme } = useContext(ThemeContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {}

  const login = (e: FormEvent<HTMLFormElement>) => {}

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
    </>
  )
}
