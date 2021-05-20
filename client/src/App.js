import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "./Redux/User/user.selectors";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./Redux/User/user.actions";
import Homepage from "./Pages/Homepage/Homepage";
import Signpage from "./Pages/SignPage/Signpage";
import Shop from "./Pages/Shop/Shop";
import Checkout from "./Pages/Checkout/Checkout";
import Header from "./Components/Header/Header";
import './App.scss';


function App({ checkUserSession, currentUser }) {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to="/" />) : (<Signpage />)} />
      </Switch>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
