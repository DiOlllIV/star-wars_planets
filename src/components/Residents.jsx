import React, { useState, useEffect } from "react";
import { fetchResidentsData } from "../dataGateway";
import Resident from "./Resident";
import "../styles/residents.scss";

const Residents = ({ residents }) => {
  const [residentsData, setResidentsData] = useState([]);

  //save to state for render information about any resident on actual planet. Return from function after fetching if response === 0 
  useEffect(() => {
    if (residentsData.length === 0)
      fetchResidentsData(residents).then((data) => {
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
