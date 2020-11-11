import { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function InstructorFormModal({
  show,
  onHide,
  instructorsChanged,
  instructor = null,
}) {
  const { register, handleSubmit, errors, clearErrors, setError } = useForm();
  const [baseError, setBaseError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const onSubmit = async (data) => {
    setIsProcessing(true);
    clearErrors();
    setBaseError(null);

    const [method, url] = instructor
      ? ["put", `/api/instructors/${instructor._id}`]
      : ["post", "/api/instructors"];

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        instructorsChanged();
        onHide();
      } else {
        setBaseError("Instructor name must be unique.");
        setError("name.first", { message: "invalid" });
        setError("name.last", { message: "invalid" });
      }
    } catch {
      setBaseError("There was a problem saving instructor.");
    }
    setIsProcessing(false);
  };

  return (
    <Modal {...{ show, onHide }} centered>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>{instructor ? "Edit" : "Add"} Instructor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {baseError && <Alert variant="danger">{baseError}</Alert>}

          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="name[first]"
              defaultValue={instructor?.name?.first}
              isInvalid={errors?.name?.first}
              ref={register({ required: true })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="name[last]"
              defaultValue={instructor?.name?.last}
              isInvalid={errors?.name?.last}
              ref={register({ required: true })}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit" disabled={isProcessing}>
            {isProcessing ? "Saving..." : "Save"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
