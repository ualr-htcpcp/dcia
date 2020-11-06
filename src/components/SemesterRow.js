import { useRouter } from "next/router";
import { useState, useMemo } from "react";
import { Button, Form } from "react-bootstrap";

export default function Semester({ semester: { year, terms } }) {
  const router = useRouter();

  const [spring, setSpring] = useState(!!terms.spring);
  const [summer, setSummer] = useState(!!terms.summer);
  const [fall, setFall] = useState(!!terms.fall);

  const isChanged = useMemo(() => {
    return (
      !!terms.spring !== spring ||
      !!terms.summer !== summer ||
      !!terms.fall !== fall
    );
  }, [terms, spring, summer, fall]);

  const saveChanges = async () => {
    await fetch(`/api/semesters`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ year, terms: { spring, summer, fall } }),
    });
    router.replace(router.pathname); // reload data
  };

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
          disabled={terms.spring?.isLocked}
          onChange={(event) => setSpring(event.target.checked)}
        />
        <Form.Check
          inline
          custom
          label="Summer"
          id={`${year}-summer`}
          defaultChecked={summer}
          disabled={terms.summer?.isLocked}
          onChange={(event) => setSummer(event.target.checked)}
        />
        <Form.Check
          inline
          custom
          label="Fall"
          id={`${year}-fall`}
          defaultChecked={fall}
          disabled={terms.fall?.isLocked}
          onChange={(event) => setFall(event.target.checked)}
        />
      </td>
      <td className="text-right" style={{ padding: "0.5rem 0.75rem" }}>
        <Button
          onClick={saveChanges}
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
