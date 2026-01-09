import React,{ useState, useEffect } from 'react'
import Card from './components/Card.jsx'

const App = () => {
  const[task,setTask]= useState("");
  const[description,setDescription]= useState("");
  const [allTasks, setAllTasks] = useState(() => {
    const savedTasks = localStorage.getItem("all-tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  function submitHandler(e){
    e.preventDefault();
    setAllTasks([...allTasks, { task, description }]);
    setTask("");
    setDescription("");

    
  }
  
  function deleteHandler(index){
    const oldTasks=[...allTasks];
    const conf = confirm('Do you really want to delete this element?')
    if(conf){
      oldTasks.splice(index,1);
      setAllTasks(oldTasks);
    }
  }
  useEffect(() => {
  localStorage.setItem("all-tasks", JSON.stringify(allTasks));
}, [allTasks]);

  return (
    <div className='min-h-screen bg-linear-to-br from-purple-400 to-indigo-500  '>
      <div className='flex justify-center'>
       <div className=' m-10 w-110 h-60 bg-white flex flex-col items-center rounded-2xl   '>
        <h1 className='text-3xl font-bold text-purple-600 mb-5 mt-5'>Today's Tasks</h1>
        <form onSubmit={submitHandler}>
          <div className='w-90 flex flex-col gap-4'>
          <input 
          value={task}
          required
          onChange={(e)=>setTask(e.target.value)}
          className='border rounded-lg px-4 py-2'
          type="text" 
          placeholder='Enter Task'
          />
          <input 
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          className='border rounded-lg px-4 py-2'
          type="text" 
          placeholder='Description'
          />
          <button className='bg-purple-500 text-white px-4 py-2 rounded-lg active:scale-95 active:bg-purple-700 hover:bg-purple-600 transition-colors duration-300'>
            Add Task
          </button>
          </div>
        </form>
       </div>
       </div>
        <div className='flex flex-wrap justify-center gap-6 mb-10'>
        {allTasks.map((item,index)=>(
          <Card
           key={index}
          task={item.task}
          description={item.description}
          deleteHandler={deleteHandler}
          idx={index} />
        ))}
        </div>
        
    
    </div>
    
  )
}

export default App
