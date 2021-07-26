import React ,{ useState, useEffect } from "react";
import "./redeembottle2.css"
 import Header from "../component/header/header" 
 import "./redeembottle.css"
function Redeembottle_2(){
    return<div className="Redeembottle2">  
 <Header showButtonConnect={true}></Header>

                       
                          
                       <div className="col-12">
<p className="paraRedeem"> Redeem Bottle</p>
                          
                           </div>
                           < div className="col-12">
<div className="col-12"> <label className=" parafont labelBack">  Back</label></div>
<div className="col-12 divInput" >
<p className="paraFrom">Success!</p>
<p className="paraFrom">You have redeemed your NFT for your bottle. We will send you details and next steps for redemption via email address shortly.</p>
</div>
<div className="divButton" > <button >Return</button></div>

                       
                           </div>

                          
 
    </div>

} 
export default Redeembottle_2