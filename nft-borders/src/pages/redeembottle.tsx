import React ,{ useState, useEffect } from "react";

 import Header from "../component/header/header" 
 import "./redeembottle.css"
function Redeembottle(){
    const [nameUser, setName] = useState("");
    const [city, setCity] = useState("");
    const [firstLine, setFirstLine] = useState("");
    const [codePost, setCodePost] = useState("");
    const [secondLine, setsecondLine] = useState("");
    const [country, setCountry] = useState("");
    function submitDetailsBottle(){
        window.location.assign("#/RedeemBottle2")
 
     }
     function goPageDesktop(){
        window.location.assign("#/desktop")
 
     }
    function handleUserInput (e:any) {
        const name = e.target.name;
        const value = e.target.value;
        var partialState = {};
        //  partialState[name] = value;

        // setName(partialState);
       
                      
      }

    return<div className="Redeembottle">  
 <Header showButtonConnect={true}></Header>

                       
                          
                       <div className="col-12">
<p className="paraDeposit"> Redeem Bottle</p>
                          
                           </div>
                           < div className="col-12">
<div className="col-12"> <label className=" parafont labelBack" onClick={goPageDesktop}>  &lt; back </label></div>
<div className="col-12 divInput" >
<p className="paraFrom">Enter the delivery details for your bottle</p>
    <form>

<div className="col-12 ">
   
    <div className="form-group row divForm">
        <div className="col-sm-6" ><input className="inputform " placeholder="name" name="nameUser"></input></div>
        <div className="col-sm-6"><input className="inputform "placeholder="City" name="city"></input></div>
        
    </div>
    <div className="form-group row divForm">
        <div className="col-sm-6" ><input className="inputform " placeholder="First line"></input></div>
        <div className="col-sm-6"><input className="inputform "placeholder="Post/Zip Code"></input></div>
        
    </div>
    <div className="form-group row divForm">
        <div className="col-sm-6" ><input className="inputform "placeholder=" Second line"></input></div>
        <div className="col-sm-6"><input className="inputform "placeholder="Country"></input></div>
        
    </div>
    <div className="divButton" > <button onClick={submitDetailsBottle}>Submit</button></div>
</div>

</form>
</div>
                       
                           </div>

                          
 
    </div>

} 
export default Redeembottle