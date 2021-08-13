import React from 'react'
import './BottleCard.css'
export default function BottleCard({ imageNFT, nameNFT, goProgressUpdate, goWithdraw, goReedemBottle, index }: any) {

    return (
        <div className="bottleCardComponent">
            <div className="bottleCardHeader">
                <img className="imgbottle" src={`https://ipfs.io/ipfs/${imageNFT}`} />
            </div>
            <div className="bottleCardBody">
                <h4 className="bottleCardTitle">1837</h4>
                <p className="bottleNumber">Bottle no.{nameNFT}</p>
                <button className="btn viewButton" onClick={() => goProgressUpdate(index)}>View progress details</button>
            </div>
            <div className="bottleCardFooter">
                <button className="btn actionButton"  onClick={() => goWithdraw(index)}>Withdraw NFT</button>
                <button className="btn actionButton"onClick={() => goReedemBottle(index)} >Redeem Bottle</button>
            </div>
        </div>
    )
}
