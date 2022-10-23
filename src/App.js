import React from 'react';
import './App.css';
import Navbar from './pages/components/Navbar';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Profile from './pages/Profile';
import TodoApps from './pages/TodoApps';
import ChatTimeline from './pages/ChatTimeline';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Profile} />
          <Route path='/todosapp' component={TodoApps} />
          <Route path='/chattimeline' component={ChatTimeline} />
        </Switch> 
      </Router>
    </>
  );
}

export default App;
