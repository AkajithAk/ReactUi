import React, { useEffect, useState }  from "react";

function DynamicApiOPtion() {
    const [values,setValues]=useState([])
    const [options,setOptions]=useState()

    useEffect(()=>{
        fetch("http://localhost:4000/fruit").then((data)=>data.json()).then((val)=>setValues(val))
    },[])

    console.log(values,"values")
    return(
        <div>
            <select onChange={(e)=>setOptions(e.target.value)}>
                {
                    values.map((opts,i)=><option key={i}>{opts.name}</option>)
                }
            </select>
            <h1>{options}</h1>
        </div>
    );
}

export default DynamicApiOPtion;