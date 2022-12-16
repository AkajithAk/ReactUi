import React, { useState } from "react";

function EmailValidation(){
    const [error,setError]=useState(false)
    // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const handleChnage =(val)=>{
        if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            setError(false)
        }else{
            setError(true)
        }
    }
    
    return(
        <>
            <input placeholder="Email" onChange={(e)=>handleChnage(e.target.value)} />
            {error?<p style={{color:"red"}}>Enter valid Email</p>:''}
        </>
    );
}
export default EmailValidation;