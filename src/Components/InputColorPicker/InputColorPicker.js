import React, { useState } from "react";
import '../Common.css';
function InputColorPicker(){
    const [color,setColor]=useState('')
    return(
        <div className="main">
            <input type="color" onChange={(e)=>setColor(e.target.value)} />
            <h1>{color}</h1>
        </div>
    );
}
export default InputColorPicker;