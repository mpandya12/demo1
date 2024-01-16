import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaGreaterThan } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col, Button, Form as BootstrapForm } from "react-bootstrap";
import "./style.css"
import { values } from "lodash";
function From() {
  const initialValues = {
    name: "",
    username: "",
   
    addresses: "",
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [data,setdata]=useState()
  const [val,setval]=useState(false)
  const openModal = (e) => {
    setModalOpen(true);
    
    
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (values) => {
    
    console.log("Form values:", values);
  };

  const handleModalSubmit = () => {
   
    closeModal();
  };



  return (
    <div style={{ border: "2px solid black", borderRadius: "10px", backgroundColor: "lightgray" }}>
      <Container className="container">
        <Row className="justify-content-center">
          <Col md={20}>
            <Formik initialValues={formValues} onSubmit={handleSubmit}>
              {(props) => (
                <Form className="p-2">
                  <div className="container ">
                   

                   
                    <div style={{ border: "1px solid black", padding: "10px", marginTop: "20px", height: "40px", width: "270px", marginLeft: "10px", borderRadius: "10px" }}>
                      <span> Add Address</span>
                      <FaGreaterThan style={{ marginLeft: "20px" }} onClick={openModal} />
                      
                      {isModalOpen && (
                        <div className="modal show" style={{ display: 'block', position: 'initial', height: "400px" }}>
                          <Modal.Dialog>
                            <Modal.Header closeButton>
                              <Modal.Title style={{ color: "black" }}>Add Address</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <p>Newly added address: {formValues.newAdd}</p>
                              <BootstrapForm.Group>
                                <label>Address</label>
                                <Field type="text" name="newAdd" className="form-control" />
                              </BootstrapForm.Group>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={closeModal}>Close</Button>
                              <Button variant="primary" onClick={() => handleModalSubmit(formValues.newAdd)}>Save changes</Button>
                            </Modal.Footer>
                          </Modal.Dialog>
                        </div>
                      )}
                    </div>
                    <Button className="box" style={{ backgroundColor: "lightslategrey", marginTop: "120px" }} type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default From;
//display the 


// ... (imports)

function EditPost() {
  // ... (other state variables)

  const handelcolse = () => {
    setModalOpen(false);
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    setVal([...val, {}]);
    setIsIconDisabled(true);
    setModalOpen(true);
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

  const handleAddAddress = () => {
    // Perform the desired action with the entered data (city, state, pincode)
    // For example, add it to the data state
    const newData = [...data, { id: uuidV4(), city, state, pincode }];
    setData(newData);
    
    // Reset form values
    setcity("");
    setstate("");
    setpincode("");

    closeModal(); // Close the modal after adding the address
  };

  return (
    <>
      {/* ... (rest of the code) */}
      {isModalOpen && (
        <div className="modal show" style={{ display: 'block', position: 'initial', height: "400px" }}>
          <Modal.Dialog>
            {/* ... (rest of the modal code) */}
            <Modal.Footer>
              <Button variant="secondary" onClick={handelcolse}>Close</Button>
              <Button variant="primary" onClick={handleAddAddress}>Add</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
    </>
  );
}

export default EditPost;
{data.map((item) => (
  <div key={item.id}>
    <p>City: {item.city}</p>
    <p>State: {item.state}</p>
    <p>Pincode: {item.pincode}</p>
  </div>
))}
// ... (imports)

function EditPost() {
  // ... (other state variables)

  const handelcolse = () => {
    setModalOpen(false);
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    setVal([...val, {}]);
    setIsIconDisabled(true);
    setModalOpen(true);
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

  const handleAddAddress = () => {
    const newData = [...data, { id: uuidV4(), city, state, pincode }];
    setData(newData);
    setcity("");
    setstate("");
    setpincode("");
    closeModal();
  };

  return (
    <>
      <div>
        <Button
          variant="secondary"
          onClick={openModal}
          style={{ marginLeft: "620px", backgroundColor: "green" }}
        >
          Address
        </Button>
        {data.map((item) => (
          <div key={item.id}>
            <p>City: {item.city}</p>
            <p>State: {item.state}</p>
            <p>Pincode: {item.pincode}</p>
          </div>
        ))}
      </div>
      {/* ... (rest of the code) */}
      {isModalOpen && (
        <div className="modal show" style={{ display: 'block', position: 'initial', height: "400px" }}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "black" }}>Add Address</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <BootstrapForm.Group>
                <label>City</label>
                <input type="text" name="city" className="form-control" value={city} onChange={(e) => setcity(e.target.value)} />
              </BootstrapForm.Group>
              <BootstrapForm.Group>
                <label>State</label>
                <input type="text" name="state" className="form-control" value={state} onChange={(e) => setstate(e.target.value)} />
              </BootstrapForm.Group>
              <BootstrapForm.Group>
                <label>Pincode</label>
                <input type="text" name="pincode" className="form-control" value={pincode} onChange={(e) => setpincode(e.target.value)} />
              </BootstrapForm.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handelcolse}>Close</Button>
              <Button variant="primary" onClick={handleAddAddress}>Add</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
    </>
  );
}

export default EditPost;
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaCirclePlus } from "react-icons/fa";
import { v4 as uuidV4 } from "uuid";
import { Container, Row, Col, Form as BootstrapForm } from "react-bootstrap";

import Swal from 'sweetalert2'
import "./style.css";

function EditPost() {
  const [showModal, setShowModal] = useState(false);
  const [isIconDisabled, setIsIconDisabled] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsIconDisabled(false);
    setCity("");
    setState("");
    setPincode("");
  };

  const handleAdd = () => {
    setIsIconDisabled(true);
    setAddresses([...addresses, { id: uuidV4(), city, state, pincode }]);
    setCity("");
    setState("");
    setPincode("");
  };

  const handleAddAll = () => {
    // Perform any action with the addresses array, e.g., store in a database
    console.log("All Addresses:", addresses);
    closeModal();
  };

  return (
    <>
      <div>
        <Button
          variant="secondary"
          onClick={openModal}
          style={{ marginLeft: "620px", backgroundColor: "green" }}
        >
          Address
        </Button>
        {addresses.map((address) => (
          <div key={address.id}>
            <p>City: {address.city}</p>
            <p>State: {address.state}</p>
            <p>Pincode: {address.pincode}</p>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ marginLeft: "210px", padding: "10px" }}>
            <button
              onClick={handleAdd}
              style={{ width: "39px", height: "40px", borderRadius: "90px" }}
            >
              <FaCirclePlus />
            </button>
          </div>
          {addresses.map((address) => (
            <div key={address.id}>
              <p>City: {address.city}</p>
              <p>State: {address.state}</p>
              <p>Pincode: {address.pincode}</p>
            </div>
          ))}
          <BootstrapForm.Group>
            <label>City</label>
            <input type="text" name="city" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} />
          </BootstrapForm.Group>
          <BootstrapForm.Group>
            <label>State</label>
            <input type="text" name="state" className="form-control" value={state} onChange={(e) => setState(e.target.value)} />
          </BootstrapForm.Group>
          <BootstrapForm.Group>
            <label>Pincode</label>
            <input type="text" name="pincode" className="form-control" value={pincode} onChange={(e) => setPincode(e.target.value)} />
          </BootstrapForm.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
          <Button variant="primary" onClick={handleAddAll}>Add All</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditPost;
