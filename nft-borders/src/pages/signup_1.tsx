import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import './signup_1.css'
import Modal from "react-bootstrap/Modal";
import Header from "../component/header/header" 
import "bootstrap/dist/css/bootstrap.min.css";
import store from "../redux/store"
import Swal from "sweetalert2";
import { emailUser } from "../redux/actions"
function Signup1(props:any) {
   let history = useHistory();
    const [email, setEmail] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [timer, setTimer] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [title, setTitle]=useState("");
 
    function handleChange(event: any) {
        //console.log(event.target.value)
        setEmail(event.target.value);
    }
    function getUserByEmail(email: any) {
        fetch("/api/getUserByEmail?email=" + email)
            .then(function (response) {
                if (response.status !== 200) {
                    console.log(
                        "Looks like there was a problem. Status Code: " +
                            response.status
                    );
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data)
                   /* if(data.res==null){
                    history.push({
                        pathname:"/signup",
                        state: { email: email }

                    });  

                    }else if(data.res.role=="admin"){
                        
                        history.push("/superAdmin");
                        }else{
                            verifyNFT()
                       
                        } */
                        verifyNFT(data.res)
                    
                });
            })
            .catch(function (err) {
                console.log("Fetch Error :-S", err);
            });
    }
    function verifyNFT(res:any){
        if(res==null){
            history.push({
                pathname:"/signup",
                state: { email: email }

            });  
        }else if(res.role=="admin"){
                            
                history.push("/superAdmin");
            } else {
        var querytosend = `{
            allPhotoNFTs(where:{addreseEmail:"${email}"}){
                id owner photoNft photoPrice ipfsHashOfPhoto timesTmp blockNumber nftName nftSymbol addreseEmail statusPhoto} 
              
          }`;
            fetch("https://api.thegraph.com/subgraphs/name/zouaouik/nftborder",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json;charset=UTF-8",
                    },
                    body: JSON.stringify({
                        query: querytosend,
                    }),
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    if (data.data.allPhotoNFTs.length === 0) {
                        Swal.fire({
                            icon: "error",
                            title: "Error...",
                            text: "you have to create an nft by this email please!",
                        });
                        
    
                    }else{history.push("/desktop");}
                       
                        
                    
                });
            }
    }
    function invitationTo() {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            console.log("email invalid")
            openModal()
            
        } else {
            console.log(email)
            store.dispatch(emailUser(email));
            getUserByEmail(email)
            console.log("email valid")
        }

    }
    
    function openModal(){setIsOpen(true)};
    function closeModal(){setIsOpen(false)};
    function handleAccount(account:any)
    { 
       
    }
    function addressAccount(account:any){
        console.log("address metmaske"+account)
    }
    return (
        <>
        <Header showButtonConnect={false} selectAccount={handleAccount} accountMetmaske={addressAccount}></Header>
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
            <div >
               <h1 className="title">NFT Invitation </h1> 
            </div>
            <div className="col-12" >
            <div className="  row paragraph">
                <p> You’ve been invited to join the 1837 NFT platform! Please insert the email address you used to purchase a bottle previously with. A verification will be sent to you.</p>
            </div>
            
            <div className=" row divInput">
                <input className=" row inputEmail" type="text" placeholder="Example@email.com"  value={email} onChange={handleChange} />
                </div>
            <div className=" row divButton">
                <button onClick={() => { invitationTo() }}> Next </button>
            </div>
           
            </div>
        </div>
        </>
    )
}
export default Signup1;