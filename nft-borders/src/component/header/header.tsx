import React, { useEffect, useState } from "react"
import "./header.css"
import { Modal } from "reactstrap";
import useAsync from "../../component/useAsync";
import { unlockAccount } from "../../api/web3";
import Web3 from "web3";
import ModalNetworkNotSupported from "../../component/modals/ModalNetworkNotSupported";
import nftlogo from "../../images/Nova_Pattern_Logo_Colour_overBlack.svg";
import { user } from "../../redux/actions"
import store from '../../redux/store';
function Header(props: any) {
    // @ts-ignore
    const { ethereum } = window;
    const web3 = new Web3(ethereum);
    const { call } = useAsync(unlockAccount);
    const [showConnect, setShowConnect] = useState(props.showButtonConnect)
    const [modal, setModal] = useState(false);
    const [netName, setNetName] = useState("");
    const [modalnetwork, setModalNetwork] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [account, setAccount] = useState("");
    const toggle = () => setModal(!modal);
    const togglenetwork = () => setModalNetwork(true);
    useEffect(() => {
        //console.log(showConnect)
        web3.eth.getAccounts(function (err: any, accounts: any) {
            props.accountMetmaske(accounts);
            if (err != null) {
              console.error("An error occurred: " + err);
            } else if (accounts.length == 0) {
              console.log("User is not logged in to MetaMask");
              setShowInput(false)
              props.selectAccount(false)
              //store.dispatch(setLoadFromPage(pageFrom))
             // history.push("/ConnectAccount");
            } else {
                web3.eth.net.getId(function (err: any, id: any) {
                  
               
                namenetwork(id)
                if(id===42){
                setShowInput(true)
                setAccount(formAccount1(accounts));
                props.selectAccount(true)
                //connectWithMetamask()
              //setaccount(formAccount(accounts))
            }} )}
          });
    });

    async function connectWithMetamask() {
        if (!ethereum) {
            setModal(true)
        }

        else {
            const { error, data } = await call(null);
            if (error) {
            }
            if (data) {
                const netId = await web3.eth.net.getId();
                


                setAccount(formAccount(data.account));

                store.dispatch(user(data.account));
               







               
            }
        }




    }
    function formAccount(x: String) {

        var str = x;
        
        var res1 = str.substring(0, 6);
        var res2 = str.substring(str.length - 4, str.length);
        var res = (res1.concat('...', res2));
        return (res)
    }
    function formAccount1(x: String) {

        var str = x[0];
        
        var res1 = str.substring(0, 6);
        var res2 = str.substring(str.length - 4, str.length);
        var res = (res1.concat('...', res2));
        return (res)
    }
    function namenetwork(netId: number) {
        if (netId == 1) {
            setNetName("Main");
        } else if (netId == 42) {
            setNetName("kovan");
            //setShowInput(true)
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
                <div className="col-6 logo"> <img src={nftlogo} alt="logo nova" className="logo" /></div>
                {showConnect ? (!showInput ?<button className="buttonConnect" onClick={connectWithMetamask}>  Connect</button>: <button className="col-3 buttonConnect ">

<i className="fa fa-circle text-success"></i> {account}
                        </button>) : null}
                
            </div>
        </div>)
}
export default Header