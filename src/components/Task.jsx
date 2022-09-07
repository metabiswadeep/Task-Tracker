import React from 'react'
import {FaTimes} from 'react-icons/fa'
import{BsBellFill, BsBellSlashFill} from 'react-icons/bs'

const Task = ({task,onDelete,onToggle}) => {
  return (
    <div className='task' onDoubleClick={()=>onToggle(task.id)}>
        <h3>
            {task.text} 
            {task.reminder===true? <BsBellFill /> : <BsBellSlashFill />}
            <FaTimes style={{color:'red',cursor:'pointer'}} onClick={()=>onDelete(task.id)}/>
        </h3> 
        <p>{task.date}</p>   
    </div>
  )
}

export default Task