import { Pagination } from "react-bootstrap";

export default function TermSelector({ className }) {
  return (
    <Pagination className={className}>
      <Pagination.Item>Previous</Pagination.Item>
      <Pagination.Item disabled className="w-100 text-center">
        Fall 2020
      </Pagination.Item>
      <Pagination.Item>Next</Pagination.Item>
    </Pagination>
  );
}
