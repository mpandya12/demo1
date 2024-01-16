import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa'; // Import Bootstrap icon library
import "../../../style/Imagecropper.css";

const ProfilePicture = ({onChange}) => {
  const [selectedImageURL, setSelectedImageURL] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      onChange(selectedFile)
      const imageURL = URL.createObjectURL(selectedFile);
      setSelectedImageURL(imageURL);
      console.log(imageURL);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-icon" onClick={handleImageChange}>
        <FaCamera className="profile-icon-camera" />
        <input type="file" name='profile_img' onChange={handleImageChange} />
        {selectedImageURL && (
          <img
            src={selectedImageURL}
            alt="Profile Picture"
            className="profile-image"
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePicture;
