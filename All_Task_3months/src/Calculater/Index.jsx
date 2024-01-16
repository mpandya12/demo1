import React, { useState } from "react";
import "../style/claculater.css";
import { Flag } from "@mui/icons-material";
import * as Yup from "yup";


function Index() {
  const [fristvalue, setfirstvalue] = useState("");
  const [secondvalue, setsecondvalue] = useState("");
  const [result, setResult] = useState("");
  const [history, sethistory] = useState([]);
  const [fristvalueError, setfirstvalueError] = useState(false);
  const [secondvalueError, setsecondvalueError] = useState(false);
  const [error, seterror] = useState(false);

  //for validaction
  //if input filed 1 and 2 are empty then return seterror true otherwise seterror return false

  
const schema = Yup.object().shape({
  fristvalue: Yup.number().required("enter number plz"),
  secondvalue:Yup.number().required("enter number")
})
  const handleAddition = () => {
   schema.isValid({
    fristvalue:fristvalue,
    secondvalue:secondvalue
   }).then((isValid)=>{
      if(isValid){
        const add = parseFloat(fristvalue) + parseFloat(secondvalue);
        setResult(add);
        addhistory(`${fristvalue}+${secondvalue}=${add}`);
        setfirstvalueError(false); // Reset the error flags
        setsecondvalueError(false);
      }else{
        setfirstvalueError(true)
        setsecondvalueError(true)
      }
   })
   
  };
  const handleSub = () => {
    schema.isValid({
      fristvalue:fristvalue,
      secondvalue:secondvalue
     }).then((isValid)=>{
        if(isValid){
          const sub = (fristvalue) - (secondvalue);
          setResult(sub);
          addhistory(`${fristvalue} - ${secondvalue}=${sub}`);
          setfirstvalueError(false); // Reset the error flags
          setsecondvalueError(false);
        }else{
          setfirstvalueError(true)
          setsecondvalueError(true)
        }
     })
     
  
  };
  const handlemul = () => {
    schema.isValid({
      fristvalue:fristvalue,
      secondvalue:secondvalue
     }).then((isValid)=>{
        if(isValid){
          const mul = parseFloat(fristvalue) * parseFloat(secondvalue);
          setResult(mul);
          addhistory(`${fristvalue}*${secondvalue}=${mul}`);
          setfirstvalueError(false); // Reset the error flags
          setsecondvalueError(false);
        }else{
          setfirstvalueError(true)
          setsecondvalueError(true)
        }
     })
   
  };
  const handledivison = () => {
    schema.isValid({
      fristvalue:fristvalue,
      secondvalue:secondvalue
     }).then((isValid)=>{
        if(isValid){
          const div = parseFloat(fristvalue) / parseFloat(secondvalue);
          setResult(div);
          addhistory(`${fristvalue} / ${fristvalue}=${div}`);
          setfirstvalueError(false); // Reset the error flags
    setsecondvalueError(false);
        }else{
          setfirstvalueError(true)
          setsecondvalueError(true)
        
        }
     })
   
  };

  const Cleardata = () => {
    setfirstvalue("");
    setsecondvalue("");
    setResult("");
  };

  const addhistory = (entry) => {
    sethistory([...history, entry]);
    if(!error){
      seterror(true)
    }
  };

  const Clearhistory = () => {
    sethistory([]);
  };
  return (
    <>
      <div className="box-2">
        <div className="box-3">
          <label className="label-1">enter number </label>
          <br></br>

          <input
            className="label-2"
            type="number"
            value={fristvalue}
            onChange={(event) => setfirstvalue(event.target.value)}
          />
          
          {fristvalueError && <div className="error-box">Invalid input</div>}
          <label className="label-1">enter number </label>
          <br></br>
          <input
            className="label-2"
            type="number"
            value={secondvalue}
            onChange={(event) => setsecondvalue(event.target.value)}
          />
        {secondvalueError && <div className="error-box">Invalid input</div>}

          {/* result */}
          <div>
            <label className="label-3"> Result </label>
            <br></br>
        
            <label className="label-6">{result}</label>

            {/* buttons */}
            <div class="button-group">
              <button onClick={handleAddition}> + </button>
              <button onClick={handleSub}>- </button>
              <button onClick={handlemul}>*</button>
              <button onClick={handledivison}>/</button>
            </div>

            {history.length > 0 && (
              <div className="label-7">
                <div className="label-8">
                  <ul>
                    {history.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </div>

                <button className="label-5" onClick={Clearhistory}>
                  All history
                </button>
              </div>
            )}

            {/* //clear  */}
            {/* <div>
            <button className="label-4" onClick={Cleardata}>
              clear
            </button>
            <button className="label-5" onClick={Clearhistory}>
              All history
            </button>
          </div> */}
            <div>
              <button className="label-4" onClick={Cleardata}>
                clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
