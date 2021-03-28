import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { auth } from "./Firebase/firebase.utils";
import Homepage from "./Pages/Homepage/Homepage";
import Signpage from "./Pages/SignPage/Signpage";
import Shop from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";
import './App.css';


function App() {
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {

    auth.onAuthStateChanged((currentUser) => {
      setCurrentUser(currentUser)
      console.log(currentUser);
    })

    return function unsubscribeFromAuth() {
      setCurrentUser(null);
    }
  }, []
  )

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Signpage} />
      </Switch>
    </div>
  );
}

export default App;
