import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../component/header/header"

import './updateStatus.css'

function UpdateStatus(props: any) {

    return (
        <div>
            <Header showButtonConnect={false}></Header>
            <div className="updateStatus">
                <p className="title">Update Status</p>
                <div className="formUpdate">
<div className="align-items-end">
    <div>
                    <input className="input1" placeholder="Date" type="data"/>
                    </div>
<div>
                    <textarea className="input2" rows={5}
          cols={100}>
                        Bonjour, voici du texte dans une zone de texte
                    </textarea>

                    
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default UpdateStatus;