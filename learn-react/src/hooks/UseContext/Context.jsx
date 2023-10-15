import React, { createContext, useState } from 'react'
import User from './User'
import Login from './Login'

export const AppContext = createContext()

const Context = () => {

  const [userName, setUsername] = useState("")

  return (
    <AppContext.Provider value={{userName, setUsername}}>
    <div>
      <Login/>
      <User/>
    </div>
    </AppContext.Provider>
  )
}

export default Context
