import ReactPaginate from "react-paginate";
import { getMovies } from "../rtx/Slices/MoviesSlice";
import { useDispatch } from "react-redux";
import "./Pagination.css";

function PaginationComponent() {
  const dispatch = useDispatch();

  const handlePageClick = (data) => {
    dispatch(getMovies(data.selected + 1));
  };

  const pageCount = 500;

  const pagination = (pagination) => {
    return (
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName={`pagination ${pagination} justify-content-center`}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        nextClassName={"page-item"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"activePage"}
      />
    );
  };

  let media = window.matchMedia("(max-width: 767px)");

  return <>{media.matches ? pagination("pagination-sm") : pagination("")}</>;
}

export default PaginationComponent;
