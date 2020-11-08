import EmptyRow from "components/EmptyRow.jsx";
import { Card, Table } from "react-bootstrap";
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

  return data.map((instructor) => {
    const { _id, name } = instructor;

    return (
      <tr key={_id}>
        <td>
          {name.first} {name.last}
        </td>
        <td></td>
      </tr>
    );
  });
}
