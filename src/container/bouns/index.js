import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import { Card, Button, Snackbar } from 'preact-material-components'
import ContentLoader, { Rect, Circle } from 'react-content-loader'

import { fetchBounsData } from '../../actions'
import style from './style'

class Bouns extends Component {
  state = {
    index: 0,
    rect: document.getElementById('app').getBoundingClientRect()
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

  computedWH = () => {
    const rect = this.state.rect
    return {
      width: rect.width - 32,
      height: Math.ceil(1350 / 1080 * rect.width)
    }
  }

  componentDidMount = () => {
    if (this.props.bouns.length) return
    this.props.fetchBounsData(50)
  }

  render() {
    const { width, height } = this.computedWH()
    const { bouns } = this.props
    const { index } = this.state
    const item = bouns[index]
    return (
      <div>
        {item ? (
          <div style={{ position: 'relative' }}>
            <Card>
              <Card.MediaItem src={item.url} style={{ height: height }} />
              <span className="desc">{item.desc}</span>
            </Card>
            <Card.Actions style={{ justifyContent: 'space-between' }}>
              <Button ripple onClick={this.prev}>
                上一张
              </Button>
              <Button ripple raised href={item.url} download>
                下载
              </Button>
              <Button ripple onClick={this.next}>
                下一张
              </Button>
            </Card.Actions>
            <Snackbar
              ref={bar => {
                this.bar = bar
              }}
            />
          </div>
        ) : (
          <div>
            <ContentLoader width={width} height={height / 3 } type="facebook" />
            <ContentLoader width={width} height={height / 3} type="facebook" />
            <ContentLoader width={width} height={height / 3} type="facebook" />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bouns: state.bouns
})

export default connect(mapStateToProps, { fetchBounsData })(Bouns)
