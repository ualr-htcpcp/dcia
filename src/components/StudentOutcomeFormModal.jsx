import { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function StudentOutcomeFormModal({
  show,
  onHide,
  studentOutcomesChanged,
  studentOutcome = null,
}) {
  const { register, handleSubmit, errors, clearErrors, setError } = useForm();
  const [isProcessing, setIsProcessing] = useState(false);

  const onSubmit = async (data) => {
    setIsProcessing(true);
    clearErrors();

    const [method, url] = studentOutcome
      ? ["put", `/api/outcomes/${studentOutcome._id}`]
      : ["post", "/api/outcomes"];

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        studentOutcomesChanged();
        onHide();
      } else if (response.status === 422) {
        const { error: errors } = await response.json();
        errors.forEach(error => {
          setError(error.key, { message: error.message });
        });
      } else {
        throw("SaveError");
      }
    } catch {
      setError("base", {
        message: "There was a problem saving student objective.",
      });
    }
    setIsProcessing(false);
  };

  return (
    <Modal {...{ show, onHide }} centered>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {studentOutcome ? "Edit" : "Add"} Student Outcome
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errors.base && <Alert variant="danger">{errors.base.message}</Alert>}

          <Form.Group>
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="number"
              name="number"
              defaultValue={studentOutcome?.number}
              isInvalid={errors.number}
              ref={register({ required: true })}
            />
            {errors.number && (
              <Form.Control.Feedback type="invalid">
                {errors.number.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Definition</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              name="definition"
              rows={3}
              defaultValue={studentOutcome?.definition}
              isInvalid={errors.definition}
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
