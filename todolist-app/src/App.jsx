import React, { useState,useEffect  } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    console.log(event.target.name)

    const targetName = event.target.name

    const targetvalue =
     targetName === "completed" ? event.target.checked : event.target.value;

    setFormState({
      ...formState,
      [event.target.name] : targetvalue,
    });
  }

  // useEffect(()=>{
  //   console.log(formState)
  // },[formState])


  useEffect(()=>{
    console.log(tasks);
  },[tasks]);


  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    // []


    setTasks([...tasks,formState]);

    setFormState({
      task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
    });
    
  }

  function handlDelete(index){
    let updateArray = [...tasks]
    //  console.log("before delete",updateArray)

    updateArray.splice(index,1);
    setTasks(updateArray);

    // console.log("after deleted",updateArray)

  }

  function handleToggle(index){
    let updateArray = [...tasks];

    updateArray[index].completed = !updateArray[index].completed
    
    setTasks(updateArray)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task"
           type="text"
            placeholder="Add Task" 
            value={formState.task}
            onChange={handleChange}/>
          <label>
            Completed:
            <input name="completed" type="checkbox" onChange={handleChange}/>
          </label>
          <select name="taskAssignedTo" onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem 
        key={index}
        item={item} 
        handlDelete={()=>handlDelete(index)}
        handleToggle={()=>handleToggle(index)}
        />
      ))}
    </>
  );
}

export default App;

