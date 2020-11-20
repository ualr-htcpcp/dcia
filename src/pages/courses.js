import AppLayout from "components/AppLayout.jsx";
import CourseFormModal from "components/CourseFormModal.jsx";
import CoursesCard from "components/CoursesCard.jsx";
import Head from "next/head";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useProtectPage } from "utils/auth";

const pageTitle = "Courses";

export default function Courses() {
  const session = useProtectPage();
  const [version, setVersion] = useState(0);

  if (!session) return null;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AppLayout>
        <Row>
          <Col>
            <h1 className="h3 mb-0">{pageTitle}</h1>
          </Col>
          <Col className="text-right">
            {["admin", "root"].includes(session?.user.accessLevel) && (
              <AddCourseButton coursesChanged={() => setVersion(version + 1)} />
            )}
          </Col>
        </Row>

        <CoursesCard key={version} />
      </AppLayout>
    </>
  );
}

function AddCourseButton({ coursesChanged }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="primary" size="sm" onClick={() => setShowModal(true)}>
        Add Course
      </Button>

      <CourseFormModal
        show={showModal}
        onHide={() => setShowModal(false)}
        coursesChanged={coursesChanged}
      />
    </>
  );
}
