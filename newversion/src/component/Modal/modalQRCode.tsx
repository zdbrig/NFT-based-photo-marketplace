import React from "react";
import { Modal } from "reactstrap";
import "./modalQRCode.css";
import QRCode from 'qrcode.react';
export default function modalQRCode({ isOpen, toggle ,nftPhoto}: any) {
  console.log( nftPhoto)

  return (
  
    <Modal  className="modalLoading"
    wrapClassName="modalLoadingWrap"
    modalClassName="modalLoadingModal"
    backdropClassName="modalLoadingBackdrop"
    contentClassName="modalLoadingContent" isOpen={isOpen} toggle={toggle}>
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
                      toggle();
                    } } >Close</button>
      </div>
    </Modal>
   
 
  );
}
