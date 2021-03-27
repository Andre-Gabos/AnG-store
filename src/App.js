import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import Homepage from "./Pages/Homepage/Homepage";
import Shop from "./Pages/Shop/Shop";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
