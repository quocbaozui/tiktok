import { use, useState} from 'react'
const gifts = [
  "https://image.made-in-china.com/155f0j00zNFlQypkHYct/Bow-Bikini-Sexy-Hollow-out-Three-Point-Suit-Sexy-Underwear.webp",
  "https://cdn.bongdaplus.vn/Assets/Media/2023/08/09/95/640-2.jpg",
  "https://i.ebayimg.com/images/g/838AAOSwVTdgN87O/s-l1600.webp"
];

function App() {
  const [gift, setGift] = useState()

  const handleChangeImg = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
  }

  return (
    <div>
      <img src={gift } alt='Chua co hinh' style={{width: '200px'}}></img>
      <button onClick={handleChangeImg}>Change image</button>
    </div>
  )
}

function App1() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    console.log({
      name, email
    })
  }

  console.log(name)

  return (
    <div style={{padding: 32}}>
      <input 
        value = {name}
        onChange = {event => setName(event.target.value)}
      />
      <input 
        value = {email}
        onChange = {event => setEmail(event.target.value)}
      />
      <button onClick={(handleSubmit)}>Change name</button>
    </div>
  )
}

const courses = [{
  id: 1,
  name: 'Python'
},{
  id: 2,
  name: 'Javascript'
},{
  id: 3,
  name: 'Ruby'
}]

function App2() {
  const [checked, setChecked] = useState(1);
  
  const handleChange = () => (
    // check API
    console.log({ id: checked})
  )

  return (
  <div>
    {courses.map(course => (
      <div key={course.id}>
        <input 
          type="radio"
          checked={checked === course.id}
          onChange={() => setChecked(course.id)}
        />
        {course.name}
      </div>
    ))}
    
    <button onClick={handleChange}>Change</button>
  </div>
  )
}

function App3() {
  const [checked, setChecked] = useState([])
  const handleCheck = (id) => {
    
    setChecked(prev => {
      const isCheck = checked.includes(id)
      if (isCheck) {
        return checked.filter(item => item !== id)
      }
      else {
        return [...prev, id]
      }
    })
  }
  const handleRegister = () => {
    console.log({id : checked})
  }
  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <input 
            type='checkbox' 
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default App3;
