import React, { useState } from "react";

const State = () =>{

    const [data , setdata] = useState(0)

   const test = () =>{
        setdata(data+1)     
   }

    return(
        <>
        
        <h1>{data}</h1>
        <button type="button" onClick={test}>Click</button>
        </>
    )
}
export default State