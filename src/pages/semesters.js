import AppLayout from "components/AppLayout.jsx";
import SemestersCard from "components/SemestersCard.jsx";
import Head from "next/head";
import { useProtectPage } from "utils/auth";

const pageTitle = "Semesters";

export default function Semesters() {
  const session = useProtectPage({ adminOnly: true });

  if (!session) return null;

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
