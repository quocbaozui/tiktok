import { useRef } from "react"
import { useStore, actions } from "./Components/store"


function App() {
  const [state, dispatch] = useStore()
  const {todos, todoInput} = state
  
  const refState = useRef()

  const handleSubmit = () => {
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(""))
    console.log(refState.current.focus()) 
  }

  return (
    <div>
      <p>Hello World</p>
      <input 
        value={todoInput}
        ref = {refState}
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
            <span onClick={() => dispatch(actions.deleteTodo(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  )
  
}

export default App