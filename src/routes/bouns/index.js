import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import Card from 'preact-material-components/Card'

import { fetchBounsData } from '../../actions'

class Bouns extends Component {
  componentDidMount = () => {
    this.props.fetchBounsData()
  }

  render() {
    const { datas } = this.props
    return (
      <div className="margin-top-104px">
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">
              {datas.length
                ? datas.map(data => (
                    <Card key={data._id}>
                      <Card.MediaItem src={data.url} x="3" />
                    </Card>
                  ))
                : 'loading...'}
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  datas: state.bouns
})

export default connect(mapStateToProps, { fetchBounsData })(Bouns)
