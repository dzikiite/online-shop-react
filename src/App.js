import React from 'react';
import GlobalStyle from './styles/globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import CartPage from './pages/CartPage/CartPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/:slug" component={SingleProductPage} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
