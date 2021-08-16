import React ,{ useState, useEffect } from "react";

 import Header from "../component/header/header" 
 import  "./withdrawnft_2.css"
function WithdrawNFT_2(){
    function goPagePrevious(){
        window.location.assign("#/desktop")
    }
    function handleAccount(account:any)
    { 
     
    }
    function addressAccount(account:any){
        console.log("address metmaske"+account)
            }
    return<div className="WithdrawNFT2">  
 <Header showButtonConnect={true} selectAccount={handleAccount} accountMetmaske={addressAccount}></Header>


                       
                          


<div className="col-12 divInput" >
<p className="paraFrom">Success!</p>
<p className="paraFrom">You have redeemed your NFT for your bottle. We will send you details and next steps for redemption via email address shortly.</p>

<div className="divButton" > <button onClick={goPagePrevious} >Return</button></div>

</div>                
                           </div>
                          

                          
                         
                     


    

} 
export default WithdrawNFT_2