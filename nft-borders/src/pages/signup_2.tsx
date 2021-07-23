import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../component/header/header" 
import './signup_2.css'

function Signup2(props:any) {

    let history = useHistory();
    const [password,setPassword]=useState("");
    const [confirmPass,setConfirmPass]=useState("");
    const [show,setShow]=useState(false);

    function handleChangePass(event: any) {
        console.log(event.target.value)
        setPassword(event.target.value);
    }
    function handleChangeConfPass(event: any) {
        console.log(event.target.value)
        setConfirmPass(event.target.value);
    }
    function nextButton(){
        if (password != confirmPass ) {
            alert("Passwords do not match.");
            return false;
        }else{
            history.push("/desktop");
            return true;
        }
    }
    return (
        <>
        <Header showButtonConnect={false}></Header>
        <div className="pageSuccess">
            
            <div className="title">
                Success!
            </div> 
            <div className="paragraph">
                <p>Finally, enter a safe and memorable password for your account .</p>
            </div>
            <div className="input">
                <input className="inputPass" type="password" placeholder="Enter password" value={password} onChange={handleChangePass}/>
            </div>
            <div className="inputConf">
                <input className="inputPass" type="password" placeholder="Confirm password" value={confirmPass} onChange={handleChangeConfPass}/>
            </div>
          <div className="divButton">
                <button onClick={nextButton}> Next </button>
                </div>
        </div>
        </>
    )
}
export default Signup2;