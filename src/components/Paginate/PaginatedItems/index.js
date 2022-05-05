import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Items from '../Items';
import './index.scss';

const PaginatedItems = ({ itemsPerPage, userRepos }) => {

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const nextItems = itemOffset + itemsPerPage
    const totalRepos = userRepos.length;
    const firstItemIndex = itemOffset + 1;
    const lastItemIndex = nextItems > totalRepos ? totalRepos : nextItems;

    const paginateText = `${firstItemIndex}-${lastItemIndex} of ${totalRepos} items`;

    useEffect(() => {
        setCurrentItems(userRepos.slice(itemOffset, nextItems));
        setPageCount(Math.ceil(totalRepos / itemsPerPage));
    }, [itemOffset, itemsPerPage, userRepos, nextItems, totalRepos]);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % totalRepos;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <div className='container-paginate'>
                <div className='paginate-info'>{paginateText}</div>
                <ReactPaginate
                    nextLabel=""
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}  /*3 и 1 можно вынести в файл с константами*/
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    previousLabel=""
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    );
}

export default PaginatedItems;