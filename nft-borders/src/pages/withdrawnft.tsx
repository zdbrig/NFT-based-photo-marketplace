import React ,{ useState, useEffect } from "react";
import "./withdrawnft.css"
 import Header from "../component/header/header" 
function withdrawnft(){
    return<div className="WithdrawNFT">  
 <Header></Header>
 
 <main className="main">
                       
                          
                                <div className="col-12">
<p className="paraWithdraw"> Withdraw NFT</p>
                                   
                                    </div>
                                    <div className="row">
<div className="col-4"> <label className=" parafont labelBack">  Back</label></div>
<div className="col-8">
    <p className=" parafont paraSteps">Step 1. Make sure you have Metamask installed in your web browser. You can do so here: </p>
<p className=" parafont paraSteps">Step 2. You require a small amount of Ethereum to pay transaction fees as you withdraw your NFT and use it elsewhere. This guide is helpful: https://help.foundation.app/en/articles/4731452-a-complete-guide-to-getting-eth-and-a-wallet-with-metamask</p>
<p className="parafont paraSteps">Step 3. Press the “Connect” button in the top right.</p>
<p className=" parafont paraSteps">Step 4. Press the “Withdraw” button below to then sign to approve the withdrawal</p>
<button className="buttonWithdraw">Withdraw</button>
</div>
                                   
                                    </div>

                                    </main>
 
    </div>

} 
export default withdrawnft