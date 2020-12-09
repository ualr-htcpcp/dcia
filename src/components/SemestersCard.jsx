import EmptyRow from "components/EmptyRow.jsx";
import { useMemo, useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import useSWR, { mutate } from "swr";
import { fetcher } from "utils/fetch";

const SEMESTERS_PATH = "/api/semesters";

export default function SemestersCard(props) {
  return (
    <Card {...props}>
      <Table responsive className="mb-0">
        <thead>
          <tr>
            <th>Year</th>
            <th>Terms</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <SemesterRows />
        </tbody>
      </Table>
    </Card>
  );
}

function SemesterRows() {
  const { data, error } = useSWR(SEMESTERS_PATH, fetcher);

  if (error) return <EmptyRow message="Failed to load." />;
  if (!data) return <EmptyRow message={<em>Loading...</em>} />;

  return data.map((semester) => {
    return <SemesterRow key={semester.year} semester={semester} />;
  });
}

function SemesterRow({ semester: { year, terms } }) {
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
    await fetch(SEMESTERS_PATH, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ year, terms: { spring, summer, fall } }),
    });
    mutate(SEMESTERS_PATH);
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
