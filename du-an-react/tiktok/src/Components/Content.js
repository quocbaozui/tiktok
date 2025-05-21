import { memo } from "react"

function Content({ onIncrease }) {
  console.log('Re-render')
  return(
    <>  
      <h1>Hello World</h1>
      <button onClick={onIncrease}>Click me!</button>
    </>
  )
} 

export default memo(Content)