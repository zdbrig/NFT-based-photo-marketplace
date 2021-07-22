import React, { useState, useEffect } from "react";
import './signup_2.css'

function Signup2() {
    
    return (
        <div className="pageSuccess">
            <div className="title">
                Success!
            </div> 
            <div className="paragraph">
                <p>Finally, enter a safe and memorable password for your account .</p>
            </div>
            <div className="input">
                <input className="inputPass" type="text" placeholder="Enter password"/>
            </div>
            <div className="inputConf">
                <input className="inputPass" type="text" placeholder="Confirm password"/>
            </div>
          <div className="divButton">
                <button> Next </button>
                </div>
        </div>
    )
}
export default Signup2;