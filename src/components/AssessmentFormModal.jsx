import { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useSWR, { mutate } from "swr";
import { fetcher } from "utils/fetch";

const assessmentsPath = (courseInstance, swp) =>
  `/api/course-instances/${courseInstance._id}/assessments/${swp._id}`;

export default function AssessmentFormModal({
  show,
  onHide,
  courseInstance,
  swp,
  assessmentsChanged,
}) {
  const { register, handleSubmit, clearErrors } = useForm();
  const [baseError, setBaseError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const onSubmit = async (data) => {
    setIsProcessing(true);
    clearErrors();
    setBaseError(null);

    try {
      const response = await fetch(assessmentsPath(courseInstance, swp), {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        assessmentsChanged();
        mutate(assessmentsPath(courseInstance, swp));
        onHide();
      } else {
        throw "SaveError";
      }
    } catch {
      setBaseError("There was a problem saving assessments.");
    }
    setIsProcessing(false);
  };

  return (
    <Modal {...{ show, onHide }} centered>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ lineHeight: 1.1 }}>
            Student Assessments
            <br />
            <small className="text-muted">{swp.name}</small>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {baseError && <Alert variant="danger">{baseError}</Alert>}

          <Assessments
            courseInstance={courseInstance}
            swp={swp}
            register={register}
          />
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

function Assessments({ courseInstance, swp, register }) {
  const { data: students, error } = useSWR(
    assessmentsPath(courseInstance, swp),
    fetcher
  );
  if (error) return "Unable to load students.";
  if (!students) return <em>Loading...</em>;
  if (students.length === 0) return "No students enrolled.";

  return students.map(({ _id: studentId, name, score }) => (
    <Form.Group key={studentId} as={Row}>
      <Col sm={3}>
        <Form.Control
          as="select"
          custom
          defaultValue={score}
          name={`scores[${studentId}]`}
          ref={register()}
        >
          <option></option>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </Form.Control>
      </Col>
      <Form.Label column sm={9}>
        {name.first} {name.last}
      </Form.Label>
    </Form.Group>
  ));
}
