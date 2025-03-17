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
          overflowX: "hidden",
          overflowY: "auto", 
          maxHeight: "60vh", 
          wordBreak:"break-all"
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