import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./Firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/user.actions";
import { selectCurrentUser } from "./Redux/User/user.selectors";
import { createStructuredSelector } from "reselect";
import Homepage from "./Pages/Homepage/Homepage";
import Signpage from "./Pages/SignPage/Signpage";
import Shop from "./Pages/Shop/Shop";
import Checkout from "./Pages/Checkout/Checkout";
import Header from "./Components/Header/Header";
import './App.css';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //   }

    //   setCurrentUser(userAuth);
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<Signpage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

function mapDispatchToProps(dispatch) {
  return ({
    setCurrentUser: (user) => { return dispatch(setCurrentUser(user)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
