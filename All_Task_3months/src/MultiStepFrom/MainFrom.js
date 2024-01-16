import React, { useState } from "react";

const MainFrom = () => {
  const [fromdata, setfromdata] = useState([
    {
      //1 step
      lname: "",
      fname: "",

      //2 step
      email: "",
      password: "",

      //3 step
      address: "",
      city: "",
      state: "",
      pincode: "",

      //4 step
      phone: "",
      social_id: "",
    },
  ]);
  const[page,setpage]=useState(0)
  
  const Fromtitle=[
    "Name",
    "login Infromaction",
    "Address",
    "Contect"
  ]

  return (
    <>
    <div>
        <h1 >Multiple step from</h1>
        <div >
        <div  >
   <h1 >page title</h1>
   </div>

        </div>
    </div>
    </>
  )
};

export default MainFrom;
