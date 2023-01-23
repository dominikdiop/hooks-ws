import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddMovie = ({ add }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [url, setUrl] = useState("");
  // updating
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleRate = (e) => {
    setRate(e.target.value);
  };
  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  const handleAdd = (e) => {
    let newMovie = { name, description, rate, url };
    add(newMovie);
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Movies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Movie Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type Here"
            value={name}
            onChange={handleName}
          />
          <Form.Label>Movie Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type Here"
            value={description}
            onChange={handleDescription}
          />
          <Form.Label>Movie Rate</Form.Label>
          <Form.Control
            type="number"
            placeholder="Type Here"
            value={rate}
            onChange={handleRate}
          />
          <Form.Label>Movie Url</Form.Label>
          <Form.Control
            type="url"
            placeholder="Type Here"
            value={url}
            onChange={handleUrl}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
