import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import LayoutGrid from 'preact-material-components/LayoutGrid'

class Collection extends Component {
  render() {
    return (
      <LayoutGrid>
        <LayoutGrid.Inner>
          <LayoutGrid.Cell cols="12">Collection</LayoutGrid.Cell>
        </LayoutGrid.Inner>
      </LayoutGrid>
    )
  }
}
export default Collection
