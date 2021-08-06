import React from "react";
import { Modal } from "reactstrap";
import "./modalQRCode.css";

export default function modalQRCode({ isOpen, toggleQRCode ,nftPhoto}: any) {
  console.log( nftPhoto)

  return (
  
    <Modal  className="modalLoading"
    wrapClassName="modalLoadingWrap"
    modalClassName="modalLoadingModal"
    backdropClassName="modalLoadingBackdrop"
    contentClassName="modalLoadingContent" isOpen={isOpen} toggle={toggleQRCode}>
      <div className="ModalConnect">
        {/* <i
          className="fa fa-times closeIcon"
          onClick={() => {
            toggle();
          }}
        ></i> */}
       <p>I sent a qr code and the site link please see your email</p>
        <button className= "sign__btn" 
                    onClick={() => {
                      toggleQRCode();
                    } } >Close</button>
      </div>
    </Modal>
   
 
  );
}
