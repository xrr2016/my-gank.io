import { h, Component } from 'preact'
import LayoutGrid from 'preact-material-components/LayoutGrid'

export default class Category extends Component {
  render() {
    return (
      <div className="margin-top-104px">
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">Category</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="12">Category</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="12">Category</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="12">Category</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="12">Category</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="12">Category</LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    )
  }
}
