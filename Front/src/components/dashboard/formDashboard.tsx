import { useNavigate, useParams } from "react-router-dom"
import { useUser } from "../../utils/customHooks"
import { ChangeEvent, useEffect, useState } from "react"
import { Project } from "../../utils/type"
import { styled } from "styled-components"

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
  max-width: 500px;
`

const DivForm = styled.div`
  display: grid;
  grid-template-columns: 145px 1fr 35px;
  align-items: center;
  justify-items: center;
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

const Svg = styled.svg`
  width: 20px;
  height: 20px;
`

const Path = styled.path`
  fill: green;
`

export default function FormDashboard() {
  // STATE

  const [display, setDisplay] = useState<Project>({
    altLogo: "",
    colorUnderline: "",
    id: 0,
    link: "",
    name: "",
    title: "",
    urlLogo: "",
    urlScreenshot: "",
  })

  const [origin, setOrigin] = useState<Project>({
    altLogo: "",
    colorUnderline: "",
    id: 0,
    link: "",
    name: "",
    title: "",
    urlLogo: "",
    urlScreenshot: "",
  })

  //NAVIGATE

  const navigate = useNavigate()

  //CUSTOM HOOK

  const { auth, userLoading } = useUser()

  // PARAMS

  const { name } = useParams()

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

  const url = `http://localhost:8000/dashboard/${name}`

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem(`token`)}`,
          },
        })
        const dataJson: Project = await response.json()

        setDisplay(dataJson)
        setOrigin(dataJson)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [url])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (display !== undefined) {
      const fieldName = e.target.name
      const fieldValue = e.target.value
      const newField = { [fieldName]: fieldValue }
      setDisplay({ ...display, ...newField })
    }
  }

  const sliced = Object.entries(display).slice(2, 9)

  const fields = sliced.map(([k, v], index) => {
    const isFieldValueModified = v !== origin[k]
    return (
      <DivForm key={index}>
        <Label htmlFor={k}>{k} :</Label>
        <Input
          type="text"
          name={k}
          value={v}
          onChange={(e) => handleChange(e)}
        />

        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{ opacity: isFieldValueModified ? 1 : 0 }}
        >
          <Path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></Path>
        </Svg>
      </DivForm>
    )
  })

  return (
    <>
      {auth ? (
        <Form>{fields}</Form>
      ) : (
        <Div>
          <P>Pour accéder à cette page, vous devez vous identifier.</P>
          <P>Vous allez être redirigé.</P>
        </Div>
      )}
    </>
  )
}
