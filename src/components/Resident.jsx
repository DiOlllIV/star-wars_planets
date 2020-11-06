import React from "react";

const Resident = ({ residentsData }) =>
  residentsData.map((resident) => (
    <div key={resident.name} className="resident">
      <span>name: {resident.name}</span>
      <span>birth year: {resident.birth_year}</span>
      <span>gender: {resident.gender}</span>
      <span>height: {resident.height}</span>
      <span>mass: {resident.mass}</span>
    </div>
  ));

export default Resident;
