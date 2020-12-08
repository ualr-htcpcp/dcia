import { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function StudentWorkProjectFormModal({
  show,
  onHide,
  courseInstance,
  studentOutcomes,
  swpsChanged,
  swp = null,
}) {
  const { register, handleSubmit, errors, clearErrors, setError } = useForm();
  const [baseError, setBaseError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const SWPS_PATH = `/api/course-instances/${courseInstance._id}/swps`;

  const onSubmit = async (data) => {
    setIsProcessing(true);
    clearErrors();
    setBaseError(null);

    const [method, url] = swp
      ? ["put", `${SWPS_PATH}/${swp._id}`]
      : ["post", SWPS_PATH];

    try {
      const studentOutcomeIds = Object.entries(data.studentOutcomes).reduce(
        (ids, [id, isChecked]) => {
          isChecked && ids.push(id);
          return ids;
        },
        []
      );
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, studentOutcomes: studentOutcomeIds }),
      });
      if (response.ok) {
        swpsChanged();
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
      setBaseError("There was a problem saving SWP.");
    }
    setIsProcessing(false);
  };

  return (
    <Modal {...{ show, onHide }} centered>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {swp ? "Edit" : "Add"} Student Work Project (SWP)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {baseError && <Alert variant="danger">{baseError}</Alert>}

          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              defaultValue={swp?.name}
              isInvalid={errors.name}
              ref={register({
                required: "SWP Name is required",
                validate: (value) => {
                  return !!value.trim() || "SWP Name cannot be blank";
                },
                pattern: {
                  value: /^[a-zA-Z0-9 ]+$/,
                  message: "SWP Name must contain only letters and numbers",
                },
              })}
            />
            {errors.name && (
              <Form.Control.Feedback type="invalid">
                {errors.name.message}
              </Form.Control.Feedback>
            )}
            <p className="mt-4 mb-1">Student Outcomes</p>
            <StudentOutcomes
              swp={swp}
              studentOutcomes={studentOutcomes}
              register={register}
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

function StudentOutcomes({ swp, studentOutcomes, register }) {
  return studentOutcomes.map((so) => (
    <StudentOutcomeCheckbox
      key={so._id}
      swp={swp}
      studentOutcome={so}
      register={register}
    />
  ));
}

function StudentOutcomeCheckbox({ swp, studentOutcome: so, register }) {
  const defaultChecked = swp?.studentOutcomes.some(
    (swpSO) => swpSO._id === so._id
  );

  return (
    <Form.Check custom type="checkbox" id={`so_${so._id}`} className="mt-2">
      <Form.Check.Input
        type="checkbox"
        name={`studentOutcomes[${so._id}]`}
        ref={register()}
        defaultChecked={defaultChecked}
      />
      <Form.Check.Label className="d-flex">
        <div className="mr-2">SO{so.number}</div>
        <small className="d-block text-muted">{so.definition}</small>
      </Form.Check.Label>
    </Form.Check>
  );
}
