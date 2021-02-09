import React from 'react';
import GlobalStyle from './styles/globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CartPage from './pages/CartPage/CartPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';

import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;
