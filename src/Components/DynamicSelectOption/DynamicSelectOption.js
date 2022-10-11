import React, { useState } from "react";
function DynamicSelectOption(){
    const [val,setVal]=useState('')
    const data=["one","two","three","four","five"];
    return(
        <div>
            <select value={val} onChange={e=>setVal(e.target.value)}>
                {
                    data.map(opt=><option>{opt}</option>)
                }
            </select>
            <h1>{val}</h1>
        </div>
    );
}
export default DynamicSelectOption;