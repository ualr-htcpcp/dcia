import { Card, ListGroup } from "react-bootstrap";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import SummaryItem from "./SummaryItem.jsx";

function BlankList({ numItems }) {
  return (
    <ListGroup variant="flush">
      {Array(numItems)
        .fill(0)
        .map((item, i) => {
          return <SummaryItem key={i} name="" score="" />;
        })}
    </ListGroup>
  );
}

function fetchWithYearAndTerm(url, term) {
  const { term: semester, year } = term;
  const fullURL = `${url}?term=${semester}&year=${year}`;
  return fetch(fullURL).then((r) => r.json());
}

export default function ScoreSummaryCard({
  name,
  viewAllPath,
  amount,
  baseUrl,
  term,
}) {
  const { data: items } = useSWR(
    term ? [baseUrl, term] : null,
    fetchWithYearAndTerm
  );
  return (
    <Card>
      <Card.Header className="bg-white">{name}</Card.Header>

      {/* {!items ? (
        <BlankList numItems={amount} />
      ) : (
        <ListGroup variant="flush">
          {items.map((item, i) => (
            <SummaryItem key={i} name={item.name} score={item.score} />
          ))}
        </ListGroup>
      )} */}

      <Card.Footer className="bg-white">
        <a href={viewAllPath}>View All</a>
      </Card.Footer>
    </Card>
  );
}
