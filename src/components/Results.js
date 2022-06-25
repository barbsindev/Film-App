import React, { useState, useEffect } from "react";
import Film from "./Film";
import { Link } from "react-router-dom";
import Wave from "../assets/wave.svg";
import "./Results.css";
export default function Results() {
  const [data, setData] = useState(null);

  const apiUrl = "https://ghibliapi.herokuapp.com/films?_limit=5";
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <section className="film-container">
        {data &&
          data.map(({ id, title, description, image }) => (
            <div className="film-info" key={id}>
              <div className="film-img">
                <img
                  src={Wave}
                  alt="decoration"
                  className="img-decoration"
                ></img>
                <img
                  src={image}
                  alt="Poster of the film"
                  className="film-img"
                />
              </div>
              <div className="film-description">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to="/Film" className="btn">
                  See more
                </Link>
              </div>
            </div>
          ))}
      </section>
    </>
  );
}
