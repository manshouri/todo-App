
import { useState } from 'react';
import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';

function App() {
  const [tasks,setTasks]=useState([])
  function addTask(name) {
    setTasks(prev => {
      return [...prev, {name:name,done:false}];
    })
  }
  return (
    <main>
     <h1> MASEMBE TODO LIST</h1>
    <TaskForm onAdd={addTask}/>
    {tasks.map(task =>(
      <Task/>
    ))}
   
   
    </main>
  );
}

export default App;
