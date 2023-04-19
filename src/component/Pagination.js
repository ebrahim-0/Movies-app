import ReactPaginate from "react-paginate";
import { ApiKey, getMovies } from "../rtx/Slices/MoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Pagination.css";
import axios from "axios";
import { useState } from "react";

function PaginationComponent() {
  const [pageCount, setPageCount] = useState(0);

  const getPageCount = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US`
    );

    setPageCount(res.data.total_pages);
  };

  getPageCount();

  const dispatch = useDispatch();

  const handlePageClick = (data) => {
    dispatch(getMovies(data.selected + 1));
    console.log(data.selected);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName={"pagination justify-content-center"}
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
    </>
  );
}

export default PaginationComponent;
