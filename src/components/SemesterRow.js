import { useState, useMemo } from "react";
import { Button, Form } from "react-bootstrap";

export default function Semester({ year }) {
  const [spring, setSpring] = useState(false);
  const [summer, setSummer] = useState(false);
  const [fall, setFall] = useState(false);

  const isChanged = useMemo(() => {
    return spring || summer || fall;
  }, [spring, summer, fall]);

  return (
    <tr>
      <td>{year}</td>
      <td>
        <Form.Check
          inline
          custom
          label="Spring"
          id={`${year}-spring`}
          defaultChecked={spring}
          onChange={(event) => setSpring(event.target.checked)}
        />
        <Form.Check
          inline
          custom
          label="Summer"
          id={`${year}-summer`}
          defaultChecked={summer}
          onChange={(event) => setSummer(event.target.checked)}
        />
        <Form.Check
          inline
          custom
          label="Fall"
          id={`${year}-fall`}
          defaultChecked={fall}
          onChange={(event) => setFall(event.target.checked)}
        />
      </td>
      <td className="text-right" style={{ padding: "0.5rem 0.75rem" }}>
        <Button
          size="sm"
          variant="primary"
          className="ml-3"
          disabled={!isChanged}
        >
          Save Changes
        </Button>
      </td>
    </tr>
  );
}
