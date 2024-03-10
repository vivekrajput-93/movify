

import React from 'react'
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from './ui/pagination';


interface PaginationProps {
    totalItem: number;
    itemsPerPage: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  }

const PaginationSection:React.FC<PaginationProps> = ({totalItem, itemsPerPage, currentPage, setCurrentPage}) => {

    let pages = [];
    for (let i = 0; i <= Math.ceil(totalItem / itemsPerPage); i++) {
      pages.push(i);
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(prevPage => prevPage - 1);
        }
    };
    
    const handleNextPage = () => {
        if (currentPage < pages.length) {
          setCurrentPage(prevPage => prevPage + 1);
        }
    };

  return (
    <Pagination>
        <PaginationContent>
            <PaginationItem>
                <PaginationPrevious className='cursor-pointer' onClick={handlePrevPage} />
            </PaginationItem>
            <PaginationItem>
                <PaginationNext className='cursor-pointer' onClick={handleNextPage} />
            </PaginationItem>
        </PaginationContent>
    </Pagination>
  )
}

export default PaginationSection