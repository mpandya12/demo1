import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaCirclePlus } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidV4 } from "uuid";

import Swal from 'sweetalert2'
//import 'sweetalert2/src/sweetalert2.scss'
import "./style.css";

function EditPost() {
  const [showModal, setShowModal] = useState(false);
  const [val, setVal] = useState([]);
  const [isIconDisabled, setIsIconDisabled] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState([
    { id: uuidV4(), post: "post for new car" },
    {id:uuidV4(),post:"post for bike"}
  ]);
  const [originalOrder, setOriginalOrder] = useState([...data]);
  const [deleteConfirmationData, setDeleteConfirmationData] = useState({
    isVisible: false,
    postId: null,
  });

  const handleAdd = (e) => {
    e.stopPropagation();
    setVal([...val, {}]);
    setIsIconDisabled(true);
  };

  const openModal = () => {
    setShowModal(true);
    setOriginalOrder([...data]);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsIconDisabled(false);
    setValue("");
   setData([...originalOrder]);
  };

  const addPost = () => {
    if (value.length===0 ) {
      Swal.fire({
         icon: "error",
         title: "worning...",
        text: "Not Enter Empty Data!",
     
      });
      
   
      console.log("empty string");
    } else {
      const newData = [...data, { id: uuidV4(), post: value }];
      setData(newData);
      setValue("");
    }
  
  };

  const deleteTask = (id) => {
    const filterData = data.filter((item) => {
      console.log(item.id);
      return item.id !== id;
    });

    setData(filterData);
  };



  const cancelTask = () => {
    setIsIconDisabled(false);
    setValue("");
    //setData([...data]);
  //  setData([...originalOrder]);
  };


  const handleDeleteConfirmation = () => {
    const { postId } = deleteConfirmationData;
    console.log(postId);
    //callback
    deleteTask(postId);
    setDeleteConfirmationData({ isVisible: false, postId: null });
  };

  const setIsVisible = (isVisible, postId) => {
    setDeleteConfirmationData({ isVisible, postId });
  };
//when i click on this open from  
  return (
    <>
      <div>
        <Button
          variant="secondary"
          onClick={openModal}
          style={{ marginLeft: "620px" ,backgroundColor:"green"}}
          
        >
          Address
        </Button>
      </div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
           
                
         <div style={{ marginLeft: "210px", padding: "10px" }}>
              <button
                disabled={isIconDisabled}
                onClick={handleAdd}
                style={{ width: "39px", height: "40px", borderRadius: "90px" }}
              >
                <FaCirclePlus
                  //className={`icon-add ${isIconDisabled ? "disabled" : ""}`}
                />
              </button>
            </div>
            {isIconDisabled && (
              
                           
                
               
                
               
           <p>display from</p>
            )}


          </>
        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditPost ;
