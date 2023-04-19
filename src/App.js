import "./App.css";
import NavBar from "./component/NavBar";
import { Container } from "react-bootstrap";
import MovieList from "./component/MovieList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { search } from "./rtx/Slices/MoviesSlice";
import DetailsMovie from "./component/DetailsMovie";

function App() {
  return (
    <div className="App">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movies/:movieid" element={<DetailsMovie />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
