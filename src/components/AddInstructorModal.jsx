import { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function AddInstructorModal({
  show,
  onHide,
  instructorsChanged,
}) {
  const { register, handleSubmit, errors, clearErrors, setError } = useForm();
  const [isProcessing, setIsProcessing] = useState(false);

  const onSubmit = async (data) => {
    setIsProcessing(true);
    clearErrors();

    try {
      await fetch("/api/instructors", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      instructorsChanged();
      onHide();
    } catch {
      setError("base", { message: "There was a problem saving instructor." });
    }
    setIsProcessing(false);
  };

  return (
    <Modal {...{ show, onHide }} centered>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Instructor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errors.base && <Alert variant="danger">{errors.base.message}</Alert>}

          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="name[first]"
              isInvalid={errors?.name?.first}
              ref={register({ required: true })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="name[last]"
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
