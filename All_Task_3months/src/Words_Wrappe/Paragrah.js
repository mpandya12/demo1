import React, { useState } from 'react';
import "../style/Word_wrappe.css"

const Paragraph = ({ text, para }) => {
  const [expanded, setExpanded] = useState(true);
  const maxLetters = 10;
 console.log(text.length); 

  const truncateText = (text, maxLetters) => {
    if (text.length > maxLetters) {
    
      const words = text.split(' ');
      console.log(words);
      let totalLength = 0;
      const truncatedWords = [];
      console.log(truncatedWords);
 
      for (const word of words) {
  
        if (totalLength + word.length <= maxLetters) {
          
          truncatedWords.push(word);

         
          totalLength += word.length+1; 
        } else {
         
          break;
        }
    console.log(word)
        
      }

     
      return truncatedWords.join(' ') +"...";
    }
    return text;
  };

  const toggleExpand = () => setExpanded(!expanded);

  const displayText = expanded ? text : truncateText(text, maxLetters);

  return (
    <div className='box1'>
      <p className='p1'>{displayText}</p>
      {text.length > maxLetters && (
        <div>
          {expanded ? (
            <p>
              <span><a onClick={toggleExpand} style={{ color: "blue" }} className='box2'> Read less</a></span>
            </p>
          ) : (
            <p>
              <span><a onClick={toggleExpand} style={{ color: "red" }}>Read More</a></span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Paragraph;
