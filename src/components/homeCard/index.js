import { h, Component } from 'preact'
import Card from 'preact-material-components/Card'
import IconToggle from 'preact-material-components/IconToggle'

const HomeCard = props => {
  if (props.type === '福利') return ''
  let imgsrc = ''
  if (props.images) {
    imgsrc = `${props.images[0]}?imageView2/0/w/100`
  }

  const { desc, type, url, who } = props
  const toggleOnIcon = {
    content: 'favorite',
    label: 'Remove From Favorites'
  }
  const toggleOffIcon = {
    content: 'favorite_border',
    label: 'Add to Favorites'
  }
  return (
    <Card>
      <Card.Media>
        {!!imgsrc && <Card.MediaItem src={imgsrc} />}
        <Card.Title>
          {desc} <Card.Subtitle>{type}</Card.Subtitle>
        </Card.Title>
        <IconToggle
          role="button"
          tabindex="0"
          aria-pressed="false"
          aria-label="Add to favorites"
          data-toggle-on={toggleOnIcon}
          data-toggle-off={toggleOffIcon}
        >
          favorite_border
        </IconToggle>
        <Card.Subtitle>{who}</Card.Subtitle>
      </Card.Media>
      <Card.Actions>
        <Card.Action onClick={() => window.open(url)}>查看</Card.Action>
      </Card.Actions>
    </Card>
  )
}

export default HomeCard
