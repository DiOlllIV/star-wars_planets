import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.scss";

const Main = ({ planetsData, setPlanetUrl }) => {
  const http = /http/gi;
  if (!planetsData) return null;

  return (
    <ul className="planets-list">
      {planetsData.map((item) => (
        <Link
          key={item.diameter}
          to={`/${item.name}`}
          onClick={() => setPlanetUrl(`${item.url}`.replace(http, 'https'))}
          className="planets-list__item"
        >
          <span className="planets-item planets-item__name">{item.name}</span>
          <span className="planets-item planets-item__climate">
            Сlimate: {item.climate}
          </span>
          <span className="planets-item planets-item__population">
            Population: {item.population}
          </span>
        </Link>
      ))}
    </ul>
  );
};
export default Main;
