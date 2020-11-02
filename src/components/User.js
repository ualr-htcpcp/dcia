import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function User({ model }) {
  const router = useRouter();
  const [accessLevel, setAccessLevel] = useState(model.accessLevel);
  const isRevoked = model.accessLevel === "revoked";

  const changeAccessLevel = async () => {
    await fetch(`/api/users/${model._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accessLevel }),
    });
    router.replace(router.pathname); // reload data
  };

  return (
    <tr style={isRevoked ? { textDecoration: "line-through" } : {}}>
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
          <option value="revoked">Revoked</option>
        </Form.Control>
      </td>
      <td>{model.email}</td>
      <td>{model.createdAt}</td>
      <td className="text-right">
        <Button
          onClick={changeAccessLevel}
          size="sm"
          variant="primary"
          className="ml-3"
          disabled={accessLevel === model.accessLevel}
        >
          Update Access Level
        </Button>
      </td>
    </tr>
  );
}
