import AddInstructorModal from "components/AddInstructorModal.jsx";
import AppLayout from "components/AppLayout.jsx";
import InstructorsCard from "components/InstructorsCard.jsx";
import Head from "next/head";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const pageTitle = "Instructors";

export default function Instructors() {
  const [showModal, setShowModal] = useState(false);
  const [version, setVersion] = useState(0);

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
            <Button
              variant="primary"
              size="sm"
              onClick={() => setShowModal(true)}
            >
              Add Instructor
            </Button>

            <AddInstructorModal
              show={showModal}
              onHide={() => setShowModal(false)}
              instructorsChanged={() => setVersion(version + 1)}
            />
          </Col>
        </Row>

        <InstructorsCard key={version} />
      </AppLayout>
    </>
  );
}
