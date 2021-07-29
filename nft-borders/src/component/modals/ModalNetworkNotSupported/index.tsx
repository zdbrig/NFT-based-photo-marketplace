import React from "react";
import { Modal } from "reactstrap";
import "./ModalNetworkNotSupported.css";
export default function ModalNetworkNotSupported({ isOpen, toggle }: any) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className="ModalNetworkNotSupported customModal">
        <i
          className="fa fa-times closeIcon"
          onClick={() => {
            toggle();
          }}
        ></i>
        <h3 className="message">Network not supported</h3>
      </div>
    </Modal>
  );
}
