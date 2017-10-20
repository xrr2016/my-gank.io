import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import Toolbar from 'preact-material-components/Toolbar'
import Icon from 'preact-material-components/Icon'
import Card from 'preact-material-components/Card'
import Fab from 'preact-material-components/Fab'

class Collection extends Component {
  render() {
    return (
      <div>
        <Toolbar fixed className="toolbar">
          <Toolbar.Row>
            <Toolbar.Section align-start>
              <Toolbar.Title>我的收藏</Toolbar.Title>
            </Toolbar.Section>
            <Toolbar.Icon>more_vert</Toolbar.Icon>
          </Toolbar.Row>
          <Toolbar.Row></Toolbar.Row>
        </Toolbar>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">Collection</LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
        <Fab exited>
          <Icon>directions_run</Icon>
        </Fab>
      </div>
    )
  }
}
export default Collection
