import React from "react";
import "./Film.css";

export default function Film({ data }) {
  return (
    <section className="film-container">
      {data &&
        data.map(({ id, title, director, release_date, image }) => (
          <div className="film-data" key={id}>
            <img src={image} alt="Poster of the film" className="img" />
            <h1>{title}</h1>
            <p>Director:{director}</p>
            <p>Release Date:{release_date}</p>
            <button className="return-btn">Back</button>
          </div>
        ))}
    </section>
  );
}
