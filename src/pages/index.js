import AdminDashboard from "components/AdminDashboard.jsx";
import AppLayout from "components/AppLayout.jsx";
import ScoresByTermChart from "components/graphs/ScoresByTermChart.jsx";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useProtectPage } from "utils/auth";

export default function Dashboard() {
  const session = useProtectPage();
  const [isAdminOrRoot, setIsAdminOrRoot] = useState(false);
  //TODO: If user is instructor, need to pass that info to ScoresByTerm

  useEffect(() => {
    if (session) {
      setIsAdminOrRoot(["admin", "root"].includes(session.user?.accessLevel));
    }
  }, [session, setIsAdminOrRoot]);

  if (!session) return null;
  return (
    <>
      <Head>
        <title>DCIA Dashboard</title>
      </Head>
      <AppLayout>
        <h1 className="h3">Dashboard</h1>

        <ScoresByTermChart
          className="mt-3"
          isAdminOrRoot={isAdminOrRoot}
          instructor={isAdminOrRoot ? null : session.user.email}
        />

        {isAdminOrRoot ? <AdminDashboard /> : ""}
      </AppLayout>
    </>
  );
}
