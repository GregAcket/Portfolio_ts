import { useNavigate } from "react-router-dom"
import { useUser } from "../../utils/customHooks"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Project } from "../../utils/type"
import { styled } from "styled-components"
import { sendData } from "../../utils/tools"

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`

const DivForm = styled.div`
  display: grid;
  grid-template-columns: 145px 1fr 35px;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
`

const Label = styled.label`
  justify-self: start;
`

const Input = styled.input`
  width: 100%;
  font-size: 18px;
  margin-top: 3px;
  }
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

export default function NewFormDashboard() {
  // STATE

  const [newForm, setNewForm] = useState<Project>({
    id: 0,
    name: "",
    urlScreenshot: "",
    urlLogo: "",
    altLogo: "",
    colorUnderline: "",
    title: "",
    link: "",
  })

  //NAVIGATE

  const navigate = useNavigate()

  //CUSTOM HOOK

  const { auth, userLoading } = useUser()

  // EFFECT

  useEffect(() => {
    if (!userLoading) {
      if (!auth) {
        setTimeout(() => {
          navigate("/login")
        }, 4000)
      }
    }
  }, [userLoading])

  // LOGIC

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (newForm !== undefined) {
      const fieldName = e.target.name
      const fieldValue = e.target.value
      const newField = { [fieldName]: fieldValue }
      setNewForm({ ...newForm, ...newField })
    }
  }

  const sendNewForm = async (e: FormEvent) => {
    e.preventDefault()

    if (confirm("Voulez vous créer ce projet ?")) {
      const newProject: HTMLFormElement = document.getElementById(
        "form"
      ) as HTMLFormElement

      const formData = new FormData(newProject)
      const response = await sendData(formData)

      alert(response)
      navigate("/dashboard")
    }
  }

  const sliced = Object.entries(newForm)

  const fields = sliced.map(([k, v], index) => {
    if (k === "urlScreenshot") {
      return (
        <DivForm key={index}>
          <Label htmlFor={k}>{k} :</Label>
          <Input
            type="file"
            name={k}
            value={v}
            id="urlScreenshot"
            onChange={(e) => handleChange(e)}
          />
        </DivForm>
      )
    } else if (k === "colorUnderline") {
      return (
        <DivForm key={index}>
          <Label htmlFor={k}>{k} :</Label>
          <Input
            type="color"
            name={k}
            value={v}
            onChange={(e) => handleChange(e)}
          />
        </DivForm>
      )
    } else {
      return (
        <DivForm key={index}>
          <Label htmlFor={k}>{k} :</Label>
          <Input
            type="text"
            name={k}
            value={v}
            onChange={(e) => handleChange(e)}
          />
        </DivForm>
      )
    }
  })

  return (
    <>
      {auth ? (
        <>
          <Form method="post" onSubmit={(e) => sendNewForm(e)} id="form">
            {fields}
            <Envoyer type="submit" value="Envoyer" id="send" />
          </Form>
        </>
      ) : (
        <Div>
          <P>Pour accéder à cette page, vous devez vous identifier.</P>
          <P>Vous allez être redirigé.</P>
        </Div>
      )}
    </>
  )
}
