import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'
import AddTask from "./components/AddTask";


function App() {

  const[showAddTask,setShowAddTask]=useState(false)

  const [tasks,setTasks]=useState([
    {
        id:1,
        text:"Doctor's Appointment",
        date:'5 Feb',
        reminder:true
    },{
        id:2,
        text:"Meeting",
        date:'6 Feb',
        reminder:true   
    },{
        id:3,
        text:"Food Shopping",
        date:'6 Feb',
        reminder:false
    },{
        id:4,
        text:"Sleep",
        date:'7 Feb',
        reminder:false
    }
])

//Add Task
const addTask=(task)=>{
  const id=(Math.floor(Math.random()*10000)+1)
  const newTask={id,...task}
  setTasks([...tasks,newTask])
}



//Delete Task
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>(task.id!==id)))
}

//Toggle Reminder
const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>
  task.id==id?{...task,reminder:!task.reminder}: task))
}


  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder} />:'   No Taks to Show'}
    </div>
  );
}

export default App;
