import { use, useState} from 'react'
function App() {
  
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    return storageJobs ?? []
  })

  const handleAdd = () => {
    setJobs(prev => {
      const newJobs = [...prev, job];
      localStorage.setItem('jobs', JSON.stringify(newJobs));
      return newJobs;
    });
  };

  const handleDelete = (index) => {
    setJobs(prev => {
      const newJobs = prev.filter((_,key) => key !== index);
      localStorage.setItem('jobs', JSON.stringify(newJobs));
      return newJobs;
    });
  };

  return (
    <div style={{padding: 32}}>
      <input 
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>

        ))}
      </ul>
    </div>
  )
}

function TodoList() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const localStorageJobs = JSON.parse(localStorage.getItem("jobs"));
    return localStorageJobs ?? []
  });

  const handleAdd = () => {
    setJobs( prev => {
      const newJobs = [...prev, job];
      localStorage.setItem("jobs",JSON.stringify(newJobs))
      setJob("");
      return newJobs;
    });
  };

  const handleDelete = (index) => {
    setJobs( prev => {
      const newJobs = prev.filter((_, key) => key !== index);
      localStorage.setItem("jobs",JSON.stringify(newJobs))
      setJob("");
      return newJobs;
    });
  }

  return (
    <div style={{margin: 32}}>
      <input 
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job,index) => (
          <li key={index}>
            {job} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
  

}
export default TodoList;
