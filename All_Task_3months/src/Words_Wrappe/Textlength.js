import React, { useState } from 'react';

const TextComponent = ({ data }) => {
  const [showFullText, setShowFullText] = useState(false);

  // Function to toggle between showing full text and truncated text
  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };

  // Number of characters to display before showing "Read More" button
  const charLimit = 10;

  // Check if text exists before slicing
  const displayText = showFullText ? data : data.slice(0, charLimit);
console.log(displayText);
  return (
    <div>
      <p>{displayText}</p>
      {data && data.length > charLimit && (
        <button onClick={toggleTextVisibility}>
          {showFullText ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default TextComponent;
