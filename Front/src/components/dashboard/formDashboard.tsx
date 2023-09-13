import { useNavigate, useParams } from "react-router-dom"
import { useUser } from "../../utils/customHooks"
import { ChangeEvent, useEffect, useState } from "react"
import { Project } from "../../utils/type"
import { styled } from "styled-components"
import { deleteDatas, getOneProject, modifyDatas } from "../../utils/tools"

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

const Modify = styled.svg`
  width: 25px;
  height: 25px;
  cursor: pointer;
`

const Path = styled.path`
  fill: green;
`

const Delete = styled.input`
  background: red;
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

  useEffect(() => {
    async function getProject() {
      if (name !== undefined) {
        const response = await getOneProject(name)
        if (response) {
          setDisplay(response)
          setOrigin(response)
        }
      }
    }
    getProject()
  }, [name])

  // LOGIC

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (display !== undefined) {
      const fieldName = e.target.name
      const fieldValue = e.target.value
      const newField = { [fieldName]: fieldValue }
      setDisplay({ ...display, ...newField })
    }
  }

  const sendModification = async () => {
    confirm("Voulez vous modifier le projet ?")
    if (name !== undefined) {
      const response = await modifyDatas(name, display)
      alert(response)
    }
    navigate("/dashboard")
  }

  const deleteProject = async () => {
    confirm("Voulez vous supprimer ce projet ?")
    if (name !== undefined) {
      const response = await deleteDatas(name)
      alert(response)
    }
    navigate("/dashboard")
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
        <Modify
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{ display: isFieldValueModified ? "block" : "none" }}
          onClick={() => sendModification()}
        >
          <Path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></Path>
        </Modify>
      </DivForm>
    )
  })

  return (
    <>
      {auth ? (
        <>
          <Form>{fields}</Form>
          <Delete
            type="submit"
            value="Supprimer"
            onClick={() => deleteProject()}
          />
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
