import AppLayout from "components/AppLayout.jsx";
import ScoresByLevelChart from "components/ScoresByLevelChart.jsx";
import ScoresByTermChart from "components/ScoresByTermChart.jsx";
import ScoreSummaryCard from "components/ScoreSummaryCard.jsx";
import TermSelector from "components/TermSelector";
import Head from "next/head";
import { Col, Row } from "react-bootstrap";
import { useProtectPage } from "utils/auth";

export default function Dashboard() {
  const session = useProtectPage();
  if (!session) return null;

  return (
    <>
      <Head>
        <title>DCIA Dashboard</title>
      </Head>
      <AppLayout>
        <h1 className="h3">Dashboard</h1>

        <ScoresByTermChart className="mt-3" />

        <TermSelector className="mt-4" />
        <ScoresByLevelChart className="mt-4" />

        <Row className="mt-4">
          <Col lg={6}>
            <ScoreSummaryCard
              name="SO Scores by INSTRUCTOR"
              viewAllPath="#instructors"
            />
          </Col>

          <Col lg={6} className="mt-4 mt-lg-0">
            <ScoreSummaryCard
              name="SO Scores by COURSE"
              viewAllPath="#courses"
            />
          </Col>
        </Row>
      </AppLayout>
    </>
  );
}
