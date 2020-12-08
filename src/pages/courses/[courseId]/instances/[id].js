import AppLayout from "components/AppLayout.jsx";
import ScoreDistributionChart from "components/ScoreDistributionChart.jsx";
import ScoresByStudent from "components/ScoresByStudent.jsx";
import StudentWorkProjectsCard from "components/StudentWorkProjectsCard.jsx";
import "models/Course";
import CourseInstance from "models/CourseInstance";
import "models/Semester";
import "models/StudentOutcome";
import User from "models/User";
import { getSession } from "next-auth/client";
import Head from "next/head";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useProtectPage } from "utils/auth";
import { capitalize } from "utils/string";

export default function CourseInstancePage({
  courseInstance: { _id, course, semester },
}) {
  const session = useProtectPage();
  if (!session) return null;

  const semesterName = `${capitalize(semester.term)} ${semester.year}`;

  return (
    <>
      <Head>
        <title>
          CPSC {course.number} – {course.title} – {semesterName}
        </title>
      </Head>
      <AppLayout>
        <Breadcrumb>
          <Breadcrumb.Item href="/courses" linkAs={Link}>
            Courses
          </Breadcrumb.Item>
          <Breadcrumb.Item href={`/courses/${course._id}`} linkAs={Link}>
            {course.title}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{semesterName}</Breadcrumb.Item>
        </Breadcrumb>

        <h1 className="h3 mb-3">
          <span className="text-muted">CPSC {course.number}</span>{" "}
          {course.title}{" "}
          <span className="font-weight-light text-muted">
            &mdash; {semesterName}
          </span>
        </h1>

        <Row>
          {course.studentOutcomes.map((so) => (
            <Col lg={6} key={so._id}>
              <ScoreDistributionChart className="mb-3" studentOutcome={so} />
            </Col>
          ))}
        </Row>

        <StudentWorkProjectsCard
          className="mb-3"
          courseInstanceId={_id}
          studentOutcomes={course.studentOutcomes}
        />

        <Row>
          <Col lg={6}>
            <ScoresByStudent courseInstanceId={_id} />
          </Col>
        </Row>
      </AppLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) return { props: { courseInstance: {} } };

  const {
    params: { id: instanceId },
  } = context;

  let courseInstance;
  try {
    courseInstance = await CourseInstance.findOne({ _id: instanceId })
      .populate("semester")
      .populate({
        path: "course",
        populate: { path: "studentOutcomes", model: "StudentOutcome" },
      })
      .lean();
  } catch {
    courseInstance = null;
  }

  if (!courseInstance) return { notFound: true };

  if (session.user.accessLevel === "instructor") {
    const user = await User.findOne({ _id: session.user.id });
    const hasAccess = courseInstance.instructor.equals(user.instructor);
    if (!hasAccess) return { notFound: true };
  }

  courseInstance = JSON.parse(JSON.stringify(courseInstance));
  return { props: { courseInstance } };
}
