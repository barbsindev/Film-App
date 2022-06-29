import React from "react";
import { Link } from "react-router-dom";
import "./Movies.css";
import Waves from "../assets/Waves.svg";

export default function Movies({ data }) {
  return (
    <section className="film-wrapper">
      {data &&
        data.map(
          ({ id, title, description, image, director, release_date }) => (
            <div className="film-info" key={id}>
              <div className="film-img">
                <img
                  src={image}
                  alt="Poster of the film"
                  className="film-img"
                />
                <img
                  src={Waves}
                  alt="Poster of the film"
                  className="film-img"
                />
              </div>

              <div className="film-description">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link
                  to="/Film"
                  className="btn"
                  state={{
                    director: director,
                    title: title,
                    image: image,
                    release_date: release_date,
                  }}
                >
                  See more
                </Link>
              </div>
            </div>
          )
        )}
    </section>
  );
}
