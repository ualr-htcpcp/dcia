import AppLayout from "components/AppLayout.jsx";
import CourseInstancesCard from "components/CourseInstancesCard.jsx";
import ScoresByTermChart from "components/ScoresByTermChart.jsx";
import Course from "models/Course";
import CourseInstance from "models/CourseInstance";
import "models/StudentOutcome";
import User from "models/User";
import { getSession } from "next-auth/client";
import Head from "next/head";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useProtectPage } from "utils/auth";

export default function CoursePage({ course }) {
  const session = useProtectPage();
  if (!session) return null;

  return (
    <>
      <Head>
        <title>
          CPSC {course.number} – {course.title}
        </title>
      </Head>
      <AppLayout>
        <Breadcrumb>
          <Breadcrumb.Item href="/courses" linkAs={Link}>
            Courses
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{course.title}</Breadcrumb.Item>
        </Breadcrumb>

        <h1 className="h3">
          <span className="text-muted">CPSC {course.number}</span>{" "}
          {course.title}
        </h1>

        <ScoresByTermChart className="mt-3" />

        <Row>
          <Col lg={6}>
            <CourseInstancesCard course={course} />
          </Col>
        </Row>
      </AppLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) return { props: {} };

  const {
    params: { courseId },
  } = context;

  if (session.user.accessLevel === "instructor") {
    const user = await User.findOne({ _id: session.user.id });
    const hasAccess = await CourseInstance.exists({
      course: courseId,
      instructor: user.instructor,
    });
    if (!hasAccess) return { notFound: true };
  }

  let course;
  try {
    course = await Course.findOne({ _id: courseId })
      .populate("studentOutcomes", "number definition")
      .lean();
  } catch {
    course = null;
  }

  if (!course) return { notFound: true };

  course = JSON.parse(JSON.stringify(course));
  return { props: { course } };
}
