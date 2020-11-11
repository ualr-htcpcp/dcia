import { Card, Table } from "react-bootstrap";
import User from "../components/User";

export default function UsersCard({ users }) {
  return (
    <Card className="mt-3">
      <Card.Header className="bg-white">Users</Card.Header>
      <Table responsive className="mb-0">
        <thead>
          <tr>
            <th>Access Level</th>
            <th>Email</th>
            <th>Created On</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return <User model={user} key={user._id} />;
          })}
          {users.length > 0 || (
            <tr>
              <td>
                <em>No users found.</em>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Card>
  );
}
