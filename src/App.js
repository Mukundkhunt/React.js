import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Service from './Service'

export default class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </>
    )
  }
}
