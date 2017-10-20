import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import Toolbar from 'preact-material-components/Toolbar'
import Icon from 'preact-material-components/Icon'
import Card from 'preact-material-components/Card'
import Menu from 'preact-material-components/Menu'
import Button from 'preact-material-components/Button'
import ReturnFab from '../../components/return'
import { getCollections, removeCollection } from '../../actions'
const w = document.getElementById('app').getBoundingClientRect().width - 64

class Collection extends Component {
  openMenu = e => (this.menu.MDComponent.open = true)

  componentDidMount() {
    this.props.getCollections()
    this.menu.MDComponent.open = false
  }

  render() {
    const { collections } = this.props
    return (
      <div>
        <Toolbar fixed className="toolbar">
          <Toolbar.Row>
            <Toolbar.Section align-start>
              <Toolbar.Title>我的收藏</Toolbar.Title>
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
            <LayoutGrid.Cell cols="12">
              {!collections.length ? (
                <Card>
                  <Card.Primary>
                    <Card.Subtitle>还没有收藏...</Card.Subtitle>
                  </Card.Primary>
                </Card>
              ) : (
                collections.map(item => {
                  let imgSrc = ''
                  if (item.images) {
                    imgSrc = `${item.images[0]}?imageView2/0/w/${w}`
                  }
                  return (
                    <Card>
                      <Card.Primary>
                        <Card.Title>{item.desc}</Card.Title>
                        <Card.Subtitle style={{ marginTop: 4 }}>
                          <span className="badge">{item.type}</span>
                          <span className="badge">{item.who}</span>
                          <span className="badge">
                            {item.publishedAt.slice(0, 10)}
                          </span>
                        </Card.Subtitle>
                      </Card.Primary>
                      {!!imgSrc && (
                        <Card.Media>
                          <Card.MediaItem src={imgSrc} />
                        </Card.Media>
                      )}
                      <Card.Actions>
                        <Button ripple href={item.url} target="_blank">
                          查看
                        </Button>
                        <Button
                          ripple
                          style={{ color: 'red' }}
                          onClick={() => this.props.removeCollection(item)}
                        >
                          删除
                        </Button>
                      </Card.Actions>
                    </Card>
                  )
                })
              )}
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
          <ReturnFab path="/" />
        </LayoutGrid>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  collections: state.collections
})

const mapDispatchToProps = {
  getCollections,
  removeCollection
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection)
