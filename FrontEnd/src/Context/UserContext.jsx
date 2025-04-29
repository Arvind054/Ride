import React, { createContext, useContext } from 'react'

const UserContext = createContext();
export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider>{children}</UserContext.Provider>
  )
}

export const UserContextData = () =>useContext(UserContext)