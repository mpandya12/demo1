import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaCirclePlus } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidV4 } from "uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Swal from 'sweetalert2'
//import 'sweetalert2/src/sweetalert2.scss'
import "../style/editpost.css";

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
       // footer: '<a href="#">Why do I have this issue?</a>'
      });
      
      // alert("empty data is not add")
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

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = [...data];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setData(items);
  }

  const cancelTask = () => {
    setIsIconDisabled(false);
    setValue("");
    //setData([...data]);
  //  setData([...originalOrder]);
  };

  const handleSave = () => {
    console.log("Order saved:", data);
    setShowModal(false);
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

  return (
    <>
      <div>
        <Button
          variant="secondary"
          onClick={openModal}
          style={{ marginLeft: "620px" ,backgroundColor:"green"}}
          
        >
          Edit Post
        </Button>
      </div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="characters">
                {(provided, snapshot) => (
                  <div
                    className="characters"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      padding: 8,
                      width: 400,
                      minHeight: 300,
                    }}
                  >
                    {data.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            key={index}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              border: "1px solid black",
                              margin: "4px",
                              borderRadius: "2px",
                              height: "50px",
                              width: "400px",
                              marginLeft: "30px",
                              position: "relative",
                            }}
                          >
                            <div style={{ flex: 1, marginRight: "10px" }}>
                              <span>{item.post}</span>
                            </div>
                            <div >
                              
                              {
                                data.length>1 && (
                                 
                                  <>
                              {/* {console.log(data.length)} */}
                            
                                  <span title="Delete">
                                  <FontAwesomeIcon
                                    className="delete"
                                    icon={faTrashCan}
                                    onClick={() => setIsVisible(true, item.id)}
                                  />
                                  </span>
                               
                                 </>
                                ) 
                              }
                               
                              
                              
                            </div>
                            {deleteConfirmationData.isVisible &&
                              deleteConfirmationData.postId === item.id && (
                                <div className="popup">
                                  <a
                                    href="#cancel"
                                    onClick={() => setIsVisible(false, null)}
                                    style={{ color: "green" }}
                                  >
                                    Cancel
                                  </a>
                                  <a
                                    href="#delete"
                                    onClick={handleDeleteConfirmation}
                                    style={{ color: "red" }}
                                  >
                                    Delete
                                  </a>
                                </div>
                              )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            </DragDropContext>

            {isIconDisabled && (
              
              <div className="main-div">
                <input
                  type="text"
                  placeholder="enter post"
                  name="value"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  
                  }}
                  
                />                
                
               
                
               
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={addPost}
                 // disabled={isIconDisabled}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={cancelTask}
                  style={{ backgroundColor: "red" }}
                >
                  Cancel
                </button>
              </div>
            )}

            <div style={{ marginLeft: "210px", padding: "10px" }}>
              <button
                disabled={isIconDisabled}
                onClick={handleAdd}
                style={{ width: "39px", height: "40px", borderRadius: "90px" }}
              >
                <FaCirclePlus
                  className={`icon-add ${isIconDisabled ? "disabled" : ""}`}
                />
              </button>
            </div>
          </>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn-save"
            onClick={handleSave}
            style={{ backgroundColor: "green", width: "100%" }}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditPost ;
