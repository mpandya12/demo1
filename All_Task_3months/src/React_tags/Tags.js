import React, { useState } from "react";
import "react-tagsinput/react-tagsinput.css";
import TagsInput from "react-tagsinput";
import "../style/tags.css";

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [currentInput, setCurrentInput] = useState("");

  const isvalidaction = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailPattern.test(email));
    return emailPattern.test(email);
  };
  const handleTagsChange = (newTags) => {
    setTags(newTags);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Tab" || e.key === "Enter") {
      console.log("entered");

      e.preventDefault();
      const inputValue = e.target.value.trim();
      if (isvalidaction(inputValue)) {
        const newTagList = [...tags, inputValue];
        setTags(newTagList);
        setCurrentInput("");
        
      } else {
        console.log("plz enter valid data");
      }
    }
  };
  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  return (
    <div className="add-tags-input-container">
      <h2 style={{color:"red"}}>Add Emails</h2>
      <div className="tags-input-wrapper">
        <TagsInput
          value={tags}
          inputProps={{
            onChange: handleInputChange,
            onKeyDown: handleKeyPress,
            value: currentInput,
          }}
          onChange={handleTagsChange}
          validate={isvalidaction}
        />
      </div>
      <div className="tags-preview">
        <strong>Tags:</strong> <br />
        {tags.join(", ")}
      </div>
    </div>
  );
};

export default Tags;
