import AppLayout from "components/AppLayout.jsx";
import DashboardData from "components/DashboardData";
import ScoresByTermChart from "components/ScoresByTermChart.jsx";
import Head from "next/head";
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
        <DashboardData />
      </AppLayout>
    </>
  );
}
