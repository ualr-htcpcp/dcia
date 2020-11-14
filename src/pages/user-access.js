import AppLayout from "components/AppLayout.jsx";
import RegistrationRequestsCard from "components/RegistrationRequestsCard";
import UsersCard from "components/UsersCard";
import RegistrationRequest from "models/RegistrationRequest";
import User from "models/User";
import Head from "next/head";
import { useProtectPage } from "utils/auth";

const pageTitle = "User Access";

export default function AccessRequests({ registrationRequests, users }) {
  const session = useProtectPage({ rootOnly: true });

  if (!session) return null;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AppLayout>
        <h1 className="h3">{pageTitle}</h1>

        <RegistrationRequestsCard
          registrationRequests={registrationRequests}
          className="mt-3"
        />
        <UsersCard users={users} className="mt-3" />
      </AppLayout>
    </>
  );
}

export async function getServerSideProps() {
  const excludePassword = { password: 0 };
  const registrationRequestsPromise = RegistrationRequest.find(
    { requestStatus: { $in: ["pending", "denied"] } },
    excludePassword,
    { sort: "createdAt _id" }
  ).lean();
  const usersPromise = User.find(
    { accessLevel: { $ne: "root" } },
    excludePassword,
    { sort: "accessLevel email _id" }
  ).lean();

  const queryResults = await Promise.all([
    registrationRequestsPromise,
    usersPromise,
  ]);
  // simplify to JSON compatible objects
  const [registrationRequests, users] = JSON.parse(
    JSON.stringify(queryResults)
  );

  return { props: { registrationRequests, users } };
}
