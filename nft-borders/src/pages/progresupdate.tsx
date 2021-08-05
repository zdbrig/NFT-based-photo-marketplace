
import React ,{ useState, useEffect } from "react";
import "./progressupdate.css"
 import Header from "../component/header/header" 
 import store from "../redux/store";
function ProgressUpdate(){
    const detailsNFT = store.getState().detailsNFT;
    function goPageDesktop(){
        window.location.assign("#/desktop")
 
     }
  
useEffect(()=>{
    var test = new Date(parseInt(detailsNFT.detailsNft.timesTmp));
    test.getFullYear();
    console.log(test)
})
    return<div className="progressUpdate">  
 <Header showButtonConnect={true}></Header>

                       
                          
                       <div className="col-12">
<p className="paraUpdate"> Bottle updates</p>
                          
                           </div>
                           < div className="col-12 ">
<div className="col-12"> <label className=" parafont labelBack" onClick={goPageDesktop}>  &lt; Back</label></div>
<div className="col-12 divInput" >
<p className="paraTime">11/7/2021 5:21pm</p>
<p className="paraBottle">{detailsNFT.detailsNft.nftSymbol}</p>
</div>

                       
                           </div>

                          
 
    </div>

} 
export default ProgressUpdate