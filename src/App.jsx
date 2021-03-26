import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import CurrentUserContext from './contexts/current-user/current-user-context';

import HeaderNav from './components/HeaderNav/HeaderNav';
import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import LoginAndRegister from './pages/LoginAndRegister/LoginAndRegister';
import Checkout from './pages/Checkout/Checkout';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

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
      <CurrentUserContext.Provider value={currentUser}>
        <HeaderNav />
      </CurrentUserContext.Provider>
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
