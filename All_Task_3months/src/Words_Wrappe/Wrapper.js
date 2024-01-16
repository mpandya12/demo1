import React, { useState } from 'react';
import "../style/Word_wrappe.css"
import Paragraph from './Paragrah';


const Wrapper = () => {
//const para 4="do not cut the paragraph word i want to give still maxLetters = 4 "

  const para1 = ` paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.`
  const para2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta."
  const para3="In this case, the hidden class will be added to or removed from the content element, depending on whether or not the button is clicked. If the class is added, the content element will be hidden. If the class is removed, the content element will be shown."
  
  return (
  <>
   <h1>Read  more and less</h1>
  
  <div >
    
      <Paragraph  text={para1}   />
      <Paragraph  text={para2}   />
      <Paragraph  text={para3}   />
  </div>

   </>
 


  
  );
};

export default Wrapper;
