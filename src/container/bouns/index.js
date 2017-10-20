import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import { Card, Button, Snackbar } from 'preact-material-components'
import ContentLoader, { Rect, Circle } from 'react-content-loader'

import { fetchBounsData } from '../../actions'
import style from './style'

class Bouns extends Component {
  state = {
    index: 0
  }

  prev = () => {
    if (this.state.index <= 0) {
      this.bar.MDComponent.show({
        message: '已经是第一张了.'
      })
      return
    } else {
      this.setState({ index: this.state.index - 1 })
    }
  }
  next = () => {
    if (this.state.index >= this.props.bouns.length - 1) {
      this.bar.MDComponent.show({
        message: '没有更多了.'
      })
      return
    } else {
      this.setState({ index: this.state.index + 1 })
    }
  }
  componentDidMount = () => {
    if (this.props.bouns.length) return
    this.props.fetchBounsData(100)
  }

  render() {
    const { bouns } = this.props
    const { index } = this.state
    const item = bouns[index]
    return (
      <div>
        {item ? (
          <div style={{ position: 'relative' }}>
            <Card>
              <Card.MediaItem src={item.url} style={{ height: 429 }} />
              <span className="desc">{item.desc}</span>
            </Card>
            <Card.Actions>
              <Card.Action>
                <Button ripple onClick={this.prev}>
                  上一张
                </Button>
              </Card.Action>
              <Card.Action>
                {' '}
                <Button ipple raised href={item.url} download>
                  下载
                </Button>
              </Card.Action>
              <Card.Action>
                {' '}
                <Button ripple onClick={this.next}>
                  下一张
                </Button>
              </Card.Action>
              <Snackbar
                ref={bar => {
                  this.bar = bar
                }}
              />
            </Card.Actions>
          </div>
        ) : (
          <ContentLoader width={343} height={429}>
            <Rect radius={5} width={343} height={429} />
          </ContentLoader>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bouns: state.bouns
})

export default connect(mapStateToProps, { fetchBounsData })(Bouns)
