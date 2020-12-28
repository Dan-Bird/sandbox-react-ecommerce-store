import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';
import LoginAndRegister from './pages/LoginAndRegister/LoginAndRegister';

function App() {
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
