import React, { useEffect, useState } from 'react'



function Tabel() {
  const [item,setitem]=useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
const [page,setpage]=useState(1)
const recordsPerPage=2
const[loading,setloading]=useState(false)
const onScroll=()=>{
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight - 20) {
    setpage((prevPage) => prevPage + 1);
  }
}
const fetchdata = (page) => {
 
  setTimeout(() => {
    // const Parpage=data.length /recordsPerPage
    // console.log(Parpage);
    const startIndex = (page - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const newData = item.slice(startIndex, endIndex);
    setitem((prevRows) => ([...prevRows, ...newData]));
   
  }, 1000);
};
 useEffect(() => {
  fetchdata(page);
  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
}, [page]);



  return (
  <>
  <h1>infinite scroll</h1>
  <div onScroll={onScroll} style={{height:"400px",overflow:"auto",marginTop:"30px"}}>


  {
    item.map((id,emp)=>
        (
          <h1 key={id+1}>hello{emp}</h1>
        )
    )
  }
    </div>
  </>
  )
}

export default Tabel