import {useId, useState} from 'react';
import TodoForm from './TodoFrom';
import EditFrom from './EditFrom';
import Todo from './Todo';



import 'bootstrap/dist/css/bootstrap.min.css';

import "../style/ToDoList.css"
function Toindex() {

 
  const [toDo, setToDo] = useState("");


  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // add task 
 
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1
      let newEntry = { id: num, title: newTask }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  // Delete task 
  
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
  }


  // Cancel update
  
  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Change task for update

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
     
    }
    setUpdateData(newEntry);
  }

  // Update task
 
  const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }
  // Toggle task status
  const toggleTaskStatus = (id) => {
    const updatedToDo = toDo.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompletesd,
          
        };
      
      }
      return task;
    });
    setToDo(updatedToDo);
  };
  const removeall=()=>{
    setToDo([]);
  }
  return (
    <div className='body'>
    <div className="container App">

    <br /><br />
    <h2>To Do List App (ReactJS)</h2>
    <br /><br />
    
    {updateData && updateData ? (
     
      <EditFrom 
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <TodoForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    )}

    {/* Display ToDos */}


    <Todo
      toDo={toDo}
    
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
      toggleTaskStatus={toggleTaskStatus}
    />  

    </div>
    <div>
      <button onClick={removeall} className='btn-add'>Remove All</button>
    </div>
    </div>
  );
}

export default Toindex;
