import { use, useEffect, useState, useLayoutEffect } from "react"
// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Goị callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [dependence])
// - Callback sẽ được gọi lại mỗi khi component mounted

//-----------------------------
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi compnent unmounted
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted đầu tiên)


function App() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button onClick={() => setShow(!show)} style={{margin:20}}>Toggle</button>
      {show && <Content7 />}
    </div>
  )
}

// useEffect(callback)
function Content() {
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    //console.log("Mounted")
    //document.title = title

    // call API
    // Gọi callback mỗi khi component re-render
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
      setPosts(posts)
    })
  })

  return(
    <div>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

// useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
function Content2() {
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    //console.log("Mounted")
    //document.title = title

    // call API
    // Gọi callback mỗi khi component re-render
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
      setPosts(posts)
    })
  }, [])

  return(
    <div>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}



// useEffect(callback, [dependence])
// Callback chỉ được gọi khi [dependence] thay đổi
const tabs = ['posts', 'comments', 'albums','photos','todos','users'];

function Content3() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts)
      })
  }, [type])

  return (
    <div>
      {tabs.map(tab => (
        <button 
          key={tab}
          style={type === tab ? {
            color:'#fff',
            backgroundColor:"#333"
          } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input 
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  )
}


//useEffect with DOM events dựa vào nên 
function Content4() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');
  const [showGoToTop, setShowGoToTop] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts)
      })
    console.log("Component mounted")
  }, [type])

  useEffect(() => {
    const handleScroll = () => {
      // scrollY là khoảng cách đã cuồn chuột từ trên xuống dưới hoặc ngược lại
      if (window.scrollY >= 200) {
        setShowGoToTop(true)
      }
      else {
        setShowGoToTop(false)
      }
      // setShowGoToTop(window.scrollY >= 200)  bằng với câu điều kiện if-else ở trên
    }
    window.addEventListener("scroll", handleScroll)
    console.log("addEvenListener")


    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll)
      console.log("removeEvenListener")
    }
  }, [])

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    // cleanup function
    return() => {
      window.removeEventListener("resize", handleResize)
    }
  },[])

  return (
    <div>
      <h1>{width}</h1>
      {tabs.map(tab => (
        <button 
          key={tab}
          style={type === tab ? {
            color:'#fff',
            backgroundColor:"#333"
          } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input 
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>

      {showGoToTop && 
        <button style={{
          position:"fixed", 
          right:'20px', 
          bottom:"20px",
          backgroundColor:'orange',
          borderRadius:'10px',
          padding:"10px"
        }
        }>F8</button>
      }
    </div>
  )
}

// useEffect with timer functions
function Content5() { 
  const [countDown, setCountDown] = useState(180)

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountDown(prevState => prevState -1)
      console.log('haha')
    },1000)

    return() => {
      clearInterval(timerId)
    }
  },[])

  //setTimeout chỉ chạy 1 lần nên cần dùng useEffect[dependence] để mỗi lần countDown thay đổi thì chạy lạ callback
  useEffect(() => {
    const timerId = setTimeout(() => {
      setCountDown(countDown - 1)
    },1000)

    return() => clearTimeout(timerId)
  },[countDown])

  return(
    <>
      <h1>{countDown}</h1>
    </>
  )
}

//useEffect with preview avatar
function Content6() {
  const [avatar, setAvatar] = useState()

  useEffect(() => {
    return() => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  },[avatar])

  const handlePreviewAvatar = (e) => {

    const file = e.target.files[0]

    file.preview = URL.createObjectURL(file)

    setAvatar(file)
    console.log(file)
  }
  return(
    <>
      <input 
        type="file"
        onChange={handlePreviewAvatar}
      />
      {avatar && (<img src={avatar.preview}/>)}
    </>
  )
}


// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI
function Content7() {
  const [count,setCount] = useState(0)

  useLayoutEffect(() => {
    if(count > 3) {
      setCount(0)
    }
  }, [count])

  const handleRun = () => {
    setCount(count + 1)
  }

  return(
    <>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </>

  )
}

export default App