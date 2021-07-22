import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Sigup_1 from "./pages/signup_1"
import Desktop from "./pages/desktop"
import WithdrawNFT from "./pages/withdrawnft"
import RedeemBottle from "./pages/redeembottle"
import DepositNFT from "./pages/depositnft"
function App() {
  return (
    <HashRouter>
            <div>
                <Switch>
                    <Route exact path="/">
                        {" "}
                        <Sigup_1Link></Sigup_1Link>{" "}
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
                </Switch>
            </div>
        </HashRouter>
  );
}
function Sigup_1Link() {
  return <Sigup_1 />;
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
export default App;
