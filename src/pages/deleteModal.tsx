import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteCourse } from "../store/actionsCreator";

interface DeleteModalProps {
  show: boolean;
  handleClose: () => void;
  courseId: number
}

const DeleteModal: React.FC<DeleteModalProps> = ({ show, handleClose, courseId }) => {
    const dispatch=useDispatch();
    //handel delete course by id 
  const handleDelete = () => {
    // console.log("Deleting course with ID:", courseId);
    dispatch(deleteCourse(courseId))
    handleClose(); 
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this course?.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteModal;