import React from 'react';

import './App.css';
import PostList from './components/PostList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Berita from './components/Berita';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <PostList />
          </Route>
          <Route exact path='/berita' component={Berita}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
