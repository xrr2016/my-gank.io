import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './components/header'
import ToggleTheme from './components/toggleTheme'
import Home from './routes/home'
import Category from './routes/category'
import Bouns from './routes/bouns'

export default class App extends Component {
  render() {
    return (
      <div id="app" className="mdc-typography">
        <Header />
        <Router>
          <Home path="/" default/>
          <Category path="/category"/>
          <Bouns path="/bouns"/>
        </Router>
        <ToggleTheme />
      </div>
    )
  }
}
