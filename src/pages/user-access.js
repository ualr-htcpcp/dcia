import AppLayout from "components/AppLayout.jsx";
import RegistrationRequestsCard from "components/RegistrationRequestsCard";
import UsersCard from "components/UsersCard";
import Head from "next/head";
import { useProtectPage } from "utils/auth";

const pageTitle = "User Access";

export default function AccessRequests() {
  const session = useProtectPage({ rootOnly: true });

  if (!session) return null;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AppLayout>
        <h1 className="h3">{pageTitle}</h1>

        <RegistrationRequestsCard className="mt-3" />
        <UsersCard className="mt-3" />
      </AppLayout>
    </>
  );
}
