import EmptyRow from "components/EmptyRow.jsx";
import StudentOutcomeFormModal from "components/StudentOutcomeFormModal.jsx";
import { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import useSWR, { mutate } from "swr";
import { fetcher } from "utils/fetch";

export default function StudentOutcomesCard() {
  return (
    <Card className="mt-3">
      <Table responsive className="mb-0">
        <thead>
          <tr>
            <th>No.</th>
            <th>Definition</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <StudentOutcomeRows />
        </tbody>
      </Table>
    </Card>
  );
}

function StudentOutcomeRows() {
  const { data, error } = useSWR("/api/outcomes", fetcher);

  if (error) return <EmptyRow message="Failed to load." />;
  if (!data) return <EmptyRow message={<em>Loading...</em>} />;

  return data.map((studentOutcome) => (
    <StudentOutcomeRow
      key={studentOutcome._id}
      studentOutcome={studentOutcome}
    />
  ));
}

function StudentOutcomeRow({ studentOutcome }) {
  const [isEditing, setIsEditing] = useState(false);

  const studentOutcomesChanged = () => {
    mutate("/api/outcomes");
  };
  const deleteStudentOutcome = async () => {
    await fetch(`/api/outcomes/${studentOutcome._id}`, { method: "delete" });
    studentOutcomesChanged();
  };

  return (
    <tr>
      <td>{studentOutcome.number}</td>
      <td>{studentOutcome.definition}</td>
      <td className="text-right pt-2 pb-0" style={{ whiteSpace: "nowrap" }}>
        <Button
          variant="danger"
          size="sm"
          disabled={studentOutcome.isLocked}
          onClick={deleteStudentOutcome}
        >
          Delete
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="ml-2"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>

        <StudentOutcomeFormModal
          studentOutcome={studentOutcome}
          show={isEditing}
          onHide={() => setIsEditing(false)}
          studentOutcomesChanged={studentOutcomesChanged}
        />
      </td>
    </tr>
  );
}
