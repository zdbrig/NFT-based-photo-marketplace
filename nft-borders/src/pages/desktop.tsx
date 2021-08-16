import React, { useState, useEffect } from "react";
import { Modal } from "reactstrap";
import "./desktop.css"
import Header from "../component/header/header"
import { detailsNFT } from "../redux/actions";
import Swal from "sweetalert2";
import store from '../redux/store';
import ModalWaiting from "../component/modals/ModalWaiting";
import BottleCard from "../component/BottleCard";
function Desktop(props: any) {
    const [detailsNft, setDetailsNft] = useState<any>([]);
    const [detailsNftBurned, setDetailsNftBurned] = useState<any>([]);;
    const [nameNFT, setNameNFT] = useState("");
    const [imageNFT, setImageNFT] = useState("");
    const [account, setAccount] = useState("");
    const [loading, setLoading] = useState(true);
    const [nameUser,setNameUser]=useState("")
    const toggle = () => setLoading(false);
    function goWithdraw(index:any) {
        store.dispatch(detailsNFT(detailsNft[index]));
        window.location.assign("#/withdrawNFT")
    }
    function goReedemBottle(index:any) {
        store.dispatch(detailsNFT(detailsNft[index]));
        window.location.assign("#/RedeemBottle")
    }
    function goDepositNFT() {
        window.location.assign("#/DepositNFT")
    }
    function goProgressUpdate(index:any) {
        store.dispatch(detailsNFT(detailsNft[index]));
        window.location.assign("#/ProgressUpdate")
    }

    useEffect(() => {

        getPhotoBurned()
    
      
    
       
    }, []);

    useEffect(() => {
        
        if (nameNFT && imageNFT) {
            setLoading(false) 
        }
    }, [imageNFT, nameNFT,account]);
    function getUserByPublicKey(email: any) {
        fetch("/api/getUserByPublickey?email=" + email, {
            method: "GET",
            mode: "no-cors",
            credentials: "same-origin",
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer abc123def.abc123def.abc123def",
            },
        })
            .then(function (response) {
                if (response.status !== 200) {
                    console.log(
                        "Looks like there was a problem. Status Code: " +
                            response.status
                    );
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    console.log("data" + data);

                   setNameUser(data.username)
                    console.log("data" + JSON.stringify(data));
                });
            })
            .catch(function (err) {
                console.log("Fetch Error :-S", err);
            });
    }
    function getAllPhotoNft(photoNftArray:any) {
        const email = store.getState().emailUser;
     

        let ret: Array<any> = [];
        var querytosend = `{
        allPhotoNFTs(where:{addreseEmail:"${email.addressEmail}",photoNft_not_in:[${photoNftArray}]}){
            id owner photoNft photoPrice ipfsHashOfPhoto timesTmp blockNumber nftName nftSymbol addreseEmail statusPhoto} 
          
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
                console.log(data)
                if (data.data.allPhotoNFTs.length === 0) {
                    setLoading(false)

                    Swal.fire({
                        icon: "error",
                        title: "Error...",
                        text: "you have to create an nft by this email please!",
                    });
                    window.location.assign("#/")

                }
                else  {
                    setLoading(false)
                    ret.push()
                   setDetailsNft(data.data.allPhotoNFTs)
                   getUserByPublicKey(email.addressEmail)
                

                 }
            });
    }
    function getPhotoBurned() {
       
     

        let ret: Array<any> = [];
        var querytosend = `{
        allPhotoNFTBurneds{photoNft status timesTmp blockNumber
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
                console.log(data)
                if(data.data.allPhotoNFTBurneds.length!==0){
                    let photoNftArray=data.data.allPhotoNFTBurneds.map((ele:any)=>{
                        return `"${ele.photoNft}"`
                    })
                    console.log({photoNftArray})
                    getAllPhotoNft(photoNftArray)



                }
                else{}
               
            });
    }
    function handleAccount() {

    }
    function addressAccount(account:any){
        
        setAccount(account)
    }
    return (<div className="Desktop container">
        <Header showButtonConnect={true} selectAccount={handleAccount} accountMetmaske={addressAccount}></Header>
        <ModalWaiting isOpen={loading} toggle={toggle} ></ModalWaiting>

        <div className="content" >

            <div className="col-12">
                <p className="paraWelcome"> Welcome <span className="styleName">{nameUser}</span>,</p>
                

            </div>
            <div className="myBottle">
                <h3 className="title">My bottles</h3>
                <div className="row">
                    {/* {detailsNft.map((ele:any)=> */}
                    {detailsNft.map((bottle:any, index:any) =>
                        <div className="col-lg-4 col-sm-6 bottleCardContainer">
                            <BottleCard imageNFT={bottle.ipfsHashOfPhoto} nameNFT={bottle.nftName} goProgressUpdate={goProgressUpdate} goWithdraw={goWithdraw} goReedemBottle={goReedemBottle} index={index} account={account}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>)

}
export default Desktop