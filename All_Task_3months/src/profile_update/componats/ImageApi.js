import axios from "axios";
import React, { Component } from "react";
class App extends Component {
  state = {
   
    selectedFile: null
  };

  // On file select (from the pop up)
  onFileChange = event => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    const res = axios.post("api/uploadfile", formData);
  
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h1>GeeksforGeeks</h1>
        <h3>File Upload using React!</h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Upload!</button>
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default App;
import React, { useState } from 'react';
import "../style/style.css";
import { Formik, Form, Field } from "formik";
import Cropper from 'react-easy-crop';
import * as Yup from "yup";
import ProfilePicture from './cropeer/Profilepic';
import { useDispatch } from 'react-redux';
import { updateImage, updateuser } from '../store/Slice';
import axios from 'axios';

function Profilepage() {
  let initialValues = {
    fname: "",
    phone: "",
    email: ""
  };

  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (imageData) => {
    setSelectedImage(imageData);
  };

  const handelsubmit = async (data) => {
    try {
      // Update user data
      dispatch(updateuser({ ...data }));

      // Upload image
      const formData = new FormData();
      formData.append('image', selectedImage);

      // Replace 'your_upload_api_endpoint' with the actual endpoint for file upload
      const response = await axios.post('your_upload_api_endpoint', formData);

      // Handle the response as needed
      console.log(response.data);

      // Update Redux store or do other actions based on the response

    } catch (error) {
      // Handle errors
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="back">
      <Formik
        initialValues={initialValues}
        onSubmit={handelsubmit}
      >
        {() => (
          <div className="form-container">
            <h1>Update Profile</h1>
            <Form layout="vertical" className="register-form">
              <div>
                <ProfilePicture />
              </div>
              <label>First Name</label>
              <Field
                type="text"
                name="fname"
                className="form-control"
              />
              <label>Phone</label>
              <Field
                type="number"
                name="phone"
                className="form-control"
              />
              <label>Email</label>
              <Field
                type="text"
                name="email"
                className="form-control"
              />
              {/* Add file input for image upload */}
              <label>Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e.target.files[0])}
              />
              <button className="btn btn-secondary" type="submit">
                Update
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default Profilepage;
