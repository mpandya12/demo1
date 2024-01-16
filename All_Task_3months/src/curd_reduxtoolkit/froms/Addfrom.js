import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TagsInput from "react-tagsinput";
import * as Yup from "yup";
import "../../style/CurdFrom.css"
import "react-tagsinput/react-tagsinput.css";

import {
  Container,
  Row,
  Col,
  Button,
  Form as BootstrapForm,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddFrom, EditFrom } from "../ReduxToolkit/Curdslice";
import { Modal } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const EMAIL_REGX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zAZ0-9-.]+$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.string().required("Dob is required"),
  state: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
 //Address: Yup.number().ma(10),
  email: Yup.string().matches(EMAIL_REGX, "Invalid email address"),
});

const Addfrom = ({ isEditing, showModal, closeModal, onSubmit}) => {
  const city = ["Gandhinagar", "surat", "Panaji", "Bengaluru", "Ranchi"];
  const lanaguage=["hindi","english","gujrati"]
  const state = ["Gujarat", "Goa", "Jharkhand", "Karnataka"];
  const { editData } = useSelector((state) => state.AddFrom);
  console.log(editData);
  const dispatch = useDispatch();


  let initialValues = {
    name: "",
    username: "",
    gender: "",
    dob: "",
    state: "",
    city: "",
    address: "",
    email: "",
    language:""
  };

  if (isEditing) {
    initialValues = {
      name: editData?.name || "",
      username: editData?.username || "",
      gender: editData?.gender || "",
      dob: editData?.dob || "",
      state: editData?.state || "",
      city: editData?.city || "",
      address: editData?.Address || "",
      email: editData?.email || "",
    };
  }
  const [tags, setTags] = useState([]);
  const [currentInput, setCurrentInput] = useState("");

 
  const handleTagsChange = (newTags) => {
    setTags(newTags);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Tab" || e.key === "Enter") {
      console.log("entered");

      e.preventDefault();
      const inputValue = e.target.value.trim();
  
        const newTagList = [...tags, inputValue];
        setTags(newTagList);
        setCurrentInput("");
        
     
    }
  };
  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isEditing ? "Edit Employee" : "Add Employee"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Row className="justify-content-center">
            <Col md={20}>
              <Formik
                initialValues={initialValues}
                enableReinitialize={true}
               validationSchema={validationSchema}
                onSubmit={(values) => {
                  if (isEditing) {
                    dispatch(EditFrom({ ...values }));

                  } else {
                    dispatch(AddFrom({ ...values, id: uuidv4() }));
                    console.log(values);
                  }
                  closeModal();
                }}
              >
                {(props) => (
                  <Form className="p-2">
                    <div className="container my-2 bg-dark w-100 text-light p-2">
                      <BootstrapForm.Group>
                        <label>First Name</label>
                        <Field
                          type="text"
                          name="name"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-danger"
                        />
                      </BootstrapForm.Group>

                      <BootstrapForm.Group>
                        <label>User Name</label>
                        <Field
                          type="text"
                          name="username"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="text-danger"
                        />
                      </BootstrapForm.Group>
                      <BootstrapForm.Group>
                        <label>Gender</label>
                        <div>
                          <label>
                            <Field
                              type="radio"
                              name="gender"
                              value="Male"
                              className="radio-box"
                            />
                            Male
                          </label>
                          <label>
                            <Field type="radio" name="gender" value="Female" />
                            Female
                          </label>
                        </div>
                        <ErrorMessage
                          name="gender"
                          component="div"
                          className="text-danger"
                        />
                      </BootstrapForm.Group>
                      <BootstrapForm.Group>
                        <label>Dob</label>
                        <Field
                          type="date"
                          name="dob"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="dob"
                          component="div"
                          className="text-danger"
                        />
                      </BootstrapForm.Group>

                      <BootstrapForm.Group>
                        <label>Country</label>
                        <Field as="select" name="state" className="form-select">
                          <option value="">Select State</option>
                          {state.map((state) => (
                            <option value={state} key={state}>
                              {state}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="state"
                          component="div"
                          className="text-danger"
                        />
                      </BootstrapForm.Group>

                      <BootstrapForm.Group>
                        <label>City</label>
                        <Field as="select" name="city" className="form-select">
                          <option value="">Select City</option>
                          {city.map((city) => (
                            <option value={city} key={city}>
                              {city}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="city"
                          component="div"
                          className="text-danger"
                        />
                      </BootstrapForm.Group>
                      <BootstrapForm.Group>
                      <label for="exampleFormControlTextarea1">Address</label>
                       <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="address" maxLength={100}    onChange={props.handleChange}
             onBlur={props.handleBlur}>{props.values.address}</textarea>
                        <ErrorMessage
                          name="Address"
                          component="div"
                          className="text-danger"
                        />
                        <h5 style={{color:"white"}}>{props.values.address.length}/100</h5>
                      </BootstrapForm.Group>

                      <BootstrapForm.Group>
                        <label>Email</label>
                        <Field
                          type="email"
                          name="email"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger"
                        />
                      </BootstrapForm.Group>
                      <label>languages</label>
                      
            
              <TagsInput
             name="language"
              value={tags}
              inputProps={{
                onChange: handleInputChange,
                onKeyDown: handleKeyPress,
                value: currentInput,
              }}
              onChange={handleTagsChange}
              className="tags-preview"
            
            />
              
            
          
                             <BootstrapForm.Group>

                        </BootstrapForm.Group>

                      <Button type="submit" variant="primary" className="box">
                        {isEditing ? "Save Changes" : "Submit"}
                      </Button>
                      <Button
                        className="btn btn-info box-1"
                        onClick={closeModal}
                      >
                        Cancel
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Addfrom;
// const applyFilter = () => {
//   const filteredRows = [...data].filter((row) => {
//     console.log("selectedcolum:=>", selectedColumn);
//     console.log("selectedOperater:=>", selectedOperator);
//     console.log("filtervalue", filterValue);
//     if (selectedOperator === "is empty") {
//       return !row[selectedColumn];
//     }
//     else if(selectedColumn==='id' && selectedOperator==='equal'){
//       return row[selectedColumn]===filterValue
//     }


//     else if(selectedColumn==='id' && selectedOperator==='Between'){
//       //id display in range given range

//     }
//     else if (selectedColumn === "id" && selectedOperator === "greater than") {
//      //id display user given number 
//      const idval=parseInt(row[selectedColumn])
//      console.log(idval);
//      return  idval > parseInt(filterValue,7)
//     }
//     else if(selectedColumn==="id" && selectedOperator==="less than")
//  {
//   //id display user give in filtervalue less than number
//  }
//  else if(selectedColumn==="id" && selectedOperator==="Does not equal")
// {
//   //id display  "Does not equal" filtervalue
// } 

   
//     else if (
//       ( selectedColumn === "name" ||
//       selectedColumn === "username" ||
//       selectedColumn === "state" ||
//       selectedColumn === "city" && selectedOperator === "equal")
//     ) {
//       return row[selectedColumn] === filterValue;
//     } 
//     else if (
//       selectedColumn === "name" && selectedOperator === "start with"
//     ) {
//       const username = row[selectedColumn];
//       const filterval = filterValue.toLocaleLowerCase();
//       return username.toLocaleLowerCase().startsWith(filterval);
//     } 
//     //else if (
//     //   (selectedColumn === "name" && selectedColumn === "username") ||
//     //   selectedColumn === "state" ||
//     //   (selectedColumn === "city" && selectedOperator === "end with")
//     // ) {
//     //   const data = row[selectedColumn];
//     //   const filterval = filterValue.toLocaleLowerCase();
//     //   return data.toLocaleLowerCase().endsWith(filterval);
//     // }

//     return false;
//   });

//   setrows(filteredRows);    
//   console.log(filteredRows);
// };