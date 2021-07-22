import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import './signup_1.css'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup1() {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [timer, setTimer] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [title, setTitle]=useState("");
    
    function handleChange(event: any) {
        console.log(event.target.value)
        setEmail(event.target.value);
    }
    function invitationTo() {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            console.log("email invalid")
            openModal()
            
        } else {
            history.push("/signup");
            console.log("email valid")
        }

    }
    
    function openModal(){setIsOpen(true)};
    function closeModal(){setIsOpen(false)};
    return (
        <div className="pageInvitation">
           <Modal show={isOpen}>
        <Modal.Header >
          <Modal.Title >Invalid Email Address</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign:"center"}}>Please enter a valid email address</Modal.Body>
        <Modal.Footer style={{alignSelf:"center"}}>
            <button  style={{color:"blue",backgroundColor:"transparent",border:"none"}} onClick={closeModal}>
            OK
            </button>
  </Modal.Footer>
      </Modal>
            <div className="title">
                NFT Invitation
            </div>
            <div className="paragraph">
                <p> You’ve been invited to join the 1837 NFT platform! Please insert the email address you used to purchase a bottle previously with. A verification will be sent to you.</p>
            </div>
            <div className="input">
                <input className="inputEmail" type="text" placeholder="Email address " value={email} onChange={handleChange} />
            </div>
            <div className="divButton">
                <button onClick={() => { invitationTo() }}> Next </button>
            </div>
        </div>
    )
}
export default Signup1;