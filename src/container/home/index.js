import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import { fetchLatestData, addCollection } from '../../actions'
import HomeCard from '../../components/homeCard'
import ContentLoader from 'react-content-loader'

class Home extends Component {

  addCollect = item => this.props.addCollection(item)

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
      <div>
        {items.length
          ? items.map(item => (
              <HomeCard key={item._id} addCollect={this.addCollect} {...item} item={item}/>
            ))
          : Array(10)
              .fill(0)
              .map(() => (
                <ContentLoader style={{ marginBottom: 50 }} type="facebook" />
              ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  latest: state.latest
})

const mapDispatchToProps = {
  fetchLatestData,
  addCollection
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
