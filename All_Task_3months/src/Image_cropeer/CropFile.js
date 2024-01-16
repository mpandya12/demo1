import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { Button, Modal } from "react-bootstrap";

const ImageCropper = ({
  image,
  onCropDone,
  onCropCancel,
  handleClose,
  handleShow,
  showModal,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(2);
  const [cropShape, setCropShape] = useState("square");
  const [croppedArea, setCroppedArea] = useState(null);

  const onCropComplete = (croppedAreaPercentage,croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const handleRadioChange = (e) => {
    setCropShape(e.target.value);
  };

  return (
    <>

    {/* <div style={{ height: "230px", margin: "4px 5px"}} >
    <Cropper
            image={image}
            aspect={1 / 1}
            crop={crop}
            zoom={zoom}
            maxZoom={4}
            showGrid={false}
            zoomWithScroll={true}
            cropShape={cropShape}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            style={{
              containerStyle: {
                width: "100%",
                height: "100%",

              },
            }}
          />
          <div>
          <div className="shapRadioBtns">
          <div className="radioBtnWrapper">
            <label htmlFor="rounded">Square</label>
            <input
              class="form-check-input"
              type="radio"
              checked={cropShape === "square"}
              onChange={handleRadioChange}
              name="shap"
              value="square"
            />
          </div>

          <div className="radioBtnWrapper">
            <label htmlFor="rounded">Round</label>
            <input
              class="form-check-input"
              type="radio"
              checked={cropShape === "round"}
              onChange={handleRadioChange}
              name="shap"
              value="round"
            />
          </div>
        </div>
        <button type="button" class="btn btn-success"  onClick={() => {
              onCropDone(croppedArea);
              setCropShape("square");
              handleClose();
              document.getElementById('addProfile').value = "";
            }}>Upload Image</button>
          </div>
    </div> */}


      <Modal show={showModal} onHide={()=> { handleClose();}} style={{backgroundColor:"black"}}>

        <Modal.Body style={{ height: "230px", margin: "4px 5px"}}>
          <Cropper
            image={image}
            aspect={1 / 1}
            crop={crop}
            zoom={zoom}
            maxZoom={4}
            showGrid={false}
            zoomWithScroll={true}
            cropShape={cropShape}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            style={{
              containerStyle: {
                width: "100%",
                height: "100%",
                backgroundColor: "green",
              },
            }}
          />
        </Modal.Body>

        <div className="shapRadioBtns">
          <div className="radioBtnWrapper">
            <label htmlFor="rounded">Square</label>
            <input
              class="form-check-input"
              type="radio"
              checked={cropShape === "square"}
              onChange={handleRadioChange}
              name="shap"
              value="square"
            />
          </div>

          <div className="radioBtnWrapper">
            <label htmlFor="rounded">Round</label>
            <input
              class="form-check-input"
              type="radio"
              checked={cropShape === "round"}
              onChange={handleRadioChange}
              name="shap"
              value="round"
            />
          </div>
        </div>



          <button type="button" class="btn btn-success"  onClick={() => {
              onCropDone(croppedArea);
              setCropShape("square");
              handleClose();
              document.getElementById('addProfile').value = "";
            }}>Upload Image</button>

      </Modal> 
    </>
  );
};

export default ImageCropper;
