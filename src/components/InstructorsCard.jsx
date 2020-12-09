import EmptyRow from "components/EmptyRow.jsx";
import InstructorFormModal from "components/InstructorFormModal.jsx";
import { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import useSWR, { mutate } from "swr";
import { fetcher } from "utils/fetch";

export default function InstructorsCard() {
  return (
    <Card className="mt-3">
      <Table responsive className="mb-0">
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <InstructorRows />
        </tbody>
      </Table>
    </Card>
  );
}

function InstructorRows() {
  const { data, error } = useSWR("/api/instructors", fetcher);

  if (error) return <EmptyRow message="Failed to load." />;
  if (!data) return <EmptyRow message={<em>Loading...</em>} />;

  return data.map((instructor) => (
    <InstructorRow key={instructor._id} instructor={instructor} />
  ));
}

function InstructorRow({ instructor }) {
  const [isEditing, setIsEditing] = useState(false);
  const fullName = `${instructor.name.first} ${instructor.name.last}`;

  const instructorsChanged = () => {
    mutate("/api/instructors");
  };
  const deleteInstructor = async () => {
    await fetch(`/api/instructors/${instructor._id}`, { method: "delete" });
    instructorsChanged();
  };

  return (
    <tr>
      <td>{fullName}</td>
      <td className="text-right pt-2 pb-0">
        <Button
          variant="danger"
          size="sm"
          disabled={instructor.isLocked}
          onClick={deleteInstructor}
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

        <InstructorFormModal
          instructor={instructor}
          show={isEditing}
          onHide={() => setIsEditing(false)}
          instructorsChanged={instructorsChanged}
        />
      </td>
    </tr>
  );
}
