import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import { fetchLatestData } from '../../actions'
import HomeCard from '../../components/homeCard'

class Home extends Component {
  componentDidMount = () => {
    if (this.props.latest.length) return
    this.props.fetchLatestData()
  }

  render() {
    const obj = this.props.latest[0]
    const items = []

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        obj[key].forEach(item => items.push(item))
      }
    }

    return (
      <div className="index-home">
        {items.length
          ? items.map(item => (
              <HomeCard key={item._id} openUrl={this.openUrl} {...item} />
            ))
          : 'loading...'}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  latest: state.latest
})

const mapDispatchToProps = {
  fetchLatestData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
