import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { styled } from "styled-components"
import BackgroundWave from "./BackgroundWave"
import { ThemeProps } from "../../utils/type"
import { ThemeContext } from "../../utils/ThemeProvider"
import { useNavigate } from "react-router-dom"

type MailAttribute = {
  value: string
  error?: string
  isValid?: boolean
}

type MailForm = {
  name: MailAttribute
  email: MailAttribute
  message: MailAttribute
}

const ContactWrapperSection = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 920px;
  width: 100%;
  padding: 20px;
  min-height: 500px;
  margin: 50px 0px;
`

const H2 = styled.h2`
  margin-bottom: 80px;

  @media (min-width: 768px) {
    font-size: 34px;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 100%;

  label {
    margin-bottom: 5px;
  }
`

const FormId = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const FormField = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 50%;
  }
`

const Input = styled.input<ThemeProps>`
  height: 40px;
  font-size: 18px;

  &:focus + label {
    font-size: 16px;
    bottom: 61px;
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
  bottom: 29px;
  left: 5px;
  color: black;
  line-height: 18px;
`

const DivTextArea = styled.div`
  display: flex;
  flex-direction: column;
`

const Envoyer = styled.input`
  background-image: linear-gradient(to top right, black, green);
  align-self: center;
  color: white;
  border: none;
  border-radius: 25px;
  margin-top: 10px;
  width: 135px;
  height: 43px;
  font-size: 18px;
  cursor: pointer;
`
const ErrorMsg = styled.p`
  color: red;
`

const Textarea = styled.textarea<ThemeProps>`
  font-size: 18px;

  &:focus + label {
    font-size: 16px;
    bottom: 252px;
    left: 2px;
    transition: all 200ms;
    color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  }

  &:valid + label {
    color: transparent;
  }
`

const Labeltextarea = styled.label`
  position: relative;
  bottom: 220px;
  left: 5px;
  color: black;
  line-height: 18px;
`

export default function Contact() {
  //STATE

  const [form, setForm] = useState<MailForm>({
    name: { value: " " },
    email: { value: " " },
    message: { value: " " },
  })

  //CTXT

  const { theme } = useContext(ThemeContext)

  // NAVIGATE

  const navigate = useNavigate()

  // Listener on fields form changes

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    const newField = { [fieldName]: { value: fieldValue } }
    setForm({ ...form, ...newField })
  }

  //Regex and form validation

  const regexNom = /^[a-zA-ZÉÈéèç/ñ\-\s]{2,}$/
  const regexMail = /^[a-zA-Z0-9.é_ñèç%+-]+@[a-zA-Z0-9ñ.-]+\.[a-zA-Zñ]{2,}$/
  const regexMessage = /^[a-zA-Z0-9,.'!?ÉÈéêèçà/ñ\-\s]{10,}$/

  const validateForm = () => {
    let newForm = form

    if (regexNom.test(form.name.value)) {
      const newField = { value: form.name.value, isValid: true }
      newForm = { ...newForm, ...{ name: newField } }
    } else {
      const errorMsg =
        "Veuillez remplir le champs correctement SVP (Uniquement des lettres, minimum 2 caractères)"
      const newField = {
        value: form.name.value,
        error: errorMsg,
        isValid: false,
      }
      newForm = { ...newForm, ...{ name: newField } }
    }

    if (regexMail.test(form.email.value)) {
      const newField = { value: form.email.value, isValid: true }
      newForm = { ...newForm, ...{ email: newField } }
    } else {
      const errorMsg =
        "Veuillez remplir le champs correctement SVP (Par exemple: Guy_Banvil@caramail.fr)"
      const newField = {
        value: form.email.value,
        error: errorMsg,
        isValid: false,
      }
      newForm = { ...newForm, ...{ email: newField } }
    }

    if (regexMessage.test(form.message.value)) {
      const newField = { value: form.message.value, isValid: true }
      newForm = { ...newForm, ...{ message: newField } }
    } else {
      const errorMsg =
        "Veuillez remplir le champs correctement SVP (Minimum 10 caractères)"
      const newField = {
        value: form.message.value,
        error: errorMsg,
        isValid: false,
      }
      newForm = { ...newForm, ...{ message: newField } }
    }

    setForm(newForm)

    return (
      newForm.name.isValid && newForm.email.isValid && newForm.message.isValid
    )
  }

  // Sending Form

  const sendMail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isFormValid = validateForm()

    if (!isFormValid) {
      alert("Il y a une erreur dans le remplissage de votre formulaire")
    } else {
      const url = "http://localhost:8000/contact"

      async function postForm() {
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          })
          const feedback = await response.json()
          alert(feedback)
          navigate("/")
        } catch (error) {
          alert(`Une  erreur s'est produite. Veuillez nous excuser`)
        }
      }
      postForm()
    }
  }

  return (
    <>
      <BackgroundWave />

      <ContactWrapperSection>
        <H2 id="contact">Contact</H2>

        <StyledForm method="post" onSubmit={(e) => sendMail(e)}>
          <FormId>
            <FormField>
              <Input
                type="text"
                name="name"
                id="name"
                onChange={(e) => handleChange(e)}
                $isDarkMode={theme === "dark"}
                required
              />
              <Label htmlFor="name">Votre nom</Label>

              {form.name.error && <ErrorMsg>{form.name.error}</ErrorMsg>}
            </FormField>

            <FormField>
              <Input
                type="text"
                name="email"
                id="email"
                onChange={(e) => handleChange(e)}
                $isDarkMode={theme === "dark"}
                required
              />
              <Label htmlFor="email">Votre e-mail </Label>

              {form.email.error && <ErrorMsg>{form.email.error}</ErrorMsg>}
            </FormField>
          </FormId>
          <DivTextArea>
            <Textarea
              name="message"
              id="message"
              rows={10}
              onChange={(e) => handleChange(e)}
              $isDarkMode={theme === "dark"}
              required
            />
            <Labeltextarea htmlFor="message">Votre message </Labeltextarea>

            {form.message.error && <ErrorMsg>{form.message.error}</ErrorMsg>}
          </DivTextArea>

          <Envoyer type="submit" value="Envoyer" id="send" />
        </StyledForm>
      </ContactWrapperSection>
    </>
  )
}
