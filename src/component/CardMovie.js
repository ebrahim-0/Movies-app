import { Alert, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../rtx/Slices/MoviesSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CardMove() {
  const movies = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMovies(1));
  }, []);

  return (
    <>
      {movies.length > 1 ? (
        movies.map((movie) => {
          return (
            <Col
              className="mt-3"
              key={movie.id}
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
              <div className="card" style={{ margin: "20px" }}>
                <img
                  style={{ height: "350px", padding: "5px" }}
                  alt=""
                  src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                />
                <div className="card-overlay">
                  <div className="overlay-text">
                    <p>Film Name: {movie.title}</p>
                    <p>Release Date: {movie.release_date}</p>
                    <p>Vote Count: {movie.vote_count}</p>
                    <p>Rating: {movie.vote_average}</p>
                  </div>
                </div>
              </div>
            </Col>
          );
        })
      ) : (
        <Alert variant="danger" className="mt-5 ">
          There is no Movies
        </Alert>
      )}
    </>
  );
}

export default CardMove;
