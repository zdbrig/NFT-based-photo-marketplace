import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../component/header/header"
import logoExport from "../images/logoExport.png"
import Vector from "../images/Vector.png"
import DataTableTransations from "../component/tables/dataTableRedeem"
import generatePDF from "../api/reportGenerator";


import './redemption.css'

function Redemption(props: any) {
const [tickets, setTickets] = useState([]);

function handlerList(data:any){
    setTickets(data)

    console.log(data)
}
    return (
        <div>
            <Header showButtonConnect={false}></Header>
            <div className="row redemption">

                <p className=" col-6 title">Redemption Details</p>

                <div className="col-6 divExport">
                    <div className="row" style={{ float: "right", position: "relative" }}>


                        <div className="col-6">
                            <p className="styleExport">
                                Export
                            </p>
                        </div>
                        <div className="col-3 styleLogo" onClick={() => generatePDF(tickets)}>
                            <img src={logoExport} alt="" />
                        </div>
                    </div>

                </div>


            </div>
            <div className="row redemption">
                <div className="col-3 buttonActive">
                    <div className="row">
                    <div className="col-6">
                    <p>Active </p> 
                    </div>
                        <div className="col-2" style={{marginLeft:"30%"}}>
                        <img src={Vector} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-3 buttonRedeemed">
                    Redeemed
                </div>
            </div>
            <div className="col-md-11 redemption">
            <DataTableTransations listData={handlerList}/>
                    
                </div>

        </div>
    )

}
export default Redemption;