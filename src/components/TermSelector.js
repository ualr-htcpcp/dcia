import { useEffect, useReducer, useState } from "react";
import { Pagination } from "react-bootstrap";

function termReducer(terms, action) {
  let currentTerm = terms.findIndex((term) => term.isCurrent);

  switch (action.type) {
    case "prev": {
      if (currentTerm === 0) return terms;
      return terms.map((term, i) => {
        return i === currentTerm - 1
          ? { ...term, isCurrent: true }
          : { ...term, isCurrent: false };
      });
    }
    case "next": {
      if (currentTerm === terms.length - 1) return terms;
      return terms.map((term, i) => {
        return i === currentTerm + 1
          ? { ...term, isCurrent: true }
          : { ...term, isCurrent: false };
      });
    }
  }
}

export default function TermSelector({
  className,
  terms,
  selectedTerm,
  handleTermChange,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [termsList, dispatch] = useReducer(termReducer, terms);
  const [paginationBounds, setPaginationBounds] = useState({
    isFirst: false,
    isLast: false,
  });

  // Set intial term selection
  useEffect(() => {
    if (terms) {
      isLoading ? setIsLoading(false) : "";

      const selected = termsList.findIndex((term) => term.isCurrent);
      handleTermChange(termsList[selected].name);
    }
  }, [terms, termsList, isLoading, handleTermChange]);

  //Set selected term from pagination interaction
  useEffect(() => {
    if (!isLoading) {
      const selected = termsList.findIndex((term) => term.isCurrent);
      if (selected === 0) {
        setPaginationBounds({ isFirst: true, isLast: false });
      }
      if (selected === termsList.length - 1) {
        setPaginationBounds({ isFirst: false, isLast: true });
      }
    }
  }, [termsList, selectedTerm, handleTermChange, isLoading]);

  return (
    <Pagination className={className}>
      <Pagination.Item
        disabled={paginationBounds.isFirst || isLoading}
        onClick={() => dispatch({ type: "prev" })}
      >
        Previous
      </Pagination.Item>

      <Pagination.Item className="w-100 text-center disabled">
        {selectedTerm}
      </Pagination.Item>

      <Pagination.Item
        disabled={paginationBounds.isLast || isLoading}
        onClick={() => dispatch({ type: "next" })}
      >
        Next
      </Pagination.Item>
    </Pagination>
  );
}
