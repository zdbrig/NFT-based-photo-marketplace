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
    return(<div className="Desktop">  
 <Header showButtonConnect={true}></Header>

 <main className="main">
                       
                          
                                <div className="col-12">
<p className="paraWelcome"> Welcome,</p>
                                   
                                    </div>
                                    <div className="row">
                                        <div className="col-6 action"> <p className= "paraBottle"> Your bottles</p>
                                        <div className="bottle">
                                        <div className="row">
                                            <div className="col-5"> <img className="imgbottle"src="bottle.png"/></div>
                                            <div className="col-7">
                                                <p className="para1837 paramargin">1837</p>
                                                <p className="paraBottle"> Bottle no.1283</p>
                                                <p className="paraBottle paraBottleMargin"> View progress details</p>
                                            </div>
                                            </div>
                                        </div>
                                        
                                        </div>
                                        <div className="col-6 action"><p className= "paraActions"> Actions</p>
                                        <div className="col-12 buttonA" >  <button className="buttonAction" onClick={goWithdraw} > Withdraw NFT</button></div>
                                        <div className="col-12 buttonA" ><button className="buttonAction" onClick={goReedemBottle}>Redeem Bottle</button> </div>
                                        <div className="col-12 buttonA"> <button className="buttonAction" onClick={goDepositNFT}>Deposit NFT</button> </div>
                                        
                                        </div>


                                   
                                    </div>
                                    
                                   
                                    </main>
    </div>)

} 
export default desktop