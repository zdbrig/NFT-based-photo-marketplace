import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../component/header/header" 
import CryptoJs from "crypto-js"
import './signup_2.css'

function Signup2(props:any) {

    let history = useHistory();
    const location = useLocation<{ email: 'value' }>();
    const [password,setPassword]=useState("");
    const [confirmPass,setConfirmPass]=useState("");
    const [email]=useState(!location.state ? "" : location.state.email);
    const [show,setShow]=useState(false);
    useEffect(() => {
        //console.log("email"+email)
    });
   
    function handleChangePass(event: any) {
      //  console.log(event.target.value)
        setPassword(event.target.value);
    }
    function handleChangeConfPass(event: any) {
        //console.log(event.target.value)
        setConfirmPass(event.target.value);
    }
    
    async function saveUser() {
        // SHA1
        let pwd =CryptoJs.SHA1(password).toString();
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: pwd,
                role:"user"
            }),
        };
        try {
            fetch("api/addUsers", requestOptions)
                .then((response) => response.text())

                .then((data) => {

                   // console.log(data)
                    history.push("/desktop");
                });
        } catch (err) {
            alert(err);
        }
    }

    function nextButton(){
        if (password != confirmPass ) {
            alert("Passwords do not match.");
            return false;
        }else{
            saveUser()
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