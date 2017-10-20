import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Card from 'preact-material-components/Card'

import { fetchBounsData } from '../../actions'

class Bouns extends Component {
  componentDidMount = () => {
    if (this.props.bouns.length) return
    this.props.fetchBounsData()
  }

  render() {
    const { bouns } = this.props
    return (
      <div>
        {bouns.length
          ? bouns.map(data => (
              <Card key={data._id}>
                <Card.MediaItem src={data.url} x="3" />
              </Card>
            ))
          : 'loading...'}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bouns: state.bouns
})

export default connect(mapStateToProps, { fetchBounsData })(Bouns)
