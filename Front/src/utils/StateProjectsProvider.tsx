import { PropsWithChildren, createContext, useCallback, useState } from "react"

export const StateProjectsContext = createContext({
  isProjectsWrapperHidden: false,
  changeProjectsWrapper: () => {},
})

export const StateProjectsProvider = ({ children }: PropsWithChildren) => {
  const [isProjectsWrapperHidden, setIsProjectsWrapperHidden] = useState(false)
  const changeProjectsWrapper = useCallback(
    () =>
      setIsProjectsWrapperHidden(
        isProjectsWrapperHidden === false ? true : false
      ),
    [isProjectsWrapperHidden]
  )
  return (
    <StateProjectsContext.Provider
      value={{ isProjectsWrapperHidden, changeProjectsWrapper }}
    >
      {children}
    </StateProjectsContext.Provider>
  )
}
