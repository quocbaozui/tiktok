import { useEffect, useState } from "react"
// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Goị callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [dependence])
// - Callback sẽ được gọi lại mỗi khi component mounted

//-----------------------------
// 1. Callback luôn được gọi sau khi component mounted

const tabs = ['posts', 'comments', 'albums','photos','todos','users'];

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');

  useEffect(() => {
    //console.log("Mounted")

    //document.title = title;

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
      {/*console.log("render")*/}

      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  )
}
export default Content