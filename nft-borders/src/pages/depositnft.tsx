import React ,{ useState, useEffect } from "react";

 import Header from "../component/header/header" 
 import "./depositnft.css"
function DepositNFT(){
    return<div className="DepositNFT">  
 <Header showButtonConnect={true}></Header>
 <main className="main">
                       
                          
                       <div className="col-12">
<p className="paraDeposit"> Deposit NFT</p>
                          
                           </div>
                           <div className="row">
<div className="col-4"> <label className=" parafont labelBack">  Back</label></div>
<div className="col-8 para" >
<p className=" parafont ">Step 1. Press the “Connect” button in the top right.</p>
<p className=" parafont ">Step 2. Select which NFT from this dropdown</p>
<select className="selectNft">
    <option>nft1</option>
    <option> nft2</option>
</select>
<p className="parafont ">Step 3. Press the “Withdraw” button below to then sign to approve the withdrawal</p>

<div className="container"> <button className="buttonDeposit">Deposit</button></div>
</div>
                          
                           </div>

                           </main>
 
    </div>

} 
export default DepositNFT