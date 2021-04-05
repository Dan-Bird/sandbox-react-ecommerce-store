import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

import { default as HeaderNav } from '../components/HeaderNav/HeaderNav.container';
import HomePage from '../pages/Homepage/HomePage';
import ShopPage from '../pages/ShopPage/ShopPage';
import LoginAndRegister from '../pages/LoginAndRegister/LoginAndRegister';
import { default as Checkout } from '../pages/Checkout/Checkout.container';

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <div>
      <HeaderNav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/shop" component={ShopPage} />

        <Route exact path="/signin">
          {currentUser ? <Redirect to="/" /> : <LoginAndRegister />}
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
