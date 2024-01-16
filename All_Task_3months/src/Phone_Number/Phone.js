import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
const Phone = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [phone, setphone] = useState("");

  const handlePhoneNumberChange = (e) => {
    
    setPhoneNumber(e.target.value);
  };
  

  return (
    <form>
      <div style={{ marginTop: "120px" }}>
        <h1>Phone Number with Country Code</h1>
        <div style={{ marginTop: "60px" }}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          
          <span>
            <input
              type="text"
              name="phoneNumber"
              value={`+91${phoneNumber}`}
              onChange={handlePhoneNumberChange}
              placeholder="Enter phone number"
            />
          </span>
        </div>
        <div style={{ marginLeft: "440px" }}>
           
          
          <PhoneInput
            country={"in"}
            onlyCountries={["in"]}
            disableCountryGuess={true}
            disableDropdown={true}
            value={phone}
            onChange={(phone) => setphone(phone)}
            countryCallingCodeEditable={false} 
          />
        </div>
      </div>
    </form>
  );
};

export default Phone;
