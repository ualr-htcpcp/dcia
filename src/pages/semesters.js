import Head from "next/head";
import { Card, Table } from "react-bootstrap";
import AppLayout from "../components/AppLayout.jsx";
import { ProtectPage } from "../utils/auth";
import SemesterRow from "../components/SemesterRow";
import Semester from "../models/Semester";

const pageTitle = "Semesters";

export default function Semesters({ semesters }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AppLayout>
        <h1 className="h3">{pageTitle}</h1>

        <Card className="mt-3">
          <Table responsive className="mb-0">
            <thead>
              <tr>
                <th>Year</th>
                <th>Terms</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {semesters.map((semester) => {
                return <SemesterRow key={semester.year} semester={semester} />;
              })}
            </tbody>
          </Table>
        </Card>
      </AppLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { props } = await ProtectPage(context);

  const semesters = await Semester.find().lean();

  const currentDate = new Date();
  const nextYear = currentDate.getFullYear() + 1;
  const earliestYear = semesters.sort((a, b) => b.year - a.year)[0]?.year;
  const defaultYear = nextYear - 9;

  // default to 10-ish years ago or older if an earlier record exists
  let currentYear = Math.min(earliestYear, defaultYear);

  // build year/terms object for each year in range
  const years = [];
  while (currentYear <= nextYear) {
    years.push({ year: currentYear, terms: [] });
    currentYear += 1;
  }
  years.reverse();

  // add semesters to corresponding year objects
  semesters.forEach((semester) => {
    const foundYear = years.find(({ year }) => year === semester.year);
    foundYear.terms.push(semester.term);
  });

  return { props: { ...props, semesters: years } };
}