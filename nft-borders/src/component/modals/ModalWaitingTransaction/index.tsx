import React from "react";
import { Modal } from "reactstrap";
import "../ModalWaiting/ModalWaiting.css";
import { Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function ModalWaitingTransaction({ isOpen }: any) {
    return (
        <Modal
            isOpen={isOpen}
            // toggle={toggle}
            className="loadingModal"
        >
            <div className="ModalNetworkNotSupported customModal class1">
                <Spinner
                    as="span"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="border"
                    className="spinnerClass"
                />
                <p className="loadingStyle">Wait...</p>
                <p>Transaction in progress</p>

                {/* <img src="loading.gif" alt="" /> */}
            </div>
        </Modal>
    );
}
