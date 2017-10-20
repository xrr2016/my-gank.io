import { h, Component } from 'preact'
import { Card, Icon, Button } from 'preact-material-components'
const w = document.getElementById('app').getBoundingClientRect().width
const show = w <= 768

const HomeCard = props => {
  if (props.type === '福利') return ''
  let imgsrc = ''
  if (props.images && show) {
    imgsrc = `${props.images[0]}?imageView2/0/w/${w - 64}`
  }
  const { desc, type, url, who, publishedAt, addCollect, item } = props
  
  return (
    <Card style={{ marginBottom: 10 }}>
      <Card.Primary>
        <Card.Title>{desc}</Card.Title>
        <Card.Subtitle style={{marginTop: 4}}>
          <span className="badge">{type}</span>
          <span className="badge">{who}</span>
          <span className="badge">{publishedAt.slice(0, 10)}</span>
        </Card.Subtitle>
      </Card.Primary>
      {!!imgsrc &&  (
        <Card.Media>
          <Card.MediaItem src={imgsrc} />
        </Card.Media>
      )}
      <Card.Actions>
        <Card.Action onClick={() => window.open(url)}>查看</Card.Action>
        <Card.Action onClick={() => addCollect(item)}>收藏</Card.Action>
      </Card.Actions>
    </Card>
  )
}

export default HomeCard
