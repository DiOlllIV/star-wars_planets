import React, { useState, useEffect } from "react";
import { fetchResidentsData } from "../dataGateway";
import Resident from "./Resident";
import "../styles/residents.scss";

const Residents = ({ residents }) => {
  const http = /http/gi;
  const [residentsData, setResidentsData] = useState([]);
  const fixedLinks = residents.map(resident => resident.replace(http, 'https'))

  //save to state for render information about any resident on actual planet. Return from function after fetching if response === 0 
  useEffect(() => {
    if (residentsData.length === 0)
      fetchResidentsData(fixedLinks).then((data) => {
        if (data.length === 0) return;

        setResidentsData(data);
      });
  });

  return (
    <div className="residents">
      {residents.length === 0 
      ? ("unknown") 
      : (<Resident residentsData={residentsData} />)
      }
    </div>
  );
};

export default Residents;
