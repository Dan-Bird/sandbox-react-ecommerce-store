import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import CartProvider from './providers/cart/CartProvider';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import './index.css';
import App from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Provider store={store}>
        <Router>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Router>
      </Provider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
