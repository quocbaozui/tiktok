import React, {useState, useRef, useEffect} from "react"

function App() {
  const [count, setCount] = useState(60)

  
  const ref = useRef(99) // cái này nó sẽ kiểu Object là có 1 property là current
  console.log(ref.current) // khi muốn lấy giá trị của ref thì chọc vào thằng curren
  // ref.current = 30  // khi muốn sửa thì ref.current = Giá trị cần truyền



  const timerId = useRef()
  const prevCount = useRef()
  const h1Ref = useRef()

  useEffect(() => {
    const rect = h1Ref.current.getBoundingClientRect() 
    console.log(rect)
  })

  useEffect(() => {
     prevCount.current = count
  },[count])
  
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)
    console.log('Start -> ', timerId.current)
  }

  const handleStop = () => {
    clearInterval(timerId.current)
    console.log('Stop -> ', timerId.current)
  }
  console.log(count, prevCount.current)
  return(
    <>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  )
}

export default App