import EmptyRow from "components/EmptyRow.jsx";
import { useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import useSWR, { mutate } from "swr";
import fetcher from "utils/fetcher";
import { formatTimestamp } from "../utils/datetime";

const USERS_PATH = "/api/users";

export default function UsersCard() {
  return (
    <Card className="mt-3">
      <Card.Header className="bg-white">Users</Card.Header>
      <Table responsive className="mb-0">
        <thead>
          <tr>
            <th>Access Level</th>
            <th>Email</th>
            <th>Instructor</th>
            <th>Created On</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <UserRows />
        </tbody>
      </Table>
    </Card>
  );
}

function UserRows() {
  const { data, error } = useSWR(USERS_PATH, fetcher);

  if (error) return <EmptyRow message="Failed to load." />;
  if (!data) return <EmptyRow message={<em>Loading...</em>} />;
  if (data.length === 0) {
    return <EmptyRow message="No users found." />;
  }

  return data.map((user) => <UserRow key={user._id} model={user} />);
}

function UserRow({ model }) {
  const [accessLevel, setAccessLevel] = useState(model.accessLevel);
  const [instructor, setInstructor] = useState(model.instructor);
  const isRevoked = model.accessLevel === "revoked";

  const accessLevelChanged = accessLevel !== model.accessLevel;
  const instructorChanged = instructor !== model.instructor;

  const changeAccess = async () => {
    await fetch(`${USERS_PATH}/${model._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        accessLevel: accessLevelChanged && accessLevel,
        instructor,
      }),
    });
    mutate(USERS_PATH);
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
      <td>
        <InstructorSelect
          defaultValue={instructor}
          accessLevel={accessLevel}
          onChange={(event) => setInstructor(event.target.value || null)}
        />
      </td>
      <td>{formatTimestamp(model.createdAt)}</td>
      <td className="text-right">
        <Button
          onClick={changeAccess}
          size="sm"
          variant="primary"
          className="ml-3"
          disabled={!accessLevelChanged && !instructorChanged}
        >
          Update Access
        </Button>
      </td>
    </tr>
  );
}

function InstructorSelect({ defaultValue, onChange, accessLevel }) {
  const { data } = useSWR("/api/instructors", fetcher);
  if (!data) return null;

  return (
    <Form.Control
      as="select"
      size="sm"
      custom
      defaultValue={defaultValue}
      onChange={onChange}
      disabled={accessLevel === "revoked"}
    >
      <option></option>
      {data.map((instructor) => {
        const {
          _id,
          name: { first: firstName, last: lastName },
        } = instructor;

        return (
          <option key={_id} value={_id}>{`${firstName} ${lastName}`}</option>
        );
      })}
    </Form.Control>
  );
}
