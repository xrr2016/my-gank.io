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
  route = path => route(path, true)

  render() {
    return (
      <div>
        <Toolbar fixed className={style.toolbar}>
          <Toolbar.Row>
            <Toolbar.Section align-start>
              <Toolbar.Title>干货集中营</Toolbar.Title>
            </Toolbar.Section>
            <Toolbar.Section align-end>
              <Toolbar.Icon onClick={() => this.route('/search')}>
                search
              </Toolbar.Icon>
              <Toolbar.Icon onClick={this.openMenu}>more_vert</Toolbar.Icon>
              <Menu.Anchor>
                <Menu
                  ref={menu => {
                    this.menu = menu
                  }}
                >
                  <Menu.Item onClick={() => this.route('/collection')}>
                    我的收藏
                  </Menu.Item>
                  <Menu.Item>
                    夜间主题
                    <Switch
                      className={style.switch}
                      onChange={this.toggleTheme}
                      checked={this.props.theme === 'night'}
                    />
                  </Menu.Item>
                  <Menu.Item onClick={() => window.open('https://github.com/xrr2016/my-gank.io')}>Github</Menu.Item>
                </Menu>
              </Menu.Anchor>
            </Toolbar.Section>
          </Toolbar.Row>
          <Tabs style={{ width: '100%' }}>
            <Tabs.Tab
              active={location.pathname === '/home'}
              onClick={() => this.route('/home')}
            >
              最新数据
            </Tabs.Tab>
            <Tabs.Tab
              active={location.pathname === '/category'}
              onClick={() => this.route('/category')}
            >
              分类数据
            </Tabs.Tab>
            <Tabs.Tab
              active={location.pathname === '/bouns'}
              onClick={() => this.route('/bouns')}
            >
              福利图片
            </Tabs.Tab>
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
