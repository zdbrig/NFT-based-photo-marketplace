import React ,{ useState, useEffect } from "react";
import "./desktop.css"
 import Header from "../component/header/header" 
function desktop(){

function goWithdraw(){
    window.location.assign("#/withdrawNFT")
} 
function goReedemBottle(){
    window.location.assign("#/RedeemBottle")
} 
function goDepositNFT(){
    window.location.assign("#/DepositNFT")
} 
function goProgressUpdate(){
    window.location.assign("#/ProgressUpdate")
}
    return(<div className="Desktop main-layout inner_page">  
 <Header showButtonConnect={true}></Header>


                       <div className="content" >
                          
                                <div className="col-12">
<p className="paraWelcome"> Welcome,</p>
                                   
                                    </div>
                                    <div className="row">
                                        <div className="col-6 "> <p className= "paraBottle"> Your bottles</p>
                                        <div className="bottle">
                                        <div className="row">
                                            <div className="col-5"> <img className="imgbottle"src="bottle.png"/></div>
                                            <div className="col-7">
                                                <p className="para1837 paramargin">1837</p>
                                                <p className="paramargin"> Bottle no.1283</p>
                                                <p className=" paraBottleMargin" onClick={goProgressUpdate}> View progress details</p>
                                            </div>
                                            </div>
                                        </div>
                                        
                                        </div>
                                        <div className="col-6 "><p className= "paraActions"> Actions</p>
                                        <div className="row bottle1">
                                        <div className=" col-12 buttonA" >  <button className="buttonAWithdraw" onClick={goWithdraw} > Withdraw NFT</button></div>
                                        <div className="col-12  buttonA" ><button className="buttonAction" onClick={goReedemBottle}>Redeem Bottle</button> </div>
                                        <div className="col-12 buttonA"> <button className="buttonActionDeposit" onClick={goDepositNFT}>Deposit NFT</button> </div>
                                       </div>
                                        </div>


                                   
                                    </div>
                                    </div>
                                    
                                   
                                   
    </div>)

} 
export default desktop