import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import {
  LayoutGrid,
  Icon,
  Toolbar,
  Button,
  Textfield,
  List,
  Menu
} from 'preact-material-components'
import ReturnFab from '../../components/return'

import { fetchSearchData } from '../../actions'

class Search extends Component {

  openMenu = e => (this.menu.MDComponent.open = true)
  componentDidMount = () => {
    this.props.fetchSearchData(this.props.query)
    this.menu.MDComponent.open = false    
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
            <Toolbar.Icon onClick={this.openMenu}>more_vert</Toolbar.Icon>
            <Menu.Anchor>
              <Menu
                ref={menu => {
                  this.menu = menu
                }}
              >
                <Menu.Item
                  onClick={() =>
                    window.open('https://github.com/xrr2016/my-gank.io')}
                >
                  Github
                </Menu.Item>
              </Menu>
            </Menu.Anchor>
          </Toolbar.Row>
          <Toolbar.Row />
        </Toolbar>
        <LayoutGrid className="margin-top-104px">
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">aaaa</LayoutGrid.Cell>
            <ReturnFab path="/" />
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
