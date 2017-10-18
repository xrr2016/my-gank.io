import { h, Component } from 'preact'
import { route } from 'preact-router'
import Toolbar from 'preact-material-components/Toolbar'
import Icon from 'preact-material-components/Icon'
import Dialog from 'preact-material-components/Dialog'
import Button from 'preact-material-components/Button'
import Textfield from 'preact-material-components/Textfield'
import Tabs from 'preact-material-components/Tabs'
import { getPathName } from '../../utils'
import style from './style'

export default class Header extends Component {
  state = {
    query: ''
  }

  openDialog = () => this.searchDialog.MDComponent.show()
  onChange = e => this.setState({ query: e.target.value })

  render() {
    return (
      <div>
        <Toolbar fixed>
          <Toolbar.Row>
            <Toolbar.Section align-start>
              <Toolbar.Title>GANK.ME</Toolbar.Title>
            </Toolbar.Section>
            <Toolbar.Section align-end style={{ paddingRight: '15px' }}>
              <Icon onClick={this.openDialog}>search</Icon>
            </Toolbar.Section>
          </Toolbar.Row>
          <Tabs style={{ width: '100%' }}>
            <Tabs.Tab
              active={getPathName() === '/'}
              onClick={() => route('/', true)}
            >
              最新
            </Tabs.Tab>
            <Tabs.Tab
              active={getPathName() === '/category'}
              onClick={() => route('/category', true)}
            >
              分类
            </Tabs.Tab>
            <Tabs.Tab
              active={getPathName() === '/bouns'}
              onClick={() => route('/bouns', true)}
            >
              福利
            </Tabs.Tab>
          </Tabs>
        </Toolbar>

        <Dialog
          ref={searchDialog => {
            this.searchDialog = searchDialog
          }}
        >
          <Dialog.Header>查询</Dialog.Header>
          <Dialog.Body>
            <Textfield
              label="找点什么"
              fullwidth
              onChange={this.onChange}
              value={this.state.query}
            />
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.FooterButton cancel>取消</Dialog.FooterButton>
            <Dialog.FooterButton accept>确定</Dialog.FooterButton>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
}
