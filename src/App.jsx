import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/shop">
          <ShopPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
