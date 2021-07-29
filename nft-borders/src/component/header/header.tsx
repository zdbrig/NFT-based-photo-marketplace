import React, { useEffect, useState } from "react"
import "./header.css"
import { Modal } from "reactstrap";
import useAsync from "../../component/useAsync";
import { unlockAccount } from "../../api/web3";
import Web3 from "web3";
import ModalNetworkNotSupported from "../../component/modals/ModalNetworkNotSupported";
import nftlogo from "../../images/Nova_Pattern_Logo_Colour_overBlack.svg";
function Header(props: any) {
     // @ts-ignore
     const { ethereum } = window;
     const web3 = new Web3(ethereum);
  const { call } = useAsync(unlockAccount);
    const [showConnect, setShowConnect] = useState(props.showButtonConnect)
    const [modal, setModal] = useState(false);
    const [netName, setNetName] = useState("");
    const [modalnetwork, setModalNetwork] = useState(false);
    const [showInput, setShowInput ] = useState(false);
    const [account, setAccount ] = useState("");
    const toggle = () => setModal(!modal);
    const togglenetwork = () => setModalNetwork(true);
    useEffect(() => {
        console.log(showConnect)
    });

async function connectWithMetamask(){
    if (!ethereum) {
       setModal(true)
    }  
   
        else {
            const { error, data } = await call(null);
            if (error) {
            }
            if (data) {
              const netId = await web3.eth.net.getId();
              namenetwork(netId);
             
              
              setAccount(data.account);
              console.log("data"+data.account)



              



            //   store.dispatch(setNetworkId(netId));
            //   console.log("netid" + netId);
      
            //   store.dispatch(setAccount(data.account));
            //   store.dispatch(setTypeWallet(WalletsTypes.METAMASK));
            //   setWalletType(WalletsTypes.METAMASK);
            //   if (fromPage != "" && fromPage != "ConnectAccount") {
            //     history.push("/" + fromPage);
            //     store.dispatch(setLoadFromPage(""));
            //   } else {
            //     // history.push("/Navigation");
            //     history.push("/nova/DashboardAssetsdata");
            //   }
            // }
          }
        }
      

   

}
function namenetwork(netId: number) {
    if (netId == 1) {
      setNetName("Main");
    } else if (netId == 4) {
      setNetName("Rinkeby");
      setShowInput(true)
    } else if (netId == 0) {
      setNetName("Loading");
    } else {
      togglenetwork();
      setNetName("Unknow");
    }
  }
    return (
        <div className="header">
            <>
                <Modal isOpen={modal} toggle={toggle}>
                    <div
                        className="modal-"
                        style={{ background: "#0d151f", padding: "22px" }}
                    >
                        <p
                            className="modal-"
                            style={{
                                color: "wheat",
                                textAlign: "center",
                                fontSize: "20px",
                                fontWeight: 700,
                            }}
                        >
                            {" "}
                            Metamask extension not installed
                        </p>
                        <p
                            className="modal-link"
                            style={{
                                color: "wheat",
                                textAlign: "center",
                                fontSize: "20px",
                                fontWeight: 700,
                            }}
                        >
                            {" "}
                            Download it{" "}
                            <a
                                style={{
                                    color: "#6f42c1",
                                    fontSize: "16px",
                                    fontWeight: "bolder",
                                }}
                                href="https://metamask.io/download.html"
                                target="_blank"
                            >
                                here!
                            </a>{" "}
                        </p>
                        <div style={{ textAlign: "center" }}>
                            <img src="/metamask.png" width="15%" />{" "}
                        </div>
                    </div>
                </Modal>
            </>
            <ModalNetworkNotSupported isOpen={modalnetwork} toggle={togglenetwork} />
            <div className="row">
                <div className="col-6 logo"> <img src={nftlogo} alt="logo nova" className="logo" /> </div>
                {!showInput?
               ( <div className="col-6 "> {showConnect? <button className="buttonConnect" onClick={connectWithMetamask}>  Connect</button>:null} </div>):(
                <div className="col-6 ">  <input value= {account}/>  </div>    
               )}
            </div>
        </div>)
}
export default Header