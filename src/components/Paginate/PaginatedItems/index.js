import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Items from '../Items';
import './index.scss';

const PaginatedItems = ({ itemsPerPage, userRepos }) => {

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    const paginateText = `${itemOffset + 1}-${(itemOffset + itemsPerPage) > userRepos.length ? userRepos.length : itemOffset + itemsPerPage
        } of ${userRepos.length} items`;

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(userRepos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(userRepos.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, userRepos]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % userRepos.length;
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
                    pageRangeDisplayed={3}
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