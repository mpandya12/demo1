import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { FaCirclePlus } from "react-icons/fa6";
import { v4 as uuidV4 } from "uuid";
import {
  Container,
  Row,
  Col,
  Button,
  Form as BootstrapForm,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AdressAction, DeleteAddress } from "../curd_reduxtoolkit/ReduxToolkit/Multiple";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Step, Stepper } from "react-form-stepper";
import Tour from "reactour";

function EditPost() {
  const [showModal, setShowModal] = useState(false);
  const [val, setVal] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const [selectId, setSelectedId] = useState(null);
  const Radioref = useRef(null);
  const Address = useSelector((state) => state.MultiAdress.Address);
  const [step, setStep] = useState(1); // Initialize the step state
  const [isTourOpen, setIsTourOpen] = useState(true);
  const handelcolse = () => {
    setModalOpen(false);
  };
  const closeTour = () => {
    setIsTourOpen(false);
  };
  const handleAdd = (e) => {
    e.stopPropagation();
    setVal([...val, {}]);
    setModalOpen(!isModalOpen);
    setStep(1);
  };


  const openModal = () => {
    setShowModal(true);
    setStep(1); 
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handelRadio = (id) => {
    setSelectedId(id);
    if (selectId === id) {
      console.log(true);
    } else {
      console.log(false);
    }
    console.log(selectId);
  };

  const handleAddAddress = () => {
    const newAddress = { id: uuidV4(), city, state, pincode };
    const address = dispatch(AdressAction(newAddress));
    setSelectedId(newAddress.id);
    console.log(newAddress.id);
    console.log(address);
    closeModal();
    setcity("");
    setstate("");
    setpincode("");
    closeModal();
  };

  const selectedAddress = Address.find((address) => address.id === selectId);

  useEffect(() => {
    if (Address.length > 0) {
      setSelectedId(Address[Address.length - 1].id);
      console.log("after selected ", selectId);
      console.log("address selected");
      if (Radioref.current) {
        Radioref.current.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  }, [Address]);

  const handeldelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(DeleteAddress(id));

        Swal.fire({
          title: "Deleted!",
          text: "Your data has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const steps = [
    {
      selector: '[data-tut="reactour__add-button"]',
      content: "Click here to add something.",
    },
    {
      selector: '[data-tut="reactour__remove-button"]',
      content: "Click here to delete something.",
    },
   
  ];
//i want to create steper for my website add,remove button when user first time render page that time when click on  this button open one pope for give what is happen when i click on these button like i want to cretate in those webiste when first time user vist website that give guides like that we give ok then prooess ahead like that i want to create 
  return (
    <>
      <h1 style={{ marginTop: "190px" }}>Add Multiple Address</h1>
      <div>
        <div>
          <Button
            variant="secondary"
            onClick={openModal}
            style={{
              width: "39px",
              height: "40px",
              borderRadius: "90px",
              backgroundColor: "green",
            }}
            data-tut="reactour__add-button"
          >
            +
          </Button>
          <div>
         
           
            
            <div style={{ display: "flex", flexDirection: "row" }}>
              {Address.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    border: "2px solid black",
                    width: "200px",
                    marginTop: "10px",
                    borderRadius: "20px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    {Address.length > 1 && (
                      <MdDelete
                        style={{ width: "40px", height: "30px", color: "red" }}
                        onClick={() => handeldelete(item.id)}
                        data-tut="reactour__remove-button"
                      />
                      
                    )}
                  </div>
                  <input
                    type="radio"
                    id={item.id}
                    name="addressRadio"
                    value={item.id}
                    onChange={() => handelRadio(item.id)}
                    checked={selectId === item.id}
                    ref={Radioref}
                  />
                  <h4>{index + 1}</h4>
                  <p>City: {item.city}</p>
                  <p>State: {item.state}</p>
                  <p>Pincode: {item.pincode}</p>
                </div>
              ))}
            </div>
          </div>
          {/*  */}
          <div style={{ marginBottom: "220px" }}>
            {selectedAddress && (
              <div>
                <h5 style={{ color: "blue" }}>Selected Address</h5>
                <p>City: {selectedAddress.city}</p>
                <p>State: {selectedAddress.state}</p>
                <p>Pincode: {selectedAddress.pincode}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
          

            <div style={{ marginLeft: "210px", padding: "10px" }}>
              <button
                onClick={handleAdd}
                style={{ width: "39px", height: "40px", borderRadius: "90px" }}
                data-tut="reactour__add-button"
              >
                <FaCirclePlus style={{ backgroundColor: "blueviolet" }} />
              </button>
            </div>

            {isModalOpen && (
              <div
                className="modal show"
                style={{
                  display: "block",
                  position: "initial",
                  height: "400px",
                }}
              >
                <Modal.Dialog>
                  <Modal.Header>
                    <Modal.Title style={{ color: "black" }}>
                      Add Address
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <BootstrapForm.Group>
                      <label>city</label>
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        value={city}
                        onChange={(e) => setcity(e.target.value)}
                      />
                    </BootstrapForm.Group>
                    <BootstrapForm.Group>
                      <label>state</label>
                      <input
                        type="text"
                        name="state"
                        className="form-control"
                        value={state}
                        onChange={(e) => setstate(e.target.value)}
                      />
                    </BootstrapForm.Group>
                    <BootstrapForm.Group>
                      <label>pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        className="form-control"
                        value={pincode}
                        onChange={(e) => setpincode(e.target.value)}
                      />
                    </BootstrapForm.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handelcolse}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleAddAddress}>
                      Add
                    </Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </div>
            )}
          </>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={closeTour}
      />
    </>
  );
}

export default EditPost;
