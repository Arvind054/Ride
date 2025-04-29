import React, { createContext, useContext } from 'react'

const RiderContext = createContext();

export const RiderProvider = ({children}) => {
  return (
    <RiderContext.Provider>{children}</RiderContext.Provider>
  )
}

export const RiderDataContext = ()=>useContext(RiderContext);