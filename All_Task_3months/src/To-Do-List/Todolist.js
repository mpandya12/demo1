import React, { useState } from "react";
import "../style/ToDoList.css";
import { v4 as uuidV4 } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";

import Toggle from "react-toggle";
import "react-toggle/style.css";

function Todolist() {
  const [value, setvalue] = useState("");
  const [todo, settodo] = useState([{id:uuidV4(),name:value,isCompleted:false}]);
  const [editid, seteditid] = useState(null);
  //const[editmod,seteditmod]=useState(false)
 // const [checked,setchecked]=useState(defaultChecked)

  const adddata = () => {
    if (editid !== null) {
      const updatedTodos = todo.map((item) => {
        if (item.id === editid) {
          return { id: item.id, name: value };
        }
        return item;
      });

      settodo(updatedTodos);
      setvalue("");
      seteditid(null);
    } else {
      settodo([...todo, { id: uuidV4(), name: value }]);
      setvalue("");
      //seteditmod(false)
    }
  };

  const deleteTask = (id) => {
    const filterTodos = todo.filter((item) => {
      return item.id !== id;
    });

    settodo(filterTodos);
  };

  const editTask = (id) => {
    const edititem = todo.find((item) => {
      return item.id === id;
    });

    setvalue(edititem.name);
    seteditid(id);
  };
  const deleteall = () => {
    settodo([]);
  };
  const toggleTaskStatus = (id) => {
    const updatedToDo = todo.map((item) => {
      if (item.id === id) {
        const isCompleted = !item.isCompleted;

        if (isCompleted) {
          alert(`Task "${item.name}" marked as complete.`);
        } else {
          alert(`Task "${item.name}" marked as incomplete.`);
        }

        return {
          ...item,
          isCompleted: [{...todo,id:uuidV4(),name:value,isCompleted:true}],
        };
      }

      return item;
    });

    settodo(updatedToDo);
    console.log(updatedToDo);
  };

  return (
    <>
      <div className="body">
        <div className="container ">
          <br />
          <br />
          <h2>To Do List App </h2>
          <br />
          <br />
          <div className="row">
           
             
          
            <div className="col">
              <input
                value={value}
                onChange={(e) => {
                  setvalue(e.target.value);
                }}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-auto">
              <button onClick={adddata} class="btn btn-dark btn-add" >
                {editid ?  "Edit " : "go"}
              </button>
            </div>
          </div>

          {todo.map((item) => {
            let { id, name,isCompleted } = item;
            return (
              <>
               
                <div key={id}>
               
                  <div className="col  taskBg">
                    
                
                      <div>
                            <span className="taskText">{name}</span>
                          </div>
                    
                    
                   
                    <div className="iconsWrap">
                      <span
                        title="Edit"
                        defaultChecked={id}
                        onChange={() => toggleTaskStatus(id)}
                      >
                        <Toggle />
                      </span>

                      <span
                        title="Edit"
                        onClick={() => {
                          editTask(id);
                        }}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>

                      <span title="Delete" onClick={() => deleteTask(id)}>
                        <FontAwesomeIcon className="delete" icon={faTrashCan} />
                      </span>
                    </div>
                  </div>
                  
              
                </div>
                   
              </>
            );
          })}
          <button onClick={deleteall} className="btn btn-dark adds" >delete all</button>
        </div>
      </div>
    </>
  );
}

export default Todolist;
