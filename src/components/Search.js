import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

function Search({ searchHandler }) {
  const [string, setString] = useState("");

  const handleSearch = (e) => {
    setString(e.target.value);
    searchHandler(e.target.value);
  };

  //Search Form to search by Artist name

  return (
    <>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search an artist"
          value={string}
          onChange={handleSearch}
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-dark">Search</Button>
      </Form>
    </>
  );
}

export default Search;
