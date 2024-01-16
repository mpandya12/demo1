//file upload and data using post with axios react js

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../../style/style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

import ProfilePicture from "./cropeer/Profilepic";
import { useDispatch } from "react-redux";
import {  updateImage, updateuser } from "../store/Slice";
import {complected, updateCompletedSteps} from "../../curd_reduxtoolkit/ReduxToolkit/Curdslice"
import Tour from "reactour";
import { Step } from "react-form-stepper";
import { useSelector } from "react-redux";

function Profilepage() {
  let initialValues = {
    profile_img: "",
    name: "",
    email: "",
  };

  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [IsToureopen, setIsTourOpen] = useState(true);

  const tourref=useRef()

  
  const handelToureColse = () => {
    setIsTourOpen(false);
  };

  
 
  const stepsDefine=useSelector(state=>state.AddFrom.completedsteps)
  console.log(stepsDefine);

   
  const handleImageChange = (ImageData) => {
    setSelectedImage(ImageData);
    console.log(ImageData);
  };
  
  const handelsubmit = async (data) => {
    try {
      dispatch(updateuser({ ...data }));
      const formData = new FormData();
      formData.append(" profile_img", selectedImage);
      formData.append("name", data.name);
      formData.append("email", data.email);
      console.log(formData);

      const headers = {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3BlYmFwaS5za2F2aXNiaW90ZWMuY29tL2FwaS9sb2dpbiIsImlhdCI6MTcwMDgxMDAwNywiZXhwIjoxNzMyMzQ2MDA3LCJuYmYiOjE3MDA4MTAwMDcsImp0aSI6IkdaVnNXZ3pQN29ialljNzAiLCJzdWIiOiIzMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.96SIWKdALqfjEsSirWJRDJ4hmM_embv9Due0SgHcfFk`,
        Accept: "application/json",
        "content-type": "multipart/form-data",
      };

      const response = await axios.post(
        "https://pebapi.skavisbiotec.com/api/update-profile",
        formData,
        { headers }
      );

      dispatch(updateImage(selectedImage));

      console.log(response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  const stpes = [
    {
      selector: '[data-tut="reactour__add-button"]',
      content: "Click Here to Update User Pic.",
    },
    {
      selector: '[data-tut="reactour_update_button"]',
      content: "Click here to Update.",
    },
    {
      selector: '[data-tut="reactour_name_button"]',
      content: " enter First name",
    },
    {
      selector: '[data-tut="reactour_phone_button"]',
      content: " Enter Phone number",
    },
    {
      selector: '[data-tut="reactour_Email_button"]',
      content: "Enter Email Address",
    }
   
  ];
  
 
 //handel index on refrence page 

 
  return (
    <div className="back">
      <Formik initialValues={initialValues} onSubmit={handelsubmit}>
        {() => (
          <div className="form-container ">
            <h1>Update Profile</h1>
            <Form layout="vertical" className="register-form">
              <div data-tut="reactour__add-button">
                <ProfilePicture onChange={handleImageChange} />
              </div>
              <label>First Name</label>

              <Field
                type="text"
                name="name"
                className="form-control"
                data-tut="reactour_name_button"
              />
              <label>Phone</label>
              <Field
                type="tel"
                name="phone"
                className="form-control"
                readOnly
                value="123456123"
                data-tut="reactour_phone_button"
              />

              {/* add user guide from */}

              <label>Email</label>
              <Field
                type="text"
                name="email"
                className="form-control"
                data-tut="reactour_Email_button"
              />

              <button
                className="btn btn-secondary"
                type="submit"
                data-tut="reactour_update_button"
              >
                Update
              </button>
           
            </Form>
          </div>
        )}
      </Formik>
     
      
      <Tour
      ref={tourref}
        isOpen={IsToureopen}
        onRequestClose={handelToureColse}
        steps={stpes}
       //startAt={currentStep}
       //getCurrentStep={(curr) => setCurrentStep(curr)}
        showNavigation={true}
        showButtons={true}
        rounded={10}
    
        // getCurrentStep={GoToNextStep}
        // getCurrentStep={() => handleStepComplete()}
      />

    </div>
  );
}

export default Profilepage;

//i can't go to next step