import EmptyRow from "components/EmptyRow.jsx";
import { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import useSWR from "swr";
import fetcher from "utils/fetcher";

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

function InstructorRow({ instructor: { name } }) {
  const [, setIsEditing] = useState(false);
  const fullName = `${name.first} ${name.last}`;

  return (
    <tr>
      <td>{fullName}</td>
      <td className="text-right pt-2 pb-0">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>
      </td>
    </tr>
  );
}
