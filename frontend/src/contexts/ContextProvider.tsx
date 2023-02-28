import { createContext, SetStateAction, useContext, useState } from "react";

interface IUser {
  name?: string;
  email?: string;
  imageUrl?: string;
}

const StateContext = createContext({
  currentUser: {} as IUser,
  userToken: '',
  sources: false,
  setCurrentUser: (any: any) => { },
  setUserToken: (any: any) => { },
  setSources: (any: any)=> { }
})

const newsData: never[] = []

export const ContextProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<IUser>({
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  })
  const [userToken, _setUserToken] = useState<string>(localStorage.getItem('TOKEN') || '')
  const [sources, setSources] = useState<boolean>(false)

  const setUserToken = (token: string) => {
    if (token) {
      localStorage.setItem('TOKEN', token)
    } else {
      localStorage.removeItem('TOKEN')
    }
    _setUserToken(token);
  }

  return (
    <StateContext.Provider value={{
      currentUser,
      setCurrentUser,
      userToken,
      setUserToken,
      setSources,
      sources,
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)