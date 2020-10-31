import Head from "next/head";
import { Button, Card, Form, Table } from "react-bootstrap";
import AppLayout from "../components/AppLayout.jsx";
import RegistrationRequest from "../models/RegistrationRequest";
import { ProtectPage } from "../utils/auth";
import { useRouter } from "next/router";

const pageTitle = "User Access";

export default function AccessRequests({ registrationRequests }) {
  const router = useRouter();

  const changeRequestStatus = async (
    event,
    { _id: registrationRequestId },
    requestStatus
  ) => {
    const currentRow = event.target.parentElement.parentElement;
    const accessLevel = currentRow.querySelector("select").value;

    await fetch(`/api/registration-requests/${registrationRequestId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accessLevel, requestStatus }),
    });
    router.replace(router.pathname); // reload data
  };
  const isDenied = ({ requestStatus }) => requestStatus === "denied";

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
                <th>Access Level</th>
                <th>Email</th>
                <th>Status</th>
                <th>Requested On</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {registrationRequests.map((registrationRequest) => {
                return (
                  <tr
                    key={registrationRequest._id}
                    style={
                      isDenied(registrationRequest)
                        ? { textDecoration: "line-through" }
                        : {}
                    }
                  >
                    <td>
                      <Form.Control
                        as="select"
                        size="sm"
                        custom
                        defaultValue={registrationRequest.accessLevel}
                      >
                        <option value="instructor">Instructor</option>
                        <option value="admin">Administrator</option>
                      </Form.Control>
                    </td>
                    <td>{registrationRequest.email}</td>
                    <td>{registrationRequest.requestStatus}</td>
                    <td>{registrationRequest.createdAt}</td>
                    <td className="text-right">
                      <Button
                        onClick={(event) =>
                          changeRequestStatus(
                            event,
                            registrationRequest,
                            "denied"
                          )
                        }
                        size="sm"
                        variant="danger"
                        className="ml-3"
                        disabled={isDenied(registrationRequest)}
                      >
                        Deny Request
                      </Button>
                      <Button
                        onClick={(event) =>
                          changeRequestStatus(
                            event,
                            registrationRequest,
                            "approved"
                          )
                        }
                        size="sm"
                        variant="success"
                        className="ml-3"
                      >
                        Grant Access
                      </Button>
                    </td>
                  </tr>
                );
              })}
              {registrationRequests.length > 0 || (
                <tr>
                  <td>
                    <em>No registration requests found.</em>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card>
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
