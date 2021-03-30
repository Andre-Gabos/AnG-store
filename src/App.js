import React from 'react';
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./Firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/user.actions";
import Homepage from "./Pages/Homepage/Homepage";
import Signpage from "./Pages/SignPage/Signpage";
import Shop from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";
import './App.css';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth)
    });
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
          <Route path='/signin' component={Signpage} />
        </Switch>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    setCurrentUser: (user) => { return dispatch(setCurrentUser(user)) }
  })
}

export default connect(null, mapDispatchToProps)(App);
