import { ChangeEvent, FormEvent, useState } from "react"
import { styled } from "styled-components"
import BackgroundWave from "./BackgroundWave"

type MailForm = {
  name: {
    value: string
    error?: string
    isValid?: Boolean
  }
  email: {
    value: string
    error?: string
    isValid?: Boolean
  }
  message: {
    value: string
    error?: string
    isValid?: Boolean
  }
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

  input {
    height: 40px;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
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
  transition: all 300ms;
  cursor: pointer;
`
const ErrorMsg = styled.p`
  color: red;
`

const Textarea = styled.textarea`
  font-size: 18px;
`

export default function Contact() {
  //STATE

  const [form, setForm] = useState<MailForm>({
    name: { value: " " },
    email: { value: " " },
    message: { value: " " },
  })

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

  ;/^[a-zA-ZÉÈéèç/ñ\-\s]{2,}$/
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
      const url = "https://api.greg-dev.com/contact"

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
          document.location.href = "/"
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
              <label htmlFor="name">Votre nom</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => handleChange(e)}
                required
              />

              {form.name.error && <ErrorMsg>{form.name.error}</ErrorMsg>}
            </FormField>

            <FormField>
              <label htmlFor="email">Votre e-mail </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => handleChange(e)}
                required
              />

              {form.email.error && <ErrorMsg>{form.email.error}</ErrorMsg>}
            </FormField>
          </FormId>
          <DivTextArea>
            <label htmlFor="message">Votre message </label>
            <Textarea
              name="message"
              id="message"
              rows={10}
              onChange={(e) => handleChange(e)}
              required
            />

            {form.message.error && <ErrorMsg>{form.message.error}</ErrorMsg>}
          </DivTextArea>

          <Envoyer type="submit" value="Envoyer" id="send" />
        </StyledForm>
      </ContactWrapperSection>
    </>
  )
}
