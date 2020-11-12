import AppLayout from "components/AppLayout.jsx";
import SemestersCard from "components/SemestersCard.jsx";
import Head from "next/head";
import { ProtectPage } from "utils/auth";

const pageTitle = "Semesters";

export default function Semesters() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AppLayout>
        <h1 className="h3">{pageTitle}</h1>

        <SemestersCard className="mt-3" />
      </AppLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  return ProtectPage(context, ["admin", "root"]);
}
