import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "./Redux/User/user.selectors";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./Redux/User/user.actions";
import Header from "./Components/Header/Header";
import Spinner from "./Components/Spinner/Spinner";
import './App.scss';

const Homepage = lazy(() => import("./Pages/Homepage/Homepage"));
const Shop = lazy(() => import("./Pages/Shop/Shop"));
const Checkout = lazy(() => import("./Pages/Checkout/Checkout"));
const Signpage = lazy(() => import("./Pages/SignPage/Signpage"));


function App({ checkUserSession, currentUser }) {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);


  return (
    <div>
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to="/" />) : (<Signpage />)} />
        </Suspense>
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
