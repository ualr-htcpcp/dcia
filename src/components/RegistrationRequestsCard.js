import { useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { formatTimestamp } from "utils/datetime";
import useSWR, { mutate } from "swr";
import fetcher from "utils/fetcher";
import EmptyRow from "components/EmptyRow.jsx";

export default function RegistrationRequestsCard() {
  return (
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
          <RegistrationRequestRows />
        </tbody>
      </Table>
    </Card>
  );
}

function RegistrationRequestRows() {
  const { data, error } = useSWR("/api/registration-requests", fetcher);

  if (error) return <EmptyRow message="Failed to load." />;
  if (!data) return <EmptyRow message={<em>Loading...</em>} />;
  if (data.length === 0) {
    return <EmptyRow message="No registrations requests found." />;
  }

  return data.map((registrationRequest) => (
    <RegistrationRequestRow
      key={registrationRequest._id}
      model={registrationRequest}
    />
  ));
}

function RegistrationRequestRow({ model }) {
  const [accessLevel, setAccessLevel] = useState(model.accessLevel);
  const isDenied = model.requestStatus === "denied";

  const changeRequestStatus = async (requestStatus) => {
    await fetch(`/api/registration-requests/${model._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accessLevel, requestStatus }),
    });
    mutate("/api/registration-requests");
    if (requestStatus === "approved") mutate("/api/users");
  };

  return (
    <tr style={isDenied ? { textDecoration: "line-through" } : {}}>
      <td>
        <Form.Control
          as="select"
          size="sm"
          custom
          defaultValue={accessLevel}
          onChange={(event) => setAccessLevel(event.target.value)}
        >
          <option value="instructor">Instructor</option>
          <option value="admin">Administrator</option>
        </Form.Control>
      </td>
      <td>{model.email}</td>
      <td>{model.requestStatus}</td>
      <td>{formatTimestamp(model.createdAt)}</td>
      <td className="text-right">
        <Button
          onClick={() => changeRequestStatus("denied")}
          size="sm"
          variant="danger"
          className="ml-3"
          disabled={isDenied}
        >
          Deny Request
        </Button>
        <Button
          onClick={() => changeRequestStatus("approved")}
          size="sm"
          variant="success"
          className="ml-3"
        >
          Grant Access
        </Button>
      </td>
    </tr>
  );
}
