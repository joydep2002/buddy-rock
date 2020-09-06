import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostDetails from './components/PostDetails/PostDetails';
import Post from './components/Post/Post';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>

        <Route path='/:postId'>
          <PostDetails/>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/post">
          <Post/>
        </Route>

        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </div>

  );
}

export default App;
