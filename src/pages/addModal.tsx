import { useState, useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCourse } from "../store/actionsCreator";
import { ICourseDto } from "../models/course";

const AddModal: React.FC<any> = ({ show, handleClose, courses }) => {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  //handel form submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const formData = new FormData(form);
      const formValues = Object.fromEntries(formData.entries());

      //infrormation to add course from form
      const newCourse: ICourseDto = {
        id: (courses.length + 1).toString(),
        title: formValues.title as string,
        description: formValues.description as string,
        instructor: formValues.instructor as string,
        duration: formValues.duration as string,
      };

      dispatch(addCourse(newCourse));
      handleClose();
    }

    setValidated(true);
  };

  // Reset the form when the modal is closed
  const handleModalClose = () => {
    if (formRef.current) {
      // Reset the form fields
      formRef.current.reset();
      // Reset validation state
      setValidated(false);
    }
    // Close the modal
    handleClose();
  };

  return (
    <div>
      <Modal show={show} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title Course</Form.Label>
              <Form.Control
                type="text"
                placeholder="Course title"
                name="title"
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
                placeholder="Course description"
                name="description"
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
                placeholder="Course instructor"
                name="instructor"
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
                name="duration"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide the course duration.
              </Form.Control.Feedback>
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModalClose}>
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
