import React, { useMemo, useRef } from "react";
import { Button } from "antd";

function Pagination({ currentPage, totalPages, updatePage }) {
  const pageRef = useRef(1);

  const paginated = (newPage) => {
    pageRef.current = newPage;
    updatePage(newPage);
  }

  const pages = useMemo(() => {
    const pageArr = [];
    for (let i = 0; i < totalPages; i++) {
      pageArr.push[i];
    }
    return pageArr;
  }, [totalPages]);

  
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
    >
      <Button
        type="primary"
        disabled={currentPage === 1}
        onClick={() => paginated(currentPage - 1)}
      >
        Prev
      </Button>
      <div style={{ display: "flex", margin: "0 1rem" }}>
        {pages.map((page) => (
          <Button
            key={page}
            type={currentPage === page ? "primary" : "default"}
            onClick={() => paginated(page)}
          >
            {page}
          </Button>
        ))}
      </div>
      <Button
        type="primary"
        disabled={currentPage === totalPages}
        onClick={() => paginated(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
