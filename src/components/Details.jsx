import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { fetchingData } from "../dataGateway";
import Residents from "./Residents";
import "../styles/details.scss";

const Characters = ({ planetUrl }) => {
  const [planetData, setData] = useState(false);

  useEffect(() => {
    //fetching about actual planet and save to state for render
    if (!planetData) fetchingData(planetUrl)
      .then((data) => setData(data));
  });

  if (!planetData) return null;
  return (
    <Route path={`/${planetData.name}`}>
      <div className="planet-details">
        <Link to="/">
          <div className="return">Main</div>
        </Link>
        <span>name: {planetData.name}</span>
        <span>rotation period: {planetData.rotation_period}</span>
        <span>diameter: {planetData.diameter}</span>
        <span>climate: {planetData.climate}</span>
        <span>gravity: {planetData.gravity}</span>
        <span>terrain: {planetData.terrain}</span>
        <span>population: {planetData.population}</span>
        <span>residents:</span>
        <Residents residents={planetData.residents} />
      </div>
    </Route>
  );
};

export default Characters;
