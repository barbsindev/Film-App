import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SingleMovie.css";

export default function SingleMovies() {
  const location = useLocation();
  const { title, director, image, release_date } = location.state;

  return (
    <section className="film-container">
      <img src={image} alt={"Poster of the film"} className="film-img" />
      <h1>{title}</h1>
      <p>Director: {director}</p>
      <p>Release Date: {release_date}</p>
      <Link to="/" className="btn">
        Back
      </Link>
    </section>
  );
}
