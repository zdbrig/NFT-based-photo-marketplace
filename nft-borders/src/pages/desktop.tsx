import React, { useState,useEffect} from "react";
import "./desktop.css"
 import Header from "../component/header/header" 
import { detailsNFT } from "../redux/actions";

import store from '../redux/store';
function Desktop(props:any){
    const [detailsNft, setDetailsNft] = useState<any>([]);;
    const [nameNFT, setNameNFT] = useState("");
    const [imageNFT, setImageNFT] = useState("")
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

useEffect(() => {
    
    getDetailsNFT()
  },[] );


function getDetailsNFT() {
    let addressEmail="fathallahamal86@gmail.com"
    let ret: Array<any> = [];
    var querytosend = `{
        allPhotoNFTs(where:{addreseEmail:"${addressEmail}"}){
            id owner photoNft photoPrice ipfsHashOfPhoto timesTmp blockNumber nftName nftSymbol addreseEmail
          }
      }`;

    
    fetch(
        "https://api.thegraph.com/subgraphs/name/zouaouik/nftborder",
        {
            method: "POST",
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                query: querytosend,
            }),
        }
    )
        .then((response) => response.json())
        .then((data) => {
            setNameNFT(data.data.allPhotoNFTs[0].nftName)
            setImageNFT(data.data.allPhotoNFTs[0].ipfsHashOfPhoto)
            console.log("name"+data.data.allPhotoNFTs[0].nftName)
            store.dispatch(detailsNFT(data.data.allPhotoNFTs[0]));
            setDetailsNft(data.data.allPhotoNFTs)
            detailsNft.push(data.data.allPhotoNFTs);
            setDetailsNft([...detailsNft]);
                console.log("ret1" + data.data.allPhotoNFTs);
           console.log(JSON.stringify(detailsNft))
        });
    }
  function  handleAccount(){
      
  }   
    return(<div className="Desktop main-layout inner_page">  
 <Header showButtonConnect={true} selectAccount={handleAccount}></Header>


                       <div className="content" >
                          
                                <div className="col-12">
<p className="paraWelcome"> Welcome,</p>
                                   
                                    </div>
                                    <div className="row">
                                        {/* {detailsNft.map((ele:any)=> */}
                                       
                                            
                                        <div className="col-6 "> <p className= "paraBottle"> Your bottles</p>
                                        <div className="bottle">
                                        <div className="row">
                                            <div className="col-5"> <img className="imgbottle" src={`https://ipfs.io/ipfs/${imageNFT}`}/></div>
                                            <div className="col-7">
                                                <p className="para1837 paramargin">1837</p>
                                                <p className="paramargin"> Bottle no.{nameNFT}</p>
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
export default Desktop