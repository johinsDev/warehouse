import { createBrowserHistory } from "history";
import React from 'react';
import { Route, Router, Switch } from "react-router-dom";
import Admin from './routes/admin';
import Root from './routes/root';

const hist = createBrowserHistory();

const App: React.FC = () => {

  return (
    <Router history={hist}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Root} />
      </Switch>
    </Router>
  );
}

export default App;
