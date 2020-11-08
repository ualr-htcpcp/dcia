import AppLayout from "components/AppLayout.jsx";
import InstructorsCard from "components/InstructorsCard.jsx";
import Head from "next/head";

const pageTitle = "Instructors";

export default function Instructors() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AppLayout>
        <h1 className="h3">{pageTitle}</h1>
        <InstructorsCard />
      </AppLayout>
    </>
  );
}
