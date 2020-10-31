import { useRouter } from "next/router";
import { useRef } from "react";
import { Button, Form } from "react-bootstrap";

export default function RegistrationRequest({ model }) {
  const router = useRouter();
  const accessLevelSelect = useRef(null);
  const isDenied = model.requestStatus === "denied";

  const changeRequestStatus = async (event, requestStatus) => {
    const accessLevel = accessLevelSelect.current.value;
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
          defaultValue={model.accessLevel}
          ref={accessLevelSelect}
        >
          <option value="instructor">Instructor</option>
          <option value="admin">Administrator</option>
        </Form.Control>
      </td>
      <td>{model.email}</td>
      <td>{model.requestStatus}</td>
      <td>{model.createdAt}</td>
      <td className="text-right">
        <Button
          onClick={(event) => changeRequestStatus(event, "denied")}
          size="sm"
          variant="danger"
          className="ml-3"
          disabled={isDenied}
        >
          Deny Request
        </Button>
        <Button
          onClick={(event) => changeRequestStatus(event, "approved")}
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
