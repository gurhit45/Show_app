import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MovieForm({showModal, handleClose, showSummary, handleSuccess}) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{showSummary[0]?.show?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Select>
          <option disabled>Number of Tickets</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" className='form__btn' onClick={handleClose}>Close</Button>
        <Button variant="primary" className='form__btn' onClick={handleSuccess}>Book Tickets</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieForm
