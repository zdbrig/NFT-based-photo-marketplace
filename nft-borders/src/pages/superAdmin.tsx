import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../component/header/header" 
import CryptoJs from "crypto-js"
import './superAdmin.css'

function SuperAdmin(props:any) {
    let history = useHistory();
function navigateToUpdate(){
    history.push("/updateStatus");
}
function navigateToDetails(){
    history.push("/redemption");
}
function handleAccount(account:any)
{ 
    
}
return(
    <>
    <Header showButtonConnect={false} selectAccount={handleAccount}></Header>
       
      
    <div className="row justify-content-around custom-line">
                <div className="col-4" onClick={()=>{navigateToUpdate()}}><p>  Post Bottle Updates</p></div>
                <div className="col-4" onClick={()=>{navigateToDetails()}}><p>View redemption details</p></div>
            </div>
    </>
)

}
export default SuperAdmin;