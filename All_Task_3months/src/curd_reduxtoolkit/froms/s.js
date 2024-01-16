To scroll to the top of the table when a button is clicked, you can use the scrollTop property of the tbody element. To achieve this, you can create a reference for the tbody element and use it to access and manipulate the scrollTop property. Here's how you can modify your existing code:

Create a ref for the tbody element:
jsx
Copy code
import React, { useRef } from 'react';

const YourComponent = () => {
  const tbodyRef = useRef();

  // ... rest of your component code
};
Create a function to handle the button click and scroll to the top:
jsx
Copy code
const scrollToTop = () => {
  // Access the current property of the ref to get the DOM element
  const tbodyElement = tbodyRef.current;

  // Scroll to the top of the table
  if (tbodyElement) {
    tbodyElement.scrollTop = 0;
  }
};
Attach the ref to the tbody element:
jsx
Copy code
<tbody
  ref={tbodyRef}
  onScroll={onScroll}
  style={{ overflowY: "auto", height: "480px" }}
>
  {/* ... your table rows */}
</tbody>
Finally, attach the scrollToTop function to the button's onClick event:
jsx
Copy code
<BsArrowUpCircleFill
  onClick={scrollToTop}
  style={{
    display: isHidden ? "none" : "block",
    width: "50px",
    height: "40px",
    marginLeft: "1000px",
  }}
/>
Now, when the button is clicked, the scrollToTop function will be called, and it will scroll the tbody element to the top of the table. Make sure to import useRef from 'react' if you haven't already.





Is this conversation helpful so far?




