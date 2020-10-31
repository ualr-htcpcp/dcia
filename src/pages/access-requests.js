import Head from "next/head";
import AppLayout from "../components/AppLayout.jsx";

export { ProtectPage as getServerSideProps } from "../utils/auth";

export default function AccessRequests() {
  return (
    <>
      <Head>
        <title>DCIA Access Requests</title>
      </Head>
      <AppLayout>
        <h1 className="h3">Access Requests</h1>
      </AppLayout>
    </>
  );
}
