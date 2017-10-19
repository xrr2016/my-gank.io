import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Index from './routes/index'
import Search from './routes/search'
import Collection from './routes/collection'

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Router>
          <Index path="/" default/>
          <Collection path="/collection" />
          <Search path="/search" />
        </Router>
      </div>
    )
  }
}
