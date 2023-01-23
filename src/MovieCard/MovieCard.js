import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="fix-me-too">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.rate}</Card.Text>
          <Card.Text>{movie.description}</Card.Text>
          <Button variant="primary" href={movie.trailer}>
            Trailer
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
