import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Sigup_1 from "./pages/signup_1"
function App() {
  return (
    <HashRouter>
            <div>
                <Switch>
                    <Route exact path="/">
                        {" "}
                        <Sigup_1Link></Sigup_1Link>{" "}
                    </Route>
                </Switch>
            </div>
        </HashRouter>
  );
}
function Sigup_1Link() {
  return <Sigup_1 />;
}
export default App;
