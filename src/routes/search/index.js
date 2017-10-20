import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import {
  LayoutGrid,
  Icon,
  Toolbar,
  Button,
  Textfield,
  List
} from 'preact-material-components'

import { fetchSearchData } from '../../actions'

class Search extends Component {
  componentDidMount = () => {
    this.props.fetchSearchData(this.props.query)
  }

  render() {
    const { datas } = this.props
    return (
      <div>
        <Toolbar fixed className="toolbar">
          <Toolbar.Row>
            <Toolbar.Section align-start>
              <Toolbar.Title>搜索</Toolbar.Title>
            </Toolbar.Section>
            <Toolbar.Icon>more_vert</Toolbar.Icon>
          </Toolbar.Row>
          <Toolbar.Row />
        </Toolbar>

        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">aaaa</LayoutGrid.Cell>
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
