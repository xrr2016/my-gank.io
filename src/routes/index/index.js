import { h, Component } from 'preact'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import { Router } from 'preact-router'
import Header from '../../components/header'
import Home from '../../container/home'
import Bouns from '../../container/bouns'
import Category from '../../container/category'

import style from './style'

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <LayoutGrid className="margin-top-104px">
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">
              <Router>
                <Home path="/home" default />
                <Category path="/category"/>
                <Bouns path="/bouns" />
              </Router>
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    )
  }
}

export default Index
