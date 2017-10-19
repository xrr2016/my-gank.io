import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import { fetchLatestData } from '../../actions'
import HomeCard from '../../components/homeCard'
import PlaceHolder from '../../components/placeHolder'
import style from './style'

class Home extends Component {
  componentDidMount = () => {
    this.props.fetchLatestData()
  }

  render() {
    const obj = this.props.datas[0]
    const items = []

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        obj[key].forEach(item => items.push(item))
      }
    }

    return (
      <div className="margin-top-104px">
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">
              {items.length
                ? items.map(item => (
                    <HomeCard key={item._id} openUrl={this.openUrl} {...item} />
                  ))
                : Array(10)
                    .fill(0)
                    .map(() => <PlaceHolder  img={true}/>)}
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  datas: state.latest
})

const mapDispatchToProps = {
  fetchLatestData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
