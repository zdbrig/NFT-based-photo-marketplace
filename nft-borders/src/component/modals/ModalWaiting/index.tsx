import React from "react";
import { Modal } from "reactstrap";
import "./ModalWaiting.css";
export default function ModalWaiting({ isOpen, toggle }: any) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className="ModalNetworkNotSupported customModal">
        <i
          className="fa fa-times closeIcon"
          onClick={() => {
            toggle();
          }}
        ></i>
        <h3 className="message">Waiting</h3>
      </div>
    </Modal>
  );
}