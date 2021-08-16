import React from "react";
import { Modal } from "reactstrap";
 import "../ModalWaiting/ModalWaiting.css";
export default function ModalWaitingTransaction({ isOpen, toggle }: any) {
  return (
    <Modal
    isOpen={isOpen}
    toggle={toggle}
    
>
    <div className="ModalNetworkNotSupported customModal">
        <p className="modalPara">
            {" "}
            Waiting for validation of the transaction
        </p>
        <img src="loading.gif" alt="" />
    </div>
</Modal>  
    
  );
}