import Content from "./Content"
import { useState } from 'react'

// Mounted / Unmounted

function App() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  )
}

export default App;