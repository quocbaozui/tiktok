import { useState, useReducer, use, useRef } from "react"
import reducer1, {initState1} from "./reducer"
import { setJob, addJob, deleteJob } from "./action"
import logger from "./logger"

function App1() {
  const refState = useRef()
  const [state, dispatch] = useReducer(logger(reducer1), initState1)
  const {job, jobs} = state
  // console.log(state)

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(""))
    refState.current.focus()
  }
  return (
    <div>
      <h1>Todo</h1>
      <input 
        value={job}
        ref={refState}
        onChange={e =>dispatch(setJob(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>  
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App1