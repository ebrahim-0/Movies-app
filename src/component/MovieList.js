import { Row } from "react-bootstrap";
import CardMove from "./CardMovie";
import PaginationComponent from "./Pagination";

function MovieList() {
  return (
    <Row>
      <CardMove />
      <PaginationComponent />
    </Row>
  );
}

export default MovieList;
