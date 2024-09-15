import React from 'react'
import { AuthProvider } from './AuthContext'
import { ThemeProvider } from './ThemedToggleContext'



function Provider({children}) {

  return (
    <AuthProvider>
      <ThemeProvider>
      {children}
      </ThemeProvider>
        
           
        
    </AuthProvider>
   
  )
}

export default Provider