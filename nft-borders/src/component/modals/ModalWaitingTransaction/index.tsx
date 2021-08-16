import React from "react";
import { Modal } from "reactstrap";
 import "../ModalWaiting/ModalWaiting.css";
 import { Button, Spinner } from 'react-bootstrap'
 import 'bootstrap/dist/css/bootstrap.min.css';
export default function ModalWaitingTransaction({ isOpen }: any) {
  return (
    <Modal
    isOpen={isOpen}
    // toggle={toggle}
    
>
    <div className="ModalNetworkNotSupported customModal">
        
        <Button  disabled>
                    <Spinner
                    as="span"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="border"/>
                      Loading...
                </Button>
        <img src="loading.gif" alt="" />
    </div>
</Modal>  
    
  );
}