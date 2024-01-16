import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../style/From.css";

import {
  Container,
  Row,
  Col,
  Button,
  Form as BootstrapForm,
} from "react-bootstrap";
let EMAIL_REGX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/


const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .matches(EMAIL_REGX, "Invalid email address"),

  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
    phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),
    address:Yup.string().required("address is required"),
  city: Yup.string().required("City is required"),
  gender: Yup.string().required("Gender is required"),
  hobbies: Yup.array()
    .required("Hobbies are required")
    .min(1, "Select at least one hobby"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  address:"",
  confirmPassword: "",
  phone:"",
  city: "",
  gender: "",
  hobbies: [],
};

const hobbies = ["Reading", "Cooking", "Gaming", "Sports", "Music"];

const MyFrom = () => {
  const handleSubmit = (values,actions) => {
    //display from data as object
    console.log(values);
    alert("submited");
    actions.resetForm();
    
 
  };

  return (
    <Container >
      <Row className="justify-content-center">
        <Col md={6}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => (
            
              <Form className="p-5">
               {console.log(formik)}
                <div className="container-fluid bg-dark text-light py-3 ">
                  <header className="text-center">
                    <h1 className="display-6">Register From</h1>
                  </header>
                </div>
                <div className="container my-2 bg-dark w-100 text-light p-2">
                  <BootstrapForm.Group>
                    <label>Name</label>
                    <Field type="text" name="name" className="form-control" />
                  
                  </BootstrapForm.Group>

                  <BootstrapForm.Group>
                    <label>Email</label>
                    <Field type="text" name="email" className="form-control" />
                  
                  </BootstrapForm.Group>

                  <BootstrapForm.Group>
                    <label>Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>

                  <BootstrapForm.Group>
                    <label>Confirm Password</label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                    />
                  
                  </BootstrapForm.Group>

                  
                  <BootstrapForm.Group>
                    <label>Phone</label>
                    <Field
                      type="number"
                      name="phone"
                      className="form-control"
                    />
                  
                  </BootstrapForm.Group>
                  <BootstrapForm.Group>
                  
                    <label for="exampleFormControlTextarea1">Address</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="address" ></textarea>
                  
                  </BootstrapForm.Group>
                  <BootstrapForm.Group>
                    <label>City</label>
                    <Field as="select" name="city" className="form-select">
                      <option value="">Select City</option>
                      <option value="Gujarat"> Gujrat</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                    </Field>
                  
                  </BootstrapForm.Group>

                  <BootstrapForm.Group>
                    <label>Gender</label>
                    <div>
                      <label >
                        <Field type="radio" name="gender" value="Male" className="radio-box" /> 
                        Male
                      </label>
                      <label >
                       
                        <Field type="radio" name="gender" value="Female"  />
                        Female
                      </label>
                    </div>
                   
                  </BootstrapForm.Group>

                  <BootstrapForm.Group>
                    <label>Hobbies</label>
                    <div>
                      {hobbies.map((hobby) => (
                        <label key={hobby}>
                          <Field type="checkbox" name="hobbies" value={hobby} />{" "}
                          {hobby}
                        </label>
                      ))}
                    </div>
                   
                  </BootstrapForm.Group>

                  <Button type="submit" variant="primary" className="box" >
                    Submit
                  </Button>

                  
                </div>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFrom;
