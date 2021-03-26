import React from 'react';
import {Router, Switch} from "react-router-dom";
import './App.css';
import Homepage from "./Pages/Homepage/Homepage";

function Hatspage() {
  return (
  <div>
    <h1>HATS PAGE</h1>
  </div>
  );
}


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
