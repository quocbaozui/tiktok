import Content from "./Content1";
import { createContext, useState } from 'react'
import '../../../src/App.css'


export const ThemeContext = createContext()
console.log(ThemeContext)

// CompA => CompC

// 1. Create context
// 2. Provider
// 3. Consumer

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return(
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Content />
      </div>
    </ThemeContext.Provider>
   
  )
}

export default App