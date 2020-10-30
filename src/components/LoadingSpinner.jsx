import { Spinner } from "react-bootstrap";

export default function LoadingSpinner() {
  return (
    <>
      <Spinner animation="border" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </>
  );
}
