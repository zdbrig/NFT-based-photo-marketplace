import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Signup_1 from "./pages/signup_1"
import Signup_2 from "./pages/signup_2"
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
export default App;
