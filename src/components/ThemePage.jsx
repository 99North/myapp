import React, { useContext } from 'react'
import ThemeContext from './ThemedToggleContext'

function ThemePage() {
    const {theme, toggleTheme}=useContext(ThemeContext);
    const background= theme==="light" ? '#fff' : '#333';
    const color= theme === "light" ? '#000' : '#fff';

  return (
    <div style={{background,color, minHeight: '100vh', padding: '20px' }}
    >
        <h1>{`Current Theme:  ${theme}`}</h1>
        <p>Hello This Page Contains a theme that can be light or dark by clicking the button bellow</p>
        <button onClick={toggleTheme}>ChangeTheme</button>


    </div>
  )
}

export default ThemePage