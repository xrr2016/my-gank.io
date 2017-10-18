import { h, Component } from 'preact'
import Card from 'preact-material-components/Card'
import ReactPlaceholder from 'react-placeholder'

import Api from '../../api'
import { Type } from '../../api'

export default class Bouns extends Component {
  state = {
    ready: false,
    datas: []
  }

  componentDidMount = () => {
    const { page, count } = this.state
    Api.category(Type.boon).then(res => {
      this.setState({ datas: res.results, ready: true })
    })
  }

  getMore = () => {}

  render() {
    const { datas } = this.state
    return (
      <div className="margin-top-104px">
        {datas.length
          ? datas.map(data => (
              <Card key={data._id}>
                <Card.MediaItem src={data.url} x="3" />
              </Card>
            ))
          : <ReactPlaceholder showLoadingAnimation type='media' rows={5} ready={this.state.ready} />}
      </div>
    )
  }
}
