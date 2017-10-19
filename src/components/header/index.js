import { h, Component } from 'preact'
import { route } from 'preact-router'
import { connect } from 'preact-redux'
import Menu from 'preact-material-components/Menu'
import Toolbar from 'preact-material-components/Toolbar'
import Switch from 'preact-material-components/Switch'
import Icon from 'preact-material-components/Icon'
import Tabs from 'preact-material-components/Tabs'
import { toggleTheme } from '../../actions'
import style from './style'

class Header extends Component {
  
  toggleTheme = () => {
    if (this.props.theme === 'day') {
      this.props.toggleTheme('night')
      document.body.classList.add('mdc-theme--dark')
    } else {
      this.props.toggleTheme('day')
      document.body.classList.remove('mdc-theme--dark')
    }
  }
  openMenu = e => (this.menu.MDComponent.open = true)
  goSearchPage = () => route('/search', true)

  render() {
    return (
      <div>
        <Toolbar fixed className={style.toolbar}>
          <Toolbar.Row>
            <Toolbar.Section align-start>
              <Toolbar.Title>GANK.ME</Toolbar.Title>
            </Toolbar.Section>
            <Toolbar.Section align-end>
              <Toolbar.Icon onClick={this.goSearchPage}>search</Toolbar.Icon>
              <Toolbar.Icon onClick={this.openMenu}>more_vert</Toolbar.Icon>
              <Menu.Anchor>
                <Menu
                  ref={menu => {
                    this.menu = menu
                  }}
                >
                  <Menu.Item onClick={this.goSearchPage}>我的收藏</Menu.Item>
                  <Menu.Item>
                    夜间主题
                    <Switch
                      className={style.switch}
                      onChange={this.toggleTheme}
                      checked={this.props.theme === 'night'}
                    />
                  </Menu.Item>
                </Menu>
              </Menu.Anchor>
            </Toolbar.Section>
          </Toolbar.Row>
          <Tabs style={{ width: '100%' }}>
            <Tabs.Tab>最新</Tabs.Tab>
            <Tabs.Tab>分类</Tabs.Tab>
            <Tabs.Tab>福利</Tabs.Tab>
          </Tabs>
        </Toolbar>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  theme: state.theme
})

export default connect(mapStateToProps, { toggleTheme })(Header)
