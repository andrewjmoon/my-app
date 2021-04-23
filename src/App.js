import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Nav from './Nav';
import Placeholder from './components/Placeholder';


const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/placeholder" component={Placeholder} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;