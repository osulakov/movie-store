import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Auth from './components/Auth';
import Payment from './components/Payment';
import Tickets from './components/Tickets';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={ Movies } />
          <Route path='/auth' component={ Auth } />
          <Route path='/payment' component= { Payment } />
          <Route path='/tickets' component= { Tickets } />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
