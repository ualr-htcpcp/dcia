import Head from "next/head";
import { Card, Table } from "react-bootstrap";
import AppLayout from "../components/AppLayout.jsx";
import { ProtectPage } from "../utils/auth";
import SemesterRow from "../components/SemesterRow";

const pageTitle = "Semesters";

export default function Semesters({ years }) {
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
              {years.map((year) => {
                return <SemesterRow key={year} year={year} />;
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

  const currentDate = new Date();
  const nextYear = currentDate.getFullYear() + 1;
  const years = [];

  let currentYear = nextYear - 9; // earliest year

  while (currentYear <= nextYear) {
    years.push(currentYear);
    currentYear += 1;
  }
  years.reverse();

  return { props: { ...props, years } };
}
