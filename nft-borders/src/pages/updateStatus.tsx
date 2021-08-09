import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../component/header/header"
import Swal from "sweetalert2";
import './updateStatus.css'

function UpdateStatus(props: any) {
    const [valueData, setValueData] = useState("");
    const [details, setDetails] = useState("");
    const [disableButton, setDisableButton] = useState(false)
    function handleChange(event: any) {
        setDetails(event.target.value);
        if (event.target.value && valueData) {
            setDisableButton(true)
        } else {
            setDisableButton(false)
        }
    }
    function handleChangeDate(event: any) {
        setValueData(event.target.value);
        if (event.target.value && details) {
            setDisableButton(true)
        } else {
            setDisableButton(false)
        }

    }
    function updateStatus() {


        Swal.fire({
            icon: "success",
            title: 'Update Successful',
            
            showConfirmButton: true,
        });
    }
    function handleAccount(account:any)
{ 
    
}
    return (
        <div>
    <Header showButtonConnect={false} selectAccount={handleAccount}></Header>
            
            <div className="col-12 updateStatus">
                <p className=" row title">Update Status</p>
                <div className="row formUpdate">
                    <div className="align-items-end col-12">
                        <div className="">
                            <input className="row input1" placeholder="Date" type="date" value={valueData} onChange={handleChangeDate} />

                        </div>
                        <div className="row">
                            <textarea className="input2" rows={7}
                                cols={100} placeholder="Details"
                                value={details} onChange={handleChange} />



                        </div>
                        <div className="divButton">
                            <button disabled={!disableButton} onClick={() => { updateStatus() }}> Submit </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default UpdateStatus;