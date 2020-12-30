import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';
import LoginAndRegister from './pages/LoginAndRegister/LoginAndRegister';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <HeaderNav />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/shop">
          <ShopPage />
        </Route>

        <Route path="/signin">
          <LoginAndRegister />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
