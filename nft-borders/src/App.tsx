import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Signup_1 from "./pages/signup_1"
import Signup_2 from "./pages/signup_2"
import SuperAdmin from "./pages/superAdmin"
import UpdateStatus from "./pages/updateStatus"
import Desktop from "./pages/desktop"
import WithdrawNFT from "./pages/withdrawnft"
import RedeemBottle from "./pages/redeembottle"
import DepositNFT from "./pages/depositnft"
import Redemption from "./pages/redemption"


function App() {
  return (
    <HashRouter>
            <div>
                <Switch>
                    <Route exact path="/">
                        {" "}
                        <Sigup_1Link></Sigup_1Link>{" "}
                    </Route>
                    <Route exact path="/signup">
                        {" "}
                        <Sigup_2Link></Sigup_2Link>{" "}
                      </Route>
                    <Route exact path="/desktop">
                        {" "}
                        <Desktop_Link></Desktop_Link>{" "}
                    </Route>
                    <Route exact path="/withdrawNFT">
                        {" "}
                        <Withdraw_Link></Withdraw_Link>{" "}
                    </Route>
                    <Route exact path="/RedeemBottle">
                        {" "}
                        <Redeem_Bottle_Link></Redeem_Bottle_Link>{" "}
                    </Route>
                    <Route exact path="/DepositNFT">
                        {" "}
                        <DepositNFT_Link></DepositNFT_Link>{" "}
                    </Route>
                    <Route exact path="/superAdmin">
                        {" "}
                        <SuperAdmin_Link></SuperAdmin_Link>{" "}
                    </Route>
                    
                    <Route exact path="/updateStatus">
                        {" "}
                        <UpdateStatus_Link></UpdateStatus_Link>{" "}
                    </Route>
                    <Route exact path="/redemption">
                        {" "}
                        <Redemption_Link></Redemption_Link>{" "}
                    </Route>
                </Switch>
            </div>
        </HashRouter>
  );
}
function Sigup_1Link() {
  return <Signup_1 />;
}
function Sigup_2Link() {
  return <Signup_2 />;
}
function Desktop_Link() {
  return <Desktop/>;
}
function Withdraw_Link() {
  return <WithdrawNFT/>;
}
function Redeem_Bottle_Link() {
  return <RedeemBottle/>;
}
function DepositNFT_Link() {
  return <DepositNFT/>;
}
function SuperAdmin_Link() {
  return <SuperAdmin/>;
}
function UpdateStatus_Link() {
  return <UpdateStatus/>;
}
function Redemption_Link(){
  return <Redemption/>
}
export default App;
