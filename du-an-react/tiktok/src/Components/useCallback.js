import React, {useState, useCallback} from 'react'
import Content from './Content'

// useCallback sẽ đi với memo, giúp tránh tạo những hàm mới một cách không cần thiết trong function component
export default function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])
  return (
    <div style={{padding: '10px 32px'}}>
      <Content onIncrease={handleIncrease}/>
      <h1>{count}</h1>
      
    </div>
  )
}
