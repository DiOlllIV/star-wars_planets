import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { fetchingData } from "./dataGateway";
import Main from "./components/Main";
import Details from './components/Details';

const App = () => {
  //set feetching data of all planets after first render and transfer to Main component
  const [planetsData, setPlanetsData] = useState(false);
  //save all urls with info of actual planet and transfer to Details components for fetching 
  const [planetUrl, setPlanetUrl] = useState('');

  useEffect(() => {
    if (!planetsData)
      fetchingData("https://swapi.dev/api/planets/")
        .then((data) =>
          setPlanetsData(data.results)
      );
  });
  
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main planetsData={planetsData} setPlanetUrl={setPlanetUrl} />
      </Route> 
      <Route path="/:direction?">
        <Details planetUrl={planetUrl}/> 
      </Route> 
    </Switch>
  </BrowserRouter>
)
};

export default App;
