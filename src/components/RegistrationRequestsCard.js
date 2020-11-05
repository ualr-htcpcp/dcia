import { Card, Table } from "react-bootstrap";
import RegistrationRequest from "../components/RegistrationRequest";

export default function RegistrationRequestsCard({ registrationRequests }) {
  return (
    <Card className="mt-3">
      <Card.Header className="bg-white">Access Requests</Card.Header>
      <Table responsive className="mb-0">
        <thead>
          <tr>
            <th>Access Level</th>
            <th>Email</th>
            <th>Status</th>
            <th>Requested On</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {registrationRequests.map((registrationRequest) => {
            return (
              <RegistrationRequest
                model={registrationRequest}
                key={registrationRequest._id}
              />
            );
          })}
          {registrationRequests.length > 0 || (
            <tr>
              <td>
                <em>No registration requests found.</em>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Card>
  );
}
