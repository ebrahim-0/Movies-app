import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { movieDetails } from "../rtx/Slices/MoviesDetailsSlice";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function DetailsMovie() {
  const details = useSelector((state) => state.details);

  const movieid = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieDetails(movieid.movieid));
  }, []);

  return (
    <>
      <Container className="mt-5 mb-5">
        <div className="mt-3 mb-4">
          <Link to={"/"} className="text-danger">
            <FontAwesomeIcon icon={faArrowLeft} className="fs-4" />
          </Link>
        </div>
        <div
          className="d-flex flex-column flex-md-row align-items-center rounded p-5 p-md-0"
          style={{ backgroundColor: "#eee" }}
        >
          <div className="text-center flex-grow-1">
            <p>Film Name: {details.title}</p>
            <p>Release Date: {details.release_date}</p>
            <p>Vote Count: {details.vote_count}</p>
            <p>Rating: {details.vote_average}</p>
          </div>
          <img
            style={{ height: "500px", padding: "15px" }}
            alt=""
            src={`https://image.tmdb.org/t/p/w500` + details.poster_path}
          />
        </div>

        <div className="mt-2 p-5 rounded" style={{ backgroundColor: "#eee" }}>
          <h2>Overview:</h2>
          <p>{details.overview}</p>
        </div>
        <div className="text-center mt-4">
          {details.homepage !== "" ? (
            <Button
              variant="danger"
              className="me-2"
              href={details.homepage}
              target="_blank"
            >
              Watch now
            </Button>
          ) : (
            <Button variant="danger" className="me-2" disabled>
              Watch now
            </Button>
          )}

          <Button variant="danger" href="/">
            Home
          </Button>
        </div>
      </Container>
    </>
  );
}

export default DetailsMovie;
