import { Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../rtx/Slices/MoviesSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Loading.css";

function CardMove() {
  const { movies, loading } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMovies(1));
  }, []);

  console.log(movies.results);

  console.log(loading);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="loading m-5">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        movies.map((movie) => {
          return (
            <Col className="mt-3 " key={movie.id}>
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
                    <Button
                      variant="danger"
                      onClick={() => navigate(`/movies/${movie.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          );
        })
      )}
    </>
  );
}

export default CardMove;
