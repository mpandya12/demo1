import { Login } from '@mui/icons-material';
import React, { useState } from 'react';
import "../style/Word_wrappe.css"

const LoremIpsumComponent = () => {
  const [expanded1, setExpanded1] = useState(false);  // Separate state for the first paragraph
  const [expanded2, setExpanded2] = useState(false);  // Separate state for the second paragraph

  const toggleExpand1 = () => setExpanded1(!expanded1);
  const toggleExpand2 = () => setExpanded2(!expanded2);

  let text1 = "How are you doing today?  A well-organized paragraph supports or develops a single controlling idea, which is expressed in a sentence called the topic sentence. A topic sentence has several important functions: it substantiates or supports an essay’s thesis statement;Although most paragraphs should have a topic sentence, there are a few situations when a paragraph might not need a topic sentence.";
  const myArray1 = text1.split(" ");
  const displaytext1 = expanded1 ? myArray1.join(" ") : myArray1.slice(0, 9).join(" ");

  let text2 = "How to split words in a string JavaScript ? In JavaScript, the split method allows you to split the string into an array of substrings based on a given pattern. The split() function takes one or two optional parameters, the first one being the separator, and the second the maximum number of elements to be included in the resulting array.";
  const myArray2 = text2.split(" ");
  const displaytext2 = expanded2 ? myArray2.join(" ") : myArray2.slice(0, 9).join(" ");

  return (
    <div className='main'>
      <div className='box1'>
        <p>{displaytext1}</p>
        {myArray1.length > 20 && (
          <div className='box2'>
            {expanded1 ? (
              <p>
                <span><a onClick={toggleExpand1} style={{ color: "blue" }} className='box2'> Read More</a></span>
              </p>
            ) : (
              <p>
                <span><a onClick={toggleExpand1} style={{ color: "red" }}>Read less</a></span>
              </p>
            )}
          </div>
        )}
      </div>

      <div className='box1'>
        <p>{displaytext2}</p>
        {myArray2.length > 40 && (
          <div className='box2'>
            {expanded2 ? (
              <p>
                <span><a onClick={toggleExpand2} style={{ color: "blue" }} className='box2'> Read More</a></span>
              </p>
            ) : (
              <p>
                <span><a onClick={toggleExpand2} style={{ color: "red" }}>Read less</a></span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoremIpsumComponent;
