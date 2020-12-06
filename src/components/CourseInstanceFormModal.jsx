import { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { capitalize } from "utils/string";

const COURSE_INSTANCES_PATH = "/api/course-instances";

export default function CourseInstanceFormModal({
  show,
  onHide,
  course,
  courseInstancesChanged,
  courseInstance = null,
}) {
  const { register, handleSubmit, errors, clearErrors, setError } = useForm();
  const [baseError, setBaseError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const onSubmit = async (data) => {
    setIsProcessing(true);
    clearErrors();
    setBaseError(null);

    const [method, url] = courseInstance
      ? ["put", `${COURSE_INSTANCES_PATH}/${courseInstance._id}`]
      : ["post", COURSE_INSTANCES_PATH];

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, course: course._id }),
      });
      if (response.ok) {
        courseInstancesChanged();
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
      setBaseError("There was a problem saving course instance.");
    }
    setIsProcessing(false);
  };

  return (
    <Modal {...{ show, onHide }} centered>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {courseInstance ? "Edit" : "Add"} Course Instance
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {baseError && <Alert variant="danger">{baseError}</Alert>}

          <Form.Group>
            <Form.Label>Semester</Form.Label>
            <Form.Control
              custom
              as="select"
              name="semester"
              isInvalid={errors.semester}
              ref={register({ required: "Semster is required" })}
            >
              <SemesterOptions course={course} />
            </Form.Control>
            {errors.semester && (
              <Form.Control.Feedback type="invalid">
                {errors.semester.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Instructor</Form.Label>
            <Form.Control
              custom
              as="select"
              name="instructor"
              isInvalid={errors.instructor}
              ref={register({ required: "Instructor is required" })}
            >
              <InstructorOptions />
            </Form.Control>
            {errors.instructor && (
              <Form.Control.Feedback type="invalid">
                {errors.instructor.message}
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

function SemesterOptions({ course }) {
  const { data: semestersByYear } = useSWR("/api/semesters", fetcher);
  const { data: courseInstances } = useSWR(
    `/api/course-instances?course=${course._id}`,
    fetcher
  );

  if (!semestersByYear || !courseInstances) {
    return <option key="loading">Loading...</option>;
  }

  const existingSemesterIds = courseInstances.map(
    ({ semester: { _id: semesterId } }) => semesterId
  );

  return (
    <>
      <option></option>
      {semestersByYear.map(({ year, terms }) =>
        Object.entries(terms)
          .reverse()
          .map(([term, { _id: semesterId }]) => (
            <option
              key={semesterId}
              value={semesterId}
              disabled={existingSemesterIds.includes(semesterId)}
            >
              {`${capitalize(term)} ${year}`}
            </option>
          ))
      )}
    </>
  );
}

function InstructorOptions() {
  const { data } = useSWR("/api/instructors", fetcher);
  if (!data) return <option key="loading">Loading...</option>;

  return (
    <>
      <option></option>
      {data.map(({ _id, name }) => (
        <option key={_id} value={_id}>
          {`${name.first} ${name.last}`}
        </option>
      ))}
    </>
  );
}
