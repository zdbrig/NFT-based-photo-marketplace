import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../component/header/header"

import './updateStatus.css'

function UpdateStatus(props: any) {

    return (
        <div>
            <Header showButtonConnect={false}></Header>
            <div className="col-12 updateStatus">
                <p className=" row title">Update Status</p>
                <div className="row formUpdate">
                    <div className="align-items-end col-12">
                        <div className="">
                            <input className="row input1" placeholder="Date" type="data" />
                        </div>
                        <div className="row">
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