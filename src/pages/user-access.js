import Head from "next/head";
import { Button, Card, Table } from "react-bootstrap";
import AppLayout from "../components/AppLayout.jsx";
import RegistrationRequest from "../models/RegistrationRequest";
import { ProtectPage } from "../utils/auth";

const pageTitle = "User Access";

export default function AccessRequests({ registrationRequests }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AppLayout>
        <h1 className="h3">{pageTitle}</h1>

        <Card className="mt-3">
          <Card.Header className="bg-white">Access Requests</Card.Header>
          <Table responsive className="mb-0">
            <thead>
              <tr>
                <th className="col-md-2 pl-4">Access Level</th>
                <th className="col-md-4">Email</th>
                <th className="col-md-3">Requested On</th>
                <th className="col-md-3"></th>
              </tr>
            </thead>
            <tbody>
              {registrationRequests.map((registrationRequest) => {
                return (
                  <tr key={registrationRequest._id}>
                    <td className="pl-4">{registrationRequest.accessLevel}</td>
                    <td>{registrationRequest.email}</td>
                    <td>{registrationRequest.createdAt}</td>
                    <td className="pr-4 text-right">
                      <Button size="sm" variant="danger" className="ml-3">
                        Deny Request
                      </Button>
                      <Button size="sm" variant="success" className="ml-3">
                        Grant Access
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card>
      </AppLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { props } = await ProtectPage(context, ["root"]);

  let registrationRequests = await RegistrationRequest.find()
    .select("_id accessLevel email createdAt")
    .lean();
  registrationRequests = JSON.parse(JSON.stringify(registrationRequests));

  return { props: { ...props, registrationRequests } };
}
