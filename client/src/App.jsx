import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import HeaderNav from './components/HeaderNav/HeaderNav';
import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import LoginAndRegister from './pages/LoginAndRegister/LoginAndRegister';
import Checkout from './pages/Checkout/Checkout';
import { checkUserSession } from './redux/user/user.actions';

function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
