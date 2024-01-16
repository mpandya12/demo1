import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../style/style.css";
import { Formik, Form, Field } from "formik";
import ProfilePicture from "./cropeer/Profilepic";
import { useDispatch } from "react-redux";
import { updateImage, updateuser } from "../store/Slice";
import Tour from "reactour";

function Profilepage() {
  // ... (other code remains the same)

  const [completedSteps, setCompletedSteps] = useState([]);
  const [IsTourOpen, setIsTourOpen] = useState(true);

  useEffect(() => {
    const storedSteps = localStorage.getItem("completedSteps");
    if (storedSteps) {
      setCompletedSteps(JSON.parse(storedSteps));
    }
  }, []);

  const handleStepChange = (newStep) => {
    setCompletedSteps((prevSteps) => [...prevSteps, newStep]);
    localStorage.setItem("completedSteps", JSON.stringify(completedSteps));
  };

  const handleTourClose = () => {
    setIsTourOpen(false);
  };

  const steps = [
    {
      selector: '[data-tut="reactour__add-button"]',
      content: "Click Here to Update User Pic.",
    },
    // ... other steps
  ];

  return (
    <div className="back">
      {/* ... (other code remains the same) */}
      <Tour
        isOpen={IsTourOpen}
        onRequestClose={handleTourClose}
        steps={steps}
        getCurrentStep={(currentStep) => handleStepChange(currentStep)}
      />
    </div>
  );
}

export default Profilepage;
