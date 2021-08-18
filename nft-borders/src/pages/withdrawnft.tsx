import React ,{ useState, useEffect } from "react";
import "./withdrawnft.css"
 import Header from "../component/header/header"
 import { Modal } from "reactstrap";
import Swal from "sweetalert2";
import { withdrawNft} from "../api/web3";
import store from "../redux/store";
import ModalWaiting from "../component/modals/ModalWaitingTransaction";
function Withdrawnft(){
    const [showConnet, setShowConnect] = useState(false);
    const [activeWithdraw, setActiveWithdraw] = useState(false);
    const [loading, setLoading] = useState(false);
    const [account,setAccount]=useState("")
    const toggle = () => setLoading(false);
    const detailsNFT = store.getState().detailsNFT;
  
    function goPageDesktop(){
        window.location.assign("#/desktop")
 
     }
     function handleAccount(account:any)
   { 
    setShowConnect(account)
   }
  function withdrawNftBottle(){
 
      setActiveWithdraw(true)
      setLoading(true)
      withdrawNft(detailsNFT.detailsNft.photoNft,account,(error:any,isSuccess:any) => {
        console.log("issuccess"+JSON.stringify(isSuccess)) 
        console.log("error"+JSON.stringify(error)) 
        if (error) {
          setLoading(false)
          console.log("error" + error);
          
          Swal.fire({
            icon: "error",
            title: "Error...",
            text: error.message,
          });
          setActiveWithdraw(false)
        } else if (isSuccess) {
            
            
      
            window.location.assign("#/WithdrawNft2")
     } });

    
  }
 

  function addressAccount(account:any){
   // console.log("address metmaske"+account)
    setAccount(account)
  }
    return<div className="WithdrawNFT">  
 <Header showButtonConnect={true} selectAccount={handleAccount} accountMetmaske={addressAccount}></Header>

 <ModalWaiting isOpen={loading}></ModalWaiting>
 
 <main className="main">
          
                          
                                <div className="col-12">
<p className="paraWithdraw"> Withdraw NFT</p>
                                   
                                    </div>
                                    <div className="row">
<div className="col-4"> <label className=" parafont labelBack" onClick={goPageDesktop}>  &lt; back </label></div>
<div className="col-8">
    <p className=" parafont paraSteps">Step 1. Make sure you have Metamask installed in your web browser. You can do so here: </p>
<p className=" parafont paraSteps">Step 2. You require a small amount of Ethereum to pay transaction fees as you withdraw your NFT and use it elsewhere. This guide is helpful: https://help.foundation.app/en/articles/4731452-a-complete-guide-to-getting-eth-and-a-wallet-with-metamask</p>
<p className="parafont paraSteps">Step 3. Press the “Connect” button in the top right.</p>
<p className=" parafont paraSteps">Step 4. Press the “Withdraw” button below to then sign to approve the withdrawal</p>
 <div className="container"> <button className="buttonWithdraw"onClick={withdrawNftBottle} disabled={activeWithdraw}>Withdraw</button></div>
</div>
                                   
                                    </div>

                                    </main>
 
    </div>

} 
export default Withdrawnft