import { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import fetcher from "utils/fetcher";

const COURSE_PATH = "/api/courses";

export default function CourseFormModal({
  show,
  onHide,
  coursesChanged,
  course = null,
}) {
  const { register, handleSubmit, errors, clearErrors, setError } = useForm();
  const [baseError, setBaseError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const onSubmit = async (data) => {
    setIsProcessing(true);
    clearErrors();
    setBaseError(null);

    const [method, url] = course
      ? ["put", `${COURSE_PATH}/${course._id}`]
      : ["post", COURSE_PATH];

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
        coursesChanged();
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
      setBaseError("There was a problem saving course.");
    }
    setIsProcessing(false);
  };

  return (
    <Modal {...{ show, onHide }} centered>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>{course ? "Edit" : "Add"} Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {baseError && <Alert variant="danger">{baseError}</Alert>}

          <Form.Group>
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="number"
              name="number"
              defaultValue={course?.number}
              isInvalid={errors.number}
              ref={register({
                required: "Course Number is required",
                min: {
                  value: 1000,
                  message: "Course Number must be 1000 or greater",
                },
                max: {
                  value: 9999,
                  message: "Course Number must be 9999 or less",
                },
              })}
            />
            {errors.number && (
              <Form.Control.Feedback type="invalid">
                {errors.number.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              defaultValue={course?.title}
              isInvalid={errors.title}
              ref={register({ required: "Course Title is required" })}
            />
            {errors.title && (
              <Form.Control.Feedback type="invalid">
                {errors.title.message}
              </Form.Control.Feedback>
            )}
            <p className="mt-4 mb-1">Student Outcomes</p>
            <StudentOutcomes course={course} register={register} />
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

function StudentOutcomes({ course, register }) {
  const { data } = useSWR("/api/outcomes", fetcher);

  if (!data) return null;

  return data.map((so) => (
    <StudentOutcomeCheckbox
      key={so._id}
      course={course}
      studentOutcome={so}
      register={register}
    />
  ));
}

function StudentOutcomeCheckbox({ course, studentOutcome: so, register }) {
  const defaultChecked = course?.studentOutcomes.some(
    (courseSO) => courseSO._id === so._id
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
