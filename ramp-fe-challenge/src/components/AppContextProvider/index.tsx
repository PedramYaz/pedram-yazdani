import { useRef, useState } from "react"
import { AppContext } from "../../utils/context"
import { AppContextProviderComponent } from "./types"

export const AppContextProvider: AppContextProviderComponent = ({ children }) => {
  const cache = useRef(new Map<string, string>())
  const [error, setError] = useState<string>("")

  if (error) {
    window.location.href = "/"
    return null
  }

  return (
    <AppContext.Provider value={{ setError, cache }}>
      {children}
    </AppContext.Provider>
  )
}
