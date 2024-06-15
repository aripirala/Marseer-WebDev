// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ArticlePage from './components/ArticlePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/article/:id" component={ArticlePage} />
      </Switch>
    </Router>
  );
}

export default App;