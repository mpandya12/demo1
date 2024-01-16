import React, { useRef, useState } from 'react'
import '../style/imgecropp.css';
import { TbCameraPlus } from "react-icons/tb";
//import { Margin } from '@mui/icons-material';

const FileInput = ({onImageSelected ,  showModal , setShowModal , imgAfterCrop }) => {

  
    const handleOnImageChange = (e) => {

       console.log(e.target.files[0])

        if (e.target.files && e.target.files.length > 0) {
          console.log(e.target.files[0])
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function (e) {
              onImageSelected(reader.result);
            };
            setShowModal(true);
          }

      };

      
  const onChooseImg = () => {
     document.getElementById("addProfile").click();
  };

  return (
    <div className="mainCon">
    <div className="container-xl cropperCon">
      <h1 style={{color:"whitesmoke"}}>Image Cropper</h1>
      <div className="imgWrapper" >
        <button className="imgWrapperBtn  position-relative" >
          <img
          
            src={
             
              imgAfterCrop ? imgAfterCrop :  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt=""
            className="profileImg "
          ></img>
          <label
            className="imgWrapperBtn "
            onClick={onChooseImg}
          >
            <span className="iconWrapper position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger " style={{width:"50px"}}>
              <TbCameraPlus className="cameraIcon" style={{width:"50px",marginLeft:"-1px"}} />
            </span>
          </label>
        </button>
        <input
          accept="image/*"
          onChange={handleOnImageChange}
          className="d-none"
          type="file"
          name="addProfile"
          id="addProfile" 
        />
      </div>
    </div>
  </div>
  )
}

export default FileInput