import React from 'react'

function Time() {
    function istToCst(date) {
       
        const istOffset = date.getTimezoneOffset() * 60000;
      
        const cstDate = new Date(date.getTime() + istOffset);
      
      
        return cstDate;
      }
    const currentDate= istToCst(new Date())
    const hours=currentDate.getHours()
    const mintes=currentDate.getMinutes()

   const date=new Date()
   const Indian_hours=date.getHours()
   const Indian_mintes=date.getMinutes()
   console.log(date);
    console.log(currentDate);
    console.log("hours=>",hours);
    console.log("minutes =>",mintes);
    console.log("================================");
    console.log("indian hours=>",Indian_hours);
   
    console.log("Indian minutes=>",Indian_mintes);
  return (
    <div>Time</div>
    
  )
}

export default Time
