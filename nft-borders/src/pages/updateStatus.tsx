import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../component/header/header"

import './updateStatus.css'

function UpdateStatus(props: any) {
    const [valueData,setValueData]=useState("");
    const [details,setDetails]=useState("");
    function handleChange(event:any) {
        setDetails(event.target.value);
    }
    function handleChangeDate(event:any) {
        setValueData(event.target.value);
    }
    return (
        <div>
            <Header showButtonConnect={false}></Header>
            <div className="col-12 updateStatus">
                <p className=" row title">Update Status</p>
                <div className="row formUpdate">
                    <div className="align-items-end col-12">
                        <div className="">
                            <input className="row input1" placeholder="Date" type="date" value={valueData} onChange={handleChangeDate}/>
                            
                        </div>
                        <div className="row">
                            <textarea className="input2" rows={7}
                                cols={100} placeholder="Details" 
                                 value={details} onChange={handleChange}/>
                               


                        </div>
                        <div className="divButton">
                <button > Submit </button>
                </div>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default UpdateStatus;