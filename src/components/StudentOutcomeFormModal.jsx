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
  const [baseError, setBaseError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const onSubmit = async (data) => {
    setIsProcessing(true);
    clearErrors();
    setBaseError(null);

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
        errors.forEach((error) => {
          setError(error.key, { message: error.message });
        });
      } else {
        throw "SaveError";
      }
    } catch {
      setBaseError("There was a problem saving student objective.");
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
          {baseError && <Alert variant="danger">{baseError}</Alert>}

          <Form.Group>
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="number"
              name="number"
              defaultValue={studentOutcome?.number}
              isInvalid={errors.number}
              ref={register({ required: "SO Number is required" })}
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
              ref={register({ required: "SO Definition is required" })}
            />
            {errors.definition && (
              <Form.Control.Feedback type="invalid">
                {errors.definition.message}
              </Form.Control.Feedback>
            )}
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
