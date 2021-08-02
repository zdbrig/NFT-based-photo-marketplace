import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../component/header/header"

import './redemption.css'

function Redemption(props: any) {

    return (
        <div>
            <Header showButtonConnect={false}></Header>
            <div className="row redemption">
                
                    <p className=" col-6 title">Redemption Details</p>
                
                    <p className=" col-6 karima">karima</p>
                

            </div>

        </div>
    )

}
export default Redemption;