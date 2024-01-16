


import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import Toggle from 'react-toggle';
import "react-toggle/style.css" 


const Todo = ({ toDo,  setUpdateData, deleteTask ,toggleTaskStatus}) => {
  return(
    <>
      {toDo && toDo
     
      .map( (task) => {
        return(
          <div key={task.id}>
            {/* <li className={task.isCompleted==='done' ? 'over':'notover'}></li> */}
            <div className="col taskBg">
              <div >
                
                <span className="taskText">{task.title}</span>
              </div>
              <div className="iconsWrap">
               <span title='check'>
               <Toggle
            defaultChecked={task.isCompleted}
            onChange={() => toggleTaskStatus(task.id)}
          /> 
               </span>

                  <span title="Edit"
                    onClick={ () => setUpdateData({ 
                      id: task.id, 
                      title: task.title, 
                     
                    }) }
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                

                <span title="Delete"
                  onClick={() => deleteTask(task.id)}
                >
                  <FontAwesomeIcon className="delete" icon={faTrashCan} />
                </span>
              
              </div>
              
            </div>
        
          </div>
        )
      })
      }  
    </>
  )
}

export default Todo;
