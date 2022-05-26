import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

export default function ProjectModal({project}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button bsPrefix='modal-button' onClick={handleShow}>
          Learn More
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>{project.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{project.description}</Modal.Body>
          <img src={project.detailPhoto} className="card-img" alt="item" />
          <Modal.Footer>
            <Button bsPrefix='innermodal-button' onClick={handleClose}>
              Github Repo
            </Button>
            <Button bsPrefix='innermodal-button' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  ProjectModal.propTypes = {
      project: PropTypes.shape(PropTypes.obj).isRequired
  };
