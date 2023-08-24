import { PropsWithChildren, createContext, useCallback, useState } from "react"

export const StateSingleProjectsContext = createContext({
  isMasterWrapperShown: false,
  changeMasterWrapper: () => {},
})

export const StateSingleProjectsProvider = ({
  children,
}: PropsWithChildren) => {
  const [isMasterWrapperShown, setIsMasterWrapperShown] = useState(false)
  const changeMasterWrapper = useCallback(
    () =>
      setIsMasterWrapperShown(isMasterWrapperShown === false ? true : false),
    [isMasterWrapperShown]
  )
  return (
    <StateSingleProjectsContext.Provider
      value={{ isMasterWrapperShown, changeMasterWrapper }}
    >
      {children}
    </StateSingleProjectsContext.Provider>
  )
}
