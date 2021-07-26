import React ,{ useState, useEffect } from "react";

 import Header from "../component/header/header" 
 import  "./withdrawnft_2.css"
function WithdrawNFT_2(){
    return<div className="WithdrawNFT2">  
 <Header showButtonConnect={true}></Header>

 <main className="main">
                       
                          
                       <div className="col-12  ">
<h2 className="paraWithdraw"> Success!</h2>
<p> The NFT should now be available within your metamask wallet</p>

<div className="container"> <button className="buttonWithdraw">Withdraw</button></div>              
                           </div>
                          

                          
                         
                           </main>

    </div>
    

} 
export default WithdrawNFT_2