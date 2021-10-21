import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Posts from './components/posts/Posts'
import SinglePost from './components/post/SinglePost'
import Navigation from './navbar/Navigation';
import Home from './screen/Home';
import ListWisata from './screen/ListWisata';

export default function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/wisatas" component={ListWisata} />
        <Route path="/:id" component={SinglePost} />
      </Switch>
    </Router>
  )
}