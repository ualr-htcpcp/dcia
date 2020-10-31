import { useRef } from "react";
import { Button, Form } from "react-bootstrap";

export default function User({ model }) {
  const accessLevelSelect = useRef(null);
  const isRevoked = model.accessLevel === "revoked";

  return (
    <tr style={isRevoked ? { textDecoration: "line-through" } : {}}>
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
          <option value="revoked">Revoked</option>
        </Form.Control>
      </td>
      <td>{model.email}</td>
      <td>{model.createdAt}</td>
      <td className="text-right">
        <Button size="sm" variant="primary" className="ml-3">
          Update Access Level
        </Button>
      </td>
    </tr>
  );
}
