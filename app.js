function MyButton() {
  return (
    <button>
      I'm a button
    </button> 
  );
}

export default function MyApp () {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div> 
  );
}

const root = ReactDOM.creatRoot(document.getElementById('root'));
root.render(<MyApp />)