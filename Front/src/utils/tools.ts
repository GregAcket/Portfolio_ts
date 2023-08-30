export type User = {
  authenticated: boolean
  user: { userId: string | null; token: string } | null
}

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
