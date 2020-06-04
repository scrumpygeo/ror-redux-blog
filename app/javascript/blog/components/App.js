import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PostsIndex from './PostsIndex';
import PostCreate from './PostCreate';
import PostShow from './PostShow';
import PostEdit from './PostEdit';
import PostDelete from './PostDelete';
import Header from './Header';

import history from '../history';

import './App.css';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={PostsIndex} />
            <Route path='/posts/new' exact component={PostCreate} />
            <Route path='/posts/edit/:id' exact component={PostEdit} />
            <Route path='/posts/delete/:id' exact component={PostDelete} />
            <Route path='/posts/:id' exact component={PostShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
