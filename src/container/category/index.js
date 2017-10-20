import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import { List, Icon, Button, Card } from 'preact-material-components'
import ExpansionPanel from 'material-expansion-panel'

import {
  fetchAndroidData,
  fetchIOSData,
  fetchVideoData,
  fetchExpandData,
  fetchFrontEndData,
  fetchRandomData
} from '../../actions'

const actionButtons = [
  {
    buttonText: '关闭',
    toggleExpand: true
  }
]

class Category extends Component {
  
  componentDidMount() {
    const { android, ios, video, expand, front_end } = this.props
    if (
      android.length &&
      ios.length &&
      video.length &&
      expand.length &&
      front_end.length
    ) {
      return
    }
    this.props.fetchAndroidData()
    this.props.fetchIOSData()
    this.props.fetchVideoData()
    this.props.fetchExpandData()
    this.props.fetchFrontEndData()
  }

  openUrl = url => window.open(url)
  random = () => this.props.fetchRandomData()

  render() {
    const { android, ios, video, expand, front_end, random } = this.props
    return (
      <div style={{ position: 'relative' }}>
        <ExpansionPanel title="Android" expandedTitle="Android">
          <List two-line dense>
            {android.length
              ? android.map(item => (
                  <List.LinkItem onClick={() => this.openUrl(item.url)}>
                    <List.TextContainer>
                      <List.PrimaryText>{item.desc}</List.PrimaryText>
                      <List.SecondaryText>{item.who}</List.SecondaryText>
                    </List.TextContainer>
                  </List.LinkItem>
                ))
              : 'loading...'}
          </List>
        </ExpansionPanel>

        <ExpansionPanel title="iOS" expandedTitle="iOS">
          <List two-line dense>
            {ios.length
              ? ios.map(item => (
                  <List.LinkItem onClick={() => this.openUrl(item.url)}>
                    <List.TextContainer>
                      <List.PrimaryText>{item.desc}</List.PrimaryText>
                      <List.SecondaryText>{item.who}</List.SecondaryText>
                    </List.TextContainer>
                  </List.LinkItem>
                ))
              : 'loading...'}
          </List>
        </ExpansionPanel>

        <ExpansionPanel title="休息视频" expandedTitle="休息视频">
          <List two-line dense>
            {video.length
              ? video.map(item => (
                  <List.LinkItem onClick={() => this.openUrl(item.url)}>
                    <List.TextContainer>
                      <List.PrimaryText>{item.desc}</List.PrimaryText>
                      <List.SecondaryText>{item.who}</List.SecondaryText>
                    </List.TextContainer>
                  </List.LinkItem>
                ))
              : 'loading...'}
          </List>
        </ExpansionPanel>

        <ExpansionPanel title="拓展资源" expandedTitle="拓展资源">
          <List two-line dense>
            {video.length
              ? video.map(item => (
                  <List.LinkItem onClick={() => this.openUrl(item.url)}>
                    <List.TextContainer>
                      <List.PrimaryText>{item.desc}</List.PrimaryText>
                      <List.SecondaryText>{item.who}</List.SecondaryText>
                    </List.TextContainer>
                  </List.LinkItem>
                ))
              : 'loading...'}
          </List>
        </ExpansionPanel>

        <ExpansionPanel title="前端" expandedTitle="前端">
          <List two-line dense>
            {front_end.length
              ? front_end.map(item => (
                  <List.LinkItem onClick={() => this.openUrl(item.url)}>
                    <List.TextContainer>
                      <List.PrimaryText>{item.desc}</List.PrimaryText>
                      <List.SecondaryText>{item.who}</List.SecondaryText>
                    </List.TextContainer>
                  </List.LinkItem>
                ))
              : 'loading...'}
          </List>
        </ExpansionPanel>
        <ExpansionPanel
          title="更多"
          expandedTitle="更多"
        >
          <List two-line dense>
            {random.length
              ? random.map(item => (
                  <List.LinkItem onClick={() => this.openUrl(item.url)}>
                    <List.TextContainer>
                      <List.PrimaryText>{item.desc}</List.PrimaryText>
                      <List.SecondaryText>{item.who}</List.SecondaryText>
                    </List.TextContainer>
                  </List.LinkItem>
                ))
              : '点下面按钮就有了'}
          </List>
        </ExpansionPanel>
        <Button raised ripple className="random-btn" onClick={this.random}>
          随便看看
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  android: state.android,
  ios: state.ios,
  video: state.video,
  expand: state.expand,
  front_end: state.front_end,
  random: state.random
})

const mapDispatchToProps = {
  fetchAndroidData,
  fetchIOSData,
  fetchVideoData,
  fetchExpandData,
  fetchFrontEndData,
  fetchRandomData
}
export default connect(mapStateToProps, mapDispatchToProps)(Category)
