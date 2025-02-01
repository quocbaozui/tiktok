import { useState} from 'react'

function App() {
  const [counter, setCounter] = useState({
    name: 'haha',
    age: 18,
    height: 165,
  });

  const handleIncrease = () => {
    setCounter(prev => ({
      ...prev,
      bio: 'huhu'
    }));

    setCounter(prev => ({
      ...prev,
      cho: 'dog'
    }));
  };

  return (
    <div className="App">
      <h1>{JSON.stringify(counter)}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

function App1() {
  const [button, setbutton] = useState(1) 

  const handle = () => {
    setbutton(prevNumber => prevNumber + 1);
    setbutton(prevNumber => prevNumber + 1);
    setbutton(prevNumber => prevNumber + 1);
    setbutton(prevNumber => prevNumber + 1);
  } 

  console.log('haha');

  return (
    <div className="App">
      <h1>{button}</h1>
      <button onClick={handle}>Increase</button>
    </div>
  )
}

function App2() {
  const [info, setInfo] = useState({
    name: 'bao',
    age: 18,
  })

  const handleInfo = () => {
    setInfo({
      ...info,
      height: 180
    })
  }

  return (
    <div>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleInfo}>More</button>
    </div>
    
  )
}

export default App2;
