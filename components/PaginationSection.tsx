import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

interface PaginationProps {
  totalItem: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationSection: React.FC<PaginationProps> = ({
  totalItem,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {



  let pages = [];
  for (let i = 0; i <= Math.ceil(totalItem / itemsPerPage); i++) {
    pages.push(i);
  }

  const maxPageNum = 5;
  const pageNumLimit = Math.floor(maxPageNum / 2);

  let activePages = pages.slice(
    Math.max(0, currentPage - 1 - pageNumLimit),
    Math.min(currentPage - 1 + pageNumLimit, pages.length)
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const renderPages = () => {
    const renderedPages = activePages.map((item, idx) => (
      <PaginationItem
        key={idx}
        className={
          currentPage === item
            ? "bg-neutral-800 rounded-md cursor-pointer"
            : "cursor-pointer"
        }
      >
        <PaginationLink  onClick={() => setCurrentPage(item)}>
          {item}
        </PaginationLink>
      </PaginationItem>
    ));

    if (activePages[0] > 1) {
      renderedPages.unshift(
        <PaginationEllipsis
          key="ellipsis-start"
          onClick={() => setCurrentPage(activePages[0] - 1)}
        />
      );
    }

    // if (activePages[activePages.length - 1] < pages.length) {
    //   renderedPages.push(
    //     <PaginationEllipsis
    //       key="ellipsis-end"
    //       onClick={() =>
    //         setCurrentPage(activePages[activePages.length - 1] + 1)
    //       }
    //     />
    //   );
    // }

    return renderedPages;
  };

  return (
    <Pagination className="overflow-y-hidden">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer"
            onClick={handlePrevPage}
          />
        </PaginationItem>
        {renderPages()}
        <PaginationItem>
          <PaginationNext className="cursor-pointer" onClick={handleNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSection;
