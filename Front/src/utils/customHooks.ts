import { useEffect, useState } from "react"
import { getUser } from "./tools"

type GetUser = {
  userId: string | null
  token: string
} | null

export function useUser() {
  const [connectedUser, setConnectedUser] = useState<GetUser>(null)
  const [auth, setAuth] = useState(false)
  const [userLoading, setUserLoading] = useState(true)

  useEffect(() => {
    async function getUserDetails() {
      const { authenticated, user } = await getUser()
      setConnectedUser(user)
      setAuth(authenticated)
      setUserLoading(false)
    }
    getUserDetails()
  }, [])

  return { connectedUser, auth, userLoading }
}
