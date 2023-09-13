import { Project, User } from "./type"

export async function getUser(): Promise<User> {
  const unAuthUser = { authenticated: false, user: null }
  try {
    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("userId")
    if (!token) {
      return unAuthUser
    }
    const authUser = { authenticated: true, user: { userId, token } }
    return authUser
  } catch (error) {
    console.log(error)
    return unAuthUser
  }
}

// CREATE PROJECT

export async function sendData(formData: FormData) {
  const url = `http://localhost:8000/dashboard`

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(`token`)}`,
      },
      body: formData,
    })
    const message = await response.json()

    return message
  } catch (err) {
    console.log(err)
    return err
  }
}

// READ ALL PROJECTS

export async function getAllProject() {
  const url = "http://localhost:8000/projects"
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(`token`)}`,
      },
    })
    const projects = await response.json()

    return projects
  } catch (err) {
    console.log(err)
    return []
  }
}

// READ ONE PROJECT

export async function getOneProject(name: string) {
  const url = `http://localhost:8000/dashboard/${name}`
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(`token`)}`,
      },
    })
    const project: Project = await response.json()

    return project
  } catch (err) {
    console.log(err)
  }
}

// UPDATE ONE PROJECT

export async function modifyDatas(name: string, display: Project) {
  const url = `http://localhost:8000/dashboard/${name}`

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(`token`)}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(display),
    })
    const message = await response.json()
    return message
  } catch (err) {
    console.log(err)
  }
}

// DELETE ONE PROJECT

export async function deleteDatas(name: string) {
  const url = `http://localhost:8000/dashboard/${name}`

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(`token`)}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    const message = await response.json()

    return message
  } catch (err) {
    console.log(err)
  }
}
