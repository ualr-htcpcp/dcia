import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { formatTimestamp } from "../utils/datetime";

export default function RegistrationRequest({ model }) {
  const router = useRouter();
  const [accessLevel, setAccessLevel] = useState(model.accessLevel);
  const isDenied = model.requestStatus === "denied";

  const changeRequestStatus = async (requestStatus) => {
    await fetch(`/api/registration-requests/${model._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accessLevel, requestStatus }),
    });
    router.replace(router.pathname); // reload data
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
