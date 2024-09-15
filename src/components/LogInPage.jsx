import React, { useContext } from 'react'
import AuthContext from './AuthContext'

function LogInPage() {
    const {isAuthenticated, login}=useContext(AuthContext);

  return (
    <div>
        <div>
            {!isAuthenticated ? (
                <button onClick={login}>Log In</button>
            ): (<h1>Your are already logged in !!!</h1>)}
        </div>
    </div>
  )
}

export default LogInPage