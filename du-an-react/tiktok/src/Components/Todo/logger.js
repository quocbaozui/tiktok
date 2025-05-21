function logger(reducer1) {
  return (prevState, action) => { 
    console.group(action.type)
    console.log("prev state:", prevState)
    console.log("action:", action)

    const newState = reducer1(prevState, action)

    console.log("next state:", newState)

    console.groupEnd()

    return newState
  }
}
export default logger