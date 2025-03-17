import { Modal } from "react-bootstrap";

interface MoreModalProps {
  show: boolean;
  handleClose: () => void;
  description: string;
}

const MoreModal = ({ show, handleClose, description }: MoreModalProps) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      className="overflow-y-auto"
    >
      <Modal.Header closeButton>
        <Modal.Title>Course Description</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          overflowX: "hidden", // Hide horizontal overflow
          overflowY: "auto", // Enable vertical scrolling
          maxHeight: "60vh", // Optional: Limit the height of the modal body
        }}
      >
        <p>{description}</p>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default MoreModal;