import React ,{ useState, useEffect } from "react";
import { addDetailsRedeem } from "../api/web3";
import Swal from "sweetalert2";
 import Header from "../component/header/header" 
 import "./redeembottle.css"
 import store from "../redux/store";
 import ModalWaiting from "../component/modals/ModalWaitingTransaction";
function Redeembottle(props:any){
    const [nameUser, setName] = useState("");
    const [city, setCity] = useState("");
    const [firstLine, setFirstLine] = useState("");
    const [codePost, setCodePost] = useState("");
    const [secondLine, setSecondLine] = useState("");
    const [country, setCountry] = useState("");
    const [showConnet, setShowConnect] = useState(false);
    const [loading, setLoading] = useState(false);
    const [activeButton, setActiveButton] = useState(false);
    
    const detailsNFT = store.getState().detailsNFT;
    const toggle = () => setLoading(false);
     function handleChangeName(e:any){
        
         setName(e.target.value)
     }
     function handleChangeCity(e:any){
        setCity(e.target.value)
    }
    function handleChangeFirstLine(e:any){
        setFirstLine(e.target.value)
    }
    function handleChangeCodePost(e:any){
        setCodePost(e.target.value)
    }
    function handleChangeSecondLine(e:any){
        setSecondLine(e.target.value)
    }
    function handleChangeCountry(e:any){
        setCountry(e.target.value)
    }
    function submitDetailsBottle(){
        setLoading(true) 
         if (
            !nameUser ||
            !city||
            !firstLine ||
            !codePost||
            !secondLine||
            !country
          ) {
            setLoading(false) 
            Swal.fire({
              icon: "error",
              title: "Error...",
              text: "Please Enter the delivery details for your bottle!",
            });
          }

          else{
            setActiveButton(true)
            
        console.log(nameUser+city+firstLine+codePost+secondLine+country)
        const photoNFT=detailsNFT.detailsNft.photoNft
        console.log("photoNFT"+photoNFT)

        addDetailsRedeem(detailsNFT.detailsNft.photoNft, nameUser,city,firstLine,codePost,secondLine,country,detailsNFT.detailsNft.addreseEmail,(error:any,isSuccess:any) => {
            console.log("issuccess"+JSON.stringify(isSuccess)) 
            console.log("error"+JSON.stringify(error)) 
            if (error) {
                setLoading(false)
                setActiveButton(false)
              console.log("error" + error);
              
              Swal.fire({
                icon: "error",
                title: "Error...",
                text: error.message,
              });
            } else if (isSuccess) {
                setActiveButton(false)
                setLoading(false)
                
            window.location.assign("#/RedeemBottle2")
         } });
        
          
        }
       
    }
     
     function goPageDesktop(){
        window.location.assign("#/desktop")
 
     }
   function handleAccount(account:any)
   { 
       setShowConnect(account)
   }
   function addressAccount(account:any){
    console.log("address metmaske"+account)
        }
    return<div className="Redeembottle">  
 <Header showButtonConnect={true} selectAccount={handleAccount} accountMetmaske={addressAccount}></Header>
 <ModalWaiting isOpen={loading} toggle={toggle} ></ModalWaiting>               
                          
                       <div className="col-12">
<p className="paraDeposit"> Redeem Bottle</p>
                          
                           </div>
                           < div className="col-12">
<div className="col-12"> <label className=" parafont labelBack" onClick={goPageDesktop}>  &lt; back </label></div>
<div className="col-12 divInput" >
<p className="paraFrom">Enter the delivery details for your bottle</p>
    <form>

<div className="col-12 ">
   
    <div className="form-group row divForm">
        <div className="col-sm-6" ><input className="inputform " placeholder="name" name="nameUser" onChange={handleChangeName}></input></div>
        <div className="col-sm-6"><input className="inputform "placeholder="City" name="city" onChange={handleChangeCity}></input></div>
        
    </div>
    <div className="form-group row divForm">
        <div className="col-sm-6" ><input className="inputform " placeholder="First line" onChange={handleChangeFirstLine}></input></div>
        <div className="col-sm-6"><input className="inputform " type="number" placeholder="Post/Zip Code" onChange={handleChangeCodePost}></input></div>
        
    </div>
    <div className="form-group row divForm">
        <div className="col-sm-6" ><input className="inputform "placeholder=" Second line" onChange={handleChangeSecondLine}></input></div>
        <div className="col-sm-6"><input className="inputform "placeholder="Country" onChange={ handleChangeCountry}></input></div>
        
    </div>
    <div className="divButton" > <button  type ="button" onClick={submitDetailsBottle} disabled={activeButton}>Submit</button></div>
</div>

</form>
</div>
                       
                           </div>

                          
 
    </div>

} 
export default Redeembottle