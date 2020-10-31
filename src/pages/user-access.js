import Head from "next/head";
import AppLayout from "../components/AppLayout.jsx";
import RegistrationRequest from "../models/RegistrationRequest";
import { ProtectPage } from "../utils/auth";
import RegistrationRequestsCard from "../components/RegistrationRequestsCard";

const pageTitle = "User Access";

export default function AccessRequests({ registrationRequests }) {
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
      </AppLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { props } = await ProtectPage(context, ["root"]);

  let registrationRequests = await RegistrationRequest.find(
    {
      requestStatus: { $in: ["pending", "denied"] },
    },
    { password: 0 }
  ).lean();
  registrationRequests = JSON.parse(JSON.stringify(registrationRequests));

  return { props: { ...props, registrationRequests } };
}
