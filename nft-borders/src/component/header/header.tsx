import React, { useEffect, useState } from "react"
import "./header.css"

function Header(props: any) {
    const [showConnect, setShowConnect] = useState(props.showButtonConnect)
    useEffect(() => {
        console.log(showConnect)
    });


    return (
        <div className="header">
            <div className="row">
                <div className="col-6 logo"> <p className="paraLogo">Logo</p> </div>
                <div className="col-6 "> {showConnect? <button className="buttonConnect">  Connect</button>:null} </div>
            </div>
        </div>)
}
export default Header