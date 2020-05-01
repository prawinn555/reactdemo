import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ConfirmModal(props) {

  return (
    <>
      <Modal show={props.show} onHide={props.handlecancel} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title? props.title : 'Confirmation'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handlecancel}>
            Close
          </Button>
          { props.handleconfirm &&
            <Button variant="primary" onClick={props.handleconfirm}>
              Confirm
            </Button>
          }
        </Modal.Footer>
      </Modal>
    </>
  );
}
