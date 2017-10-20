import { h, Component } from 'preact'
import { Card, Icon, Snackbar, Button } from 'preact-material-components'

const HomeCard = props => {
  if (props.type === '福利') return ''
  let imgsrc = ''
  if (props.images) {
    imgsrc = `${props.images[0]}?imageView2/0/w/343`
  }

  const { desc, type, url, who, publishedAt } = props
  const toggleOnIcon = {
    content: 'favorite',
    label: 'Remove From Favorites'
  }
  const toggleOffIcon = {
    content: 'favorite_border',
    label: 'Add to Favorites'
  }
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
      {!!imgsrc && (
        <Card.Media>
          <Card.MediaItem src={imgsrc} />
        </Card.Media>
      )}
      <Card.Actions>
        <Card.Action onClick={() => window.open(url)}>查看</Card.Action>
        <Card.Action>收藏</Card.Action>
      </Card.Actions>
    </Card>
  )
}

export default HomeCard
