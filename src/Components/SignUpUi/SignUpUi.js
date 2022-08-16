import React, { useState } from "react";
import './SignUpUi.css';
function SignUpUi(){
    const [display,setDisplay]=useState(false)
return(
    <div>
        <div className="container">
            <div>
                <div className={!display?"signin_padding":"main_button"}>
                    <button className="sign" onClick={()=>setDisplay(true)}>Sign Up</button>
                    <button className="sign" onClick={()=>setDisplay(false)}>Sign In</button>
                </div>
                {display?<div>
                    <h1 className="title">Sign Up</h1>
                    <div>
                        <div className="field_container">
                        <input placeholder="First Name" className="name"/>
                        <input placeholder="Last Name" className="name"/>
                        </div>
                        <div className="field_container">
                            <input placeholder="Email" className="otherField"/>
                        </div>
                        <div className="field_container">
                        <input placeholder="Password" className="otherField"/>
                        </div>
                        <button className="login">Sign Up</button>
                    </div>
                </div>:
                <div>
                <h1 className="title">Sign In</h1>
                <div>
                    <div className="field_container">
                        <input placeholder="Email" className="otherField"/>
                    </div>
                    <div className="field_container">
                    <input placeholder="Password" className="otherField"/>
                    </div>
                    <button className="login">Sign In</button>
                </div>
            </div>
                }
            </div>
        </div>
    </div>
);
}
export default SignUpUi;