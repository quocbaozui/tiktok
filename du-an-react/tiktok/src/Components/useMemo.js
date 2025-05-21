// useMemo: tránh thực hiện lại 1 logic không cần thiết

import React, {useMemo, useRef, useState} from "react";
function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const nameRef = useRef()

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: Number(price)
    }])
    setName('')
    setPrice('')

    nameRef.current.focus()
  }
  
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("Tính toán lại...")
      return result + prod.price
      
    },0)

    return result
  }, [products]) // mỗi khi thằng products thay đổi thì mới tính toán lại

  return(
    <div style={{padding:32}}>
      <input 
        ref={nameRef}
        value={name}
        placeholder="Enter name..."
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input         
        value={price}
        placeholder="Enter price..."
        onChange={e => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default App