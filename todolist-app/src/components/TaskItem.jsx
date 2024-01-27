import React from 'react'

const TaskItem = ({item,handlDelete,handleToggle}) => {
    return(
        <div>
            <h1 style={{color: item.completed ? "green" : "red"}}>{item.task}</h1>

            <button onClick={handleToggle}>{item.completed ? "Yes" : "No"}</button>
            
            
            {/* <p>{item.completed.toString()}</p> */}


            <p>{item.taskAssignedTo}</p>
            
            <button onClick={handlDelete}>Delete</button>
        </div>
    )
}

export default TaskItem;