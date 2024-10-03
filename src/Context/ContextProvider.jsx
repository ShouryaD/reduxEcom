import React, { useState } from 'react'
import Context from './Context'

export default function ContextProvider({children}) {
    let [background,setBackground] = useState(false)
  return (
    <Context.Provider value={{background, setBackground}}>
        {children}
    </Context.Provider>
  )
}
