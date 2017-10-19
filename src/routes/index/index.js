import { h, Component } from 'preact'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import Header from '../../components/header'
import Home from '../../container/home'
import Bouns from '../../container/bouns'
import Category from '../../container/category'

class Index extends Component {
  render() {
    return <div>
      <Header />
      <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">
              Index
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
    </div>
  }
}

export default Index
