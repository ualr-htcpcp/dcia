import { useEffect, useReducer, useState } from "react";
import { Pagination } from "react-bootstrap";

function getSelectedIndex(terms) {
  return terms.findIndex((term) => term.isCurrent);
}

function termReducer(terms, action) {
  let currentTerm = getSelectedIndex(terms);

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

  const checkPagination = (terms, index) => {
    if (index === 0) {
      setPaginationBounds({ isFirst: true, isLast: false });
    }
    if (index === terms.length - 1) {
      setPaginationBounds({ isFirst: false, isLast: true });
    }
  };

  // Set selected term from parent
  useEffect(() => {
    if (terms) {
      setIsLoading(false);
      const selected = getSelectedIndex(terms);
      handleTermChange(terms[selected]);

      checkPagination(terms, selected);
    }
  }, [terms, handleTermChange]);

  // Set selected term from user interaction
  useEffect(() => {
    if (termsList) {
      const selected = getSelectedIndex(termsList);
      handleTermChange(termsList[selected]);
      checkPagination(termsList, selected);
    }
  }, [termsList, handleTermChange]);

  return (
    <Pagination className={className}>
      <Pagination.Item
        disabled={paginationBounds.isFirst || isLoading}
        onClick={() => dispatch({ type: "prev" })}
      >
        Previous
      </Pagination.Item>

      <Pagination.Item className="w-100 text-center disabled">
        {`${selectedTerm.term} ${selectedTerm.year}`}
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
