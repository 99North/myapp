import React, { useContext } from 'react'
import AuthContext from './AuthContext'

function LogOutPage() {
    const {isAuthenticated, logout}=useContext(AuthContext)
  return (
    <div>
        {
            isAuthenticated ? (
                <button onClick={logout}>LogOut</button>
            ) : (<h1>You are not logged in.</h1>)
        }

    </div>
  )
}

export default LogOutPage