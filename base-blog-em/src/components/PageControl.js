import { useState } from "react";

const PageControl = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <div className="pages">
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
    </>
  );
};

export default PageControl;
