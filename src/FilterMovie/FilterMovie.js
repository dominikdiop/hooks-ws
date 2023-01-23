import React from "react";
import { Form } from "react-bootstrap";
import "./FilterMovie.css";

const FilterMovie = ({ search, setSearch }) => {
  return (
    <div className="filter-me">
      <Form.Control
        type="text"
        placeholder="Enter Movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default FilterMovie;
