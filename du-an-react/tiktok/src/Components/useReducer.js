import { useState, useReducer, use, useRef } from "react"
import TodoApp from './Todo'

// useReducer
// 1. Init state; 0
// 2. Action: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

// Init state 
const initState = 0

// Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
const HAHA = 'haha'

// Reducer
// nguyên tắc hoạt động là nhận đầu vào và trả ra 1 đầu ra mới
// Đầu vào nhận vào state hiện tại và 1 action
const reducer = (state, action) => {
  console.log(typeof state)
  console.log('Running ... ');
  
  switch(action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    case HAHA:
      return state += Math.floor(Math.random() * 10)
    default:
      throw new Error('Invalid action')
    
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initState)
  console.log(count)
  return(
    <div style={{padding: 32}}>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch(DOWN_ACTION)}
      >
        Down
      </button>
      <button
        onClick={() => dispatch(UP_ACTION)}
      >
        Up
      </button>
      <button onClick={() => {dispatch(HAHA)}}>
        Haa
      </button>
    </div>
  )
}

// init state
const initState1 = {
  job: "",
  jobs: []
}

// action
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload
  }
}

// console.log(setJob("Rua bat"))
//reducer
const reducer1 = (state, action) => {
  let newState
  switch(action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
    break
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
    case DELETE_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload, 1)
      newState = {
        ...state,
        jobs: newJobs
      }
      break
    default:
      throw new Error("Invalid action.")
  }
  return newState
}


function App1() {
  const refState = useRef()
  const [state, dispatch] = useReducer(reducer1, initState1)
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





function App2() {
  return(
    <TodoApp />
  )
}
export default App2