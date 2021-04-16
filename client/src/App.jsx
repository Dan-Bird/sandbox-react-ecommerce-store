import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import HeaderNav from './components/HeaderNav/HeaderNav';
import { checkUserSession } from './redux/user/user.actions';
import Spinner from './components/Spinner/Spinner';

const HomePage = lazy(() => import('./pages/Homepage/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'));
const LoginAndRegister = lazy(() => import('./pages/Checkout/Checkout'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout'));

function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <HeaderNav />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
