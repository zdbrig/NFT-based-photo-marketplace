
import React ,{ useState, useEffect } from "react";
import "./progressupdate.css"
 import Header from "../component/header/header" 
 import store from "../redux/store";
function ProgressUpdate(){
    const [dateNFT, setDateNFT] = useState<any>();
    const detailsNFT = store.getState().detailsNFT;
    function goPageDesktop(){
        window.location.assign("#/desktop")
 
     }


  
useEffect(()=>{
    var test = parseInt(detailsNFT.detailsNft.timesTmp)
    var date = new Date(test *1000).toLocaleString()
    setDateNFT(date)

    
})
function handleAccount(account:any)
{ 
    
}
function addressAccount(account:any){
    console.log("address metmaske"+account)
        }
    return<div className="progressUpdate">  
 <Header showButtonConnect={true} selectAccount={handleAccount} accountMetmaske={addressAccount}></Header>

                       
                          
                       <div className="col-12">
<p className="paraUpdate"> Bottle updates</p>
                          
                           </div>
                           < div className="col-12 ">
<div className="col-12"> <label className=" parafont labelBack" onClick={goPageDesktop}>  &lt; Back</label></div>
<div className="col-12 divInput" >
<p className="paraTime">{dateNFT}</p>
<p className="paraBottle">{detailsNFT.detailsNft.nftSymbol}</p>
</div>

                       
                           </div>

                          
 
    </div>

} 
export default ProgressUpdate