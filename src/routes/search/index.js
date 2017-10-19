import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import PlaceHolder from '../../components/placeHolder'

import { fetchSearchData } from '../../actions'

class Search extends Component {
  componentDidMount = () => {
    this.props.fetchSearchData(this.props.query)
  }

  render() {
    const { datas } = this.props
    return (
      <div>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">
              aaaa
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  datas: state.search
})

export default connect(mapStateToProps, { fetchSearchData })(Search)
