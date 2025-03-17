import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCourse } from "../store/actionsCreator";
import { ICourseDto } from "../models/course";

interface AddModalProps {
  show: boolean;
  handleClose: () => void;
}

const AddModal: React.FC<AddModalProps> = ({ show, handleClose }) => {
  const [validated, setValidated] = useState(false); // State to track form validation
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation(); 
    } else {
      const formData = new FormData(form);
      const formValues = Object.fromEntries(formData.entries()); 

      const newCourse: ICourseDto = {
        id: Date.now().toString(),
        title: formValues.title as string,
        description: formValues.description as string,
        instructor: formValues.instructor as string,
        duration: formValues.duration as string,
      };

      console.log("New Course:", newCourse);

      dispatch(addCourse(newCourse));

      handleClose(); 
    }

    setValidated(true); // تعيين النموذج كـ "تم التحقق منه"
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title Course</Form.Label>
              <Form.Control
                type="text"
                placeholder="Input course title"
                name="title" // إضافة name للحقل
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a course title.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Input course description"
                name="description" // إضافة name للحقل
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a course description.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="instructor">
              <Form.Label>Instructor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Input course instructor"
                name="instructor" // إضافة name للحقل
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide an instructor name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="duration">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                placeholder="Example: 6 hours"
                name="duration" // إضافة name للحقل
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide the course duration.
              </Form.Control.Feedback>
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddModal;