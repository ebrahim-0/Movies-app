import { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { getMovies, search } from "../rtx/Slices/MoviesSlice";
import icon from "../icon.png";

function NavBar() {
  const value = useRef();

  const [searchWord, setSearchWord] = useState("");

  const dispatch = useDispatch();

  const handleSearch = () => {
    const wordValue = value.current.value;
    setSearchWord(wordValue);
    dispatch(search(searchWord));
    if (wordValue === "") {
      dispatch(getMovies());
    }
  };

  return (
    <>
      <Navbar bg="danger" expand="lg" className="p-4 text-light">
        <Container>
          <Navbar.Brand href="/" className="text-light me-5">
            <img
              src={icon}
              className=" align-bottom me-3"
              width={40}
              alt="React Bootstrap logo"
            />
            Movies
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
          <Navbar.Collapse id="navbarScroll" className="text-light">
            <Form.Control
              type="search"
              placeholder="Search"
              className="m-auto me-2 mt-2  w-100"
              aria-label="Search"
              ref={value}
              onChange={handleSearch}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
